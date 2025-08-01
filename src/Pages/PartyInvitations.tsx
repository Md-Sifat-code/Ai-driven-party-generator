import bannerImg from "@/assets/party-banner-bg.png";
import allBgImg from "@/assets/party-al-bg.png";
import { useState } from "react";
import { ChevronDown, Calendar, Sparkles, MapPin, Mail, Download, Share2 } from "lucide-react";
import inviteImg1  from "@/assets/inviteimg-1.jpg"
import inviteImg2  from "@/assets/inviteIMG-2.png"
import inviteImg3  from "@/assets/box-img-3.jpg"
import inviteImg4  from "@/assets/inviteImg-4.jpg"
export default function PartyInvitations() {
  const [activeTab, setActiveTab] = useState("Create Invitation");

  const tabs = [
    { id: "Create Invitation", label: "Create Invitation" },
    { id: "Preview & Send", label: "Preview & Send" },
    { id: "Manage RSVPs", label: "Manage RSVPs" },
    // { id: "reviews", label: "Reviews" },
  ];


  const [isAgeDropdownOpen, setIsAgeDropdownOpen] = useState(false);
  const [partyDetails, setPartyDetails] = useState({
    childName: "",
    age: "",
    partyDate: "",
    location: "",
    rsvpContact: "",
    customMessage: "",
  });

  const ages = Array.from({ length: 13 }, (_, i) => i + 1);

  const handleInputChange = (
    field: keyof typeof partyDetails,
    value: string,
  ) => {
    setPartyDetails({
      ...partyDetails,
      [field]: value,
    });
  };

  const handleAgeSelect = (age: number) => {
    handleInputChange("age", age.toString());
    setIsAgeDropdownOpen(false);
  };

  const templates = [
    {
      id: "superhero",
      title: "Superhero Adventure",
      description: "Bold and heroic design with comic elements",
      imageUrl:
         inviteImg1,
      colors: ["bg-[#80DEEA]", "bg-[#FF5630]", "bg-[#FFD54F]"],
    },
    {
      id: "princess",
      title: "Princess Castle",
      description: "Elegant and magical with royal elements",
      imageUrl:inviteImg2,
       colors: ["bg-[#80DEEA]", "bg-[#FF5630]", "bg-[#FFD54F]"],
    },
    {
      id: "dinosaur",
      title: "Dinosaur Discovery",
      description: "Prehistoric adventure with fossil patterns",
      imageUrl:inviteImg3,
        colors: ["bg-[#80DEEA]", "bg-[#FF5630]", "bg-[#FFD54F]"],
    },
    {
      id: "space",
      title: "Space Explorer",
      description: "Cosmic design with stars and planets",
      imageUrl:inviteImg4,
        colors: ["bg-[#80DEEA]", "bg-[#FF5630]", "bg-[#FFD54F]"],
    },
  ];
//   this data for last atb 
  const [guests, setGuests] = useState([
    {
      id: "1",
      name: "Emma Johnson",
      email: "emma@email.com",
      phone: "555-0123",
      status: "pending",
    },
    {
      id: "2",
      name: "Emma Johnson",
      email: "emma@email.com",
      phone: "555-0123",
      status: "confirmed",
    },
    {
      id: "3",
      name: "Emma Johnson",
      email: "emma@email.com",
      phone: "555-0123",
      status: "declined",
    },
  ])

  const [newGuest, setNewGuest] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleAddGuest = () => {
    if (newGuest.name && newGuest.email && newGuest.phone) {
      const guest = {
        id: Date.now().toString(),
        ...newGuest,
        status: "pending",
      }
      setGuests([...guests, guest])
      setNewGuest({ name: "", email: "", phone: "" })
    }
  }

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "confirmed":
        return "bg-green-100 text-green-800 border-green-200"
      case "declined":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }
  // this is tab content
  const renderContent = () => {
    switch (activeTab) {
      case "Create Invitation":
        return (
          <div className="">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Choose Template Section */}
                <div className="rounded-2xl bg-white p-5 border-2 border-[#E6E6E6]">
                  <h2 className="mb-6 text-2xl font-semibold text-[#000000]">
                    Choose Template
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {templates.map((template) => (
                      <div
                        key={template.id}
                        className={`relative cursor-pointer border-[#223B7D] bg-[#FFF7ED] rounded-xl border-2 transition-all duration-200 `}
                        onClick={() => setSelectedTemplate(template.id)}
                      >
                        <div className="aspect-video h-52 w-full overflow-hidden rounded-t-lg">
                          <img
                            src={template.imageUrl}
                            alt={template.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-4 pb-6">
                          <h3 className="mb-1 text-xl font-medium text-gray-900">
                            {template.title}
                          </h3>
                          <p className="mb-3 text-sm text-gray-600">
                            {template.description}
                          </p>
                          <div className="flex space-x-1">
                            {template.colors.map((color, index) => (
                              <div
                                key={index}
                                className={`h-3 w-3 rounded-full ${color}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Party Details Section */}
                <div className="rounded-2xl bg-white p-5 border-2 border-[#E6E6E6] ">
                  <h2 className="mb-6 text-2xl font-semibold text-[#000000]">
                    Party Details
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Child's Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your you name"
                        className="w-full rounded-lg border border-[#CECECE] px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={partyDetails.childName}
                        onChange={(e) =>
                          handleInputChange("childName", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Age
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between rounded-lg border border-[#CECECE] bg-white px-3 py-2 text-left focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          onClick={() =>
                            setIsAgeDropdownOpen(!isAgeDropdownOpen)
                          }
                        >
                          <span
                            className={
                              partyDetails.age
                                ? "text-gray-900"
                                : "text-gray-500"
                            }
                          >
                            {partyDetails.age || "Select age"}
                          </span>
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        </button>

                        {isAgeDropdownOpen && (
                          <div className="absolute z-10 mt-1 max-h-40 w-full overflow-y-auto rounded-lg border border-[#CECECE] bg-white shadow-lg">
                            {ages.map((age) => (
                              <button
                                key={age}
                                type="button"
                                className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                                onClick={() => handleAgeSelect(age)}
                              >
                                {age}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Party Date/ Time
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="dd/mm/yyyy"
                          className="w-full rounded-lg border border-[#CECECE] px-3 py-2 pr-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          value={partyDetails.partyDate}
                          onChange={(e) =>
                            handleInputChange("partyDate", e.target.value)
                          }
                        />
                        <Calendar className="absolute top-2.5 right-3 h-4 w-4 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Location
                      </label>
                      <input
                        type="text"
                        placeholder="party address"
                        className="w-full rounded-lg border border-[#CECECE] px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={partyDetails.location}
                        onChange={(e) =>
                          handleInputChange("location", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        RSVP Contact
                      </label>
                      <input
                        type="text"
                        placeholder="Phone number or email"
                        className="w-full rounded-lg border border-[#CECECE] px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={partyDetails.rsvpContact}
                        onChange={(e) =>
                          handleInputChange("rsvpContact", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <label className="block text-sm font-medium text-gray-700">
                          Custom Message
                        </label>
                        <button className="flex items-center border border-[#C3C3C3] rounded-sm cursor-pointer  px-6 py-2 text-sm text-[#223B7D] hover:text-blue-700">
                          <Sparkles className="h-4 w-4" />
                          <span>AI Suggest</span>
                        </button>
                      </div>
                      <textarea
                        placeholder="Add a personal message to your invitation..."
                        rows={4}
                        className="w-full resize-none rounded-lg border border-[#CECECE] px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={partyDetails.customMessage}
                        onChange={(e) =>
                          handleInputChange("customMessage", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Preview & Send":
        return (
          <div className="">
          <div className="grid gap-8 lg:grid-cols-2">
          {/* Invitation Preview */}
          <div>
            <div className="bg-white rounded-3xl  shadow-sm border border-[#E5E5E5]">
              <div className="p-6 pb-4">
                <h2 className="text-2xl font-semibold text-gray-900">Invitation Preview</h2>
              </div>
              <div className="px-6 pb-6">
                <div className="relative">
                  {/* Gradient border wrapper */}
                  <div className="rounded-3xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-6">
                    <div className="rounded-xl bg-white p-8 text-center">
                      {/* Party icon */}
                      <div className="mb-4 flex justify-center">
                        <div className="text-4xl">🎉</div>
                      </div>

                      {/* Main heading */}
                      <h2 className="mb-2 text-2xl font-bold text-[#223B7D]">You're Invited!</h2>

                      {/* Subtitle */}
                      <p className="mb-6 text-gray-700 text-base font-medium">Child's Name is turning X!</p>

                      {/* Date and Location */}
                      <div className="mb-6 space-y-3">
                        <div className="flex items-center justify-center gap-2 text-gray-700">
                          <Calendar className="h-5 w-5"/>
                          <span className="text-base font-medium">Date at Time</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-gray-700">
                          <MapPin className="h-5 w-5"/>
                          <span className="text-base font-medium">Location</span>
                          
                        </div>
                      </div>

                      {/* Custom message */}
                      <p className="mb-3 bg-[#F9FAFB] py-2 text-gray-500 italic text-sm">Your custom message will appear here...</p>

                      {/* RSVP */}
                      <p className="text-gray-700 text-sm">RSVP: Contact info</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Send Invitations */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200">
              <div className="p-6 pb-4">
                <h2 className="text-2xl font-semibold text-gray-900">Send Invitations</h2>
              </div>
              <div className="px-6 pb-6 space-y-4">
                <button className="w-full bg-[#223B7D] cursor-pointer hover:bg-blue-900 text-white h-12 rounded-lg font-normal transition-colors flex items-center justify-center gap-2">
        
                  <Mail className="text-sm"/>
                  Send Via Email
                </button>

                <button className="w-full h-12 border cursor-pointer border-gray-300 bg-white hover:bg-gray-50 text-[#223B7D] rounded-lg font-normal  transition-colors flex items-center justify-center gap-2">
                  <Download  className="text-sm"/>
                  Download PDF
                </button>

                <button className="w-full h-12 border cursor-pointer border-gray-300 bg-white hover:bg-gray-50 text-[#223B7D] rounded-lg font-normal  transition-colors flex items-center justify-center gap-2">
                   <Share2 className="text-sm"/>
                  Share Link
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200">
              <div className="p-6 ">
                <h2 className="text-2xl font-semibold text-gray-900">Quick Stats</h2>
              </div>
              <div className="px-6 pb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-[#FAF5FF] p-4 text-center">
                    <div className="text-2xl font-bold text-[#FD8EFF] mb-1">50</div>
                    <div className="text-sm text-gray-700">Total Guests</div>
                  </div>
                  <div className="rounded-lg bg-[#AEF4B85C] p-4 text-center">
                    <div className="text-2xl font-bold text-[#36B37E] mb-1">40</div>
                    <div className="text-sm text-gray-700">Confirmed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        );
      case "Manage RSVPs":
        return (
          <div className="">
          <div className=" space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Guest List & RSVPs</h1>

      <div className="bg-white  ">
        <div className="p-6 bg-[#F9FAFB] rounded-xl">
          <h2 className="text-lg font-semibold mb-4 text-[#000000]">Add New Guest</h2>
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-end">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Guest name"
                value={newGuest.name}
                onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
                className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
              />
            </div>
            <div className="flex-1">
              <input
                type="email"
                placeholder="Email"
                value={newGuest.email}
                onChange={(e) => setNewGuest({ ...newGuest, email: e.target.value })}
                className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Phone"
                value={newGuest.phone}
                onChange={(e) => setNewGuest({ ...newGuest, phone: e.target.value })}
                className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
              />
            </div>
            <button
              onClick={handleAddGuest}
              className="h-12 px-8 bg-[#223B7D] cursor-pointer hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 focus:outline-none "
            >
              Add Guest
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {guests.map((guest) => (
          <div key={guest.id} className="bg-white border border-[#DFDFDF] rounded-xl ">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{guest.name}</h3>
                  <p className="text-gray-600">
                    {guest.email} • {guest.phone}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center px-2    py-1 rounded-full text-xs font-medium border ${getStatusStyles(guest.status)}`}
                  >
                    {guest.status}
                  </span>
                  <button className="bg-[#223B7D] cursor-pointer hover:bg-blue-700 text-white h-10 w-10 rounded-md flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
          </div>
        );
      default:
        return null;
    }
  };

  // this is   a main  part
  return (
    <div className="pb-20">
      {/* bg-banner here  */}{" "}
      <div
        className="relative mt-10 h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <h1 className="font-fredoka text-center text-4xl font-bold text-black md:text-6xl">
              Party Invitations
            </h1>
            <p className="mx-auto mt-4 w-full text-center text-[#595959]">
              Create beautiful invitations and manage your guest list
              effortlessly
            </p>
          </div>
        </div>
      </div>
      {/* here is the my tab  */}
      <div className="relative mt-1 h-[90vh]">
        {/* Background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: `url(${allBgImg})` }}
        ></div>

        {/* Foreground Content */}
        <div className="relative z-10 mx-auto mt-4 max-w-7xl px-4">
          <div className="overflow-hidden rounded-lg p-2">
            {/* Tab Navigation */}
            <div className="flex overflow-x-scroll rounded-xl border-b border-gray-200 bg-[#F5F5F5] p-2 md:overflow-x-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 cursor-pointer px-6 py-3 text-center font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? "rounded-md bg-[#223B7D] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-10 bg-white">{renderContent()}</div>
          </div>
        </div>
      </div>
      {/* teb section  */}
      {/* here add Love (this theme?) section */}
    </div>
  );
}
