import React, { useEffect, useState } from "react";

// import uploadImg from "@/assets/imgUpload.png";
// import uploadImg from "@/assets/imgUpload.png";
// import c1 from "@/assets/c1.jpg";
// import c2 from "@/assets/c2.jpg";
// import c3 from "@/assets/c3.jpg";
// import c4 from "@/assets/c4.png";
// import icon5 from "@/assets/icon 5.png";

// import img2 from "@/assets/img2.png"
// import img3 from "@/assets/img3.png"
// import img4 from "@/assets/img4.png"
// import {
//   ShieldCheck,
//   MessageCircleQuestion,
//   ImagePlus,

// } from "lucide-react";
// import { SlBadge } from "react-icons/sl";

// import bannerImg from  "@/assets/party-banner-bg.png"
import bannerImg from "@/assets/party-banner-bg.png";
import allBgImg from "@/assets/party-al-bg.png";
import { FiCalendar, FiChevronDown } from "react-icons/fi";
import {
  Sparkles,
  Crown,
  Rocket,
  Zap,
  Palette,
  PawPrint,
  Flag,
  Wand2,
  Plus,
  Scissors,
  TreePine,
  MapPin,
  Play,
  ChefHat,
} from "lucide-react";
// import { Calendar, ChevronDown } from 'lucide-react';
export default function PartyGenerator() {
  const [activeStep, setActiveStep] = useState("Basis Info");
  // const [selectedInsurance, setSelectedInsurance] = useState("Home");
  // const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  // const [userQuestion, setUserQuestion] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalType, setModalType] = useState<null | "claim" | "coverage">(null);

  // const insuranceTypes = ["Home", "Construction", "Business", "Motor", "Other"];

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const steps = [
    {
      id: "Basis Info",
      title: "Basis Info",
      icon: 1, // JSX icon
    },
    {
      id: "Party Details",
      title: "Party Details",

      icon: 2,
    },
    {
      id: "Preferences",
      title: "Preferences",

      icon: 3,
    },
    {
      id: "Your Perfect Party",
      title: "Your Perfect Party",

      icon: 4,
    },
  ];

  const getStepIndex = (stepId: string) => {
    return steps.findIndex((step) => step.id === stepId);
  };

  const isLineActive = (fromIndex: number) => {
    const currentIndex = getStepIndex(activeStep);
    return currentIndex > fromIndex;
  };

  // const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setUploadedFile(file.name);
  //   }
  // };

  // const handleDragOver = (e: React.DragEvent) => {
  //   e.preventDefault();
  // };

  // const handleDrop = (e: React.DragEvent) => {
  //   e.preventDefault();
  //   const files = e.dataTransfer.files;
  //   if (files.length > 0) {
  //     setUploadedFile(files[0].name);
  //   }
  // };

  // button  handle
  const handleNext = () => {
    const currentIndex = getStepIndex(activeStep);
    const nextIndex = currentIndex + 1;
    if (nextIndex < steps.length) {
      setActiveStep(steps[nextIndex].id);
    }
  };

  const handleBack = () => {
    const currentIndex = getStepIndex(activeStep);
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setActiveStep(steps[prevIndex].id);
    }
  };

  // this handel back for inside modul buton
  // const handleBack = () => {
  //   const currentIndex = getStepIndex(activeStep);
  //   const prevIndex = currentIndex - 1;
  //   if (prevIndex >= 0) {
  //     setActiveStep(steps[prevIndex].id);
  //   }
  // };

  // for first  stape
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");

  const ageOptions = [
    "0-1 years",
    "1-2 years",
    "2-3 years",
    "3-4 years",
    "4-5 years",
    "5-6 years",
    "6-7 years",
    "7-8 years",
    "8-9 years",
    "9-10 years",
    "10-11 years",
    "11-12 years",
    "12+ years",
  ];
  // for second tab
  const [formData, setFormData] = useState({
    guestCount: "",
    budget: "",
    date: "",
    location: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  // this is for therd tab

  const [selectedTheme, setSelectedTheme] = useState<string>("");
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const themes = [
    {
      id: "unicorns",
      name: "Unicorns",
      icon: Sparkles,
      color: "text-purple-500",
    },
    { id: "princess", name: "Princess", icon: Crown, color: "text-pink-500" },
    { id: "space", name: "Space", icon: Rocket, color: "text-blue-500" },
    {
      id: "superheroes",
      name: "Superheroes",
      icon: Zap,
      color: "text-yellow-500",
    },
    {
      id: "art-party",
      name: "Art Party",
      icon: Palette,
      color: "text-orange-500",
    },
    { id: "animals", name: "Animals", icon: PawPrint, color: "text-green-500" },
    { id: "pirates", name: "Pirates", icon: Flag, color: "text-gray-700" },
    {
      id: "fairy-tale",
      name: "Fairy Tale",
      icon: Wand2,
      color: "text-emerald-500",
    },
    { id: "other-theme", name: "Other", icon: Plus, color: "text-gray-500" },
  ];

  const activities = [
    {
      id: "craft",
      name: "Craft activities",
      icon: Scissors,
      color: "text-red-500",
    },
    {
      id: "outdoor",
      name: "Outdoor games",
      icon: TreePine,
      color: "text-green-500",
    },
    {
      id: "treasure",
      name: "Treasure hunt",
      icon: MapPin,
      color: "text-blue-500",
    },
    {
      id: "show",
      name: "Show or animation",
      icon: Play,
      color: "text-purple-500",
    },
    {
      id: "cooking",
      name: "Cooking workshop",
      icon: ChefHat,
      color: "text-orange-500",
    },
    { id: "other-activity", name: "Other", icon: Plus, color: "text-gray-500" },
  ];

  const handleThemeSelect = (themeId: string) => {
    setSelectedTheme(themeId);
  };

  const handleActivityToggle = (activityId: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activityId)
        ? prev.filter((id) => id !== activityId)
        : [...prev, activityId]
    );
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case "Basis Info":
        return (
          <div>
            <div className="max-w-4xl mx-auto  ">
              <h2 className="text-3xl font-bold text-center text-[#050505]">
                Step 1: Tell us about your party! 🎉
              </h2>
              <div className="bg-white  rounded-xl drop-shadow p-8 py-10 w-full  mt-10">
                <h1 className="text-2xl font-semibold text-gray-900 mb-8">
                  Tell us about your child
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label
                      htmlFor="childName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Child's Name
                    </label>
                    <input
                      type="text"
                      id="childName"
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      placeholder="Child's Name"
                      className="w-full px-4 py-3 border border-[#C9C9C9] rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="childAge"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Child's Age
                    </label>
                    <div className="relative">
                      <select
                        id="childAge"
                        value={childAge}
                        onChange={(e) => setChildAge(e.target.value)}
                        className="w-full px-4 py-3 border border-[#C9C9C9] rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 appearance-none bg-white cursor-pointer"
                      >
                        <option value="">Select age</option>
                        {ageOptions.map((age) => (
                          <option key={age} value={age}>
                            {age}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                        <FiChevronDown className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 cursor-pointer rounded-md text-white bg-[#223B7D] transition-all duration-300"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case "Party Details":
        return (
          <div className="max-w-4xl mx-auto">
            {/* <h2>this for second tab </h2> */}
            <h2 className="text-3xl font-bold text-center text-[#050505]">
              Step 2: A few more details! ✨
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 py-10 w-full max-w-4xl mt-10">
              <h1 className="text-2xl font-bold text-gray-900 mb-8">
                Party Details
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Number of Guests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <select
                      value={formData.guestCount}
                      onChange={(e) =>
                        handleInputChange("guestCount", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-[#C9C9C9] rounded-xl bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
                    >
                      <option value="">Select guest count</option>
                      <option value="1-10">1-10 guests</option>
                      <option value="11-25">11-25 guests</option>
                      <option value="26-50">26-50 guests</option>
                      <option value="51-100">51-100 guests</option>
                      <option value="100+">100+ guests</option>
                    </select>
                    <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <div className="relative">
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        handleInputChange("budget", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-[#C9C9C9] rounded-xl bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
                    >
                      <option value="">Select budget</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000+">$5,000+</option>
                    </select>
                    <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Party Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Party Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        handleInputChange("date", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-[#C9C9C9] rounded-xl bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="dd/mm/yy"
                    />
                    {/* <FiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" /> */}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <select
                      value={formData.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-[#C9C9C9] rounded-xl bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
                    >
                      <option value="">Select location</option>
                      <option value="home">At Home</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="venue">Event Venue</option>
                      <option value="park">Park/Outdoor</option>
                      <option value="hotel">Hotel</option>
                      <option value="other">Other</option>
                    </select>
                    <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  type="button"
                  className="px-6 py-2 cursor-pointer border border-[#C9C9C9] text-gray-700 rounded-md hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 transition-colors duration-200"
                >
                  Previous
                </button>

                <button
                  onClick={handleNext}
                  className="px-6 py-3 cursor-pointer rounded-md text-white bg-[#223B7D] transition-all duration-300"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );

      case "Preferences":
        return (
          <div className="max-w-4xl mx-auto">
            {/* <h2>this is therd tab </h2> */}
            <h2 className="text-3xl font-bold text-center text-[#050505]">
              Step 3: A few more details! ✨
            </h2>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
              {/* Party Details Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Party Details
                </h2>
                <p className="text-gray-600 mb-8">
                  Choose a theme or let AI surprise you!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {themes.map((theme) => {
                    const IconComponent = theme.icon;
                    return (
                      <button
                        key={theme.id}
                        onClick={() => handleThemeSelect(theme.id)}
                        className={`
                    p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md hover:-translate-y-1
                    ${
                      selectedTheme === theme.id
                        ? "border-blue-500 bg-blue-50 shadow-md"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }
                  `}
                      >
                        <div className="flex items-center justify-center space-x-3">
                          <IconComponent className={`w-5 h-5 ${theme.color}`} />
                          <span className="font-medium text-gray-800">
                            {theme.name}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Favourite Activities Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Favourite Activities
                </h2>
                <p className="text-gray-600 mb-8">
                  Would you like to add one or more specific activities?
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activities.map((activity) => {
                    const IconComponent = activity.icon;
                    const isSelected = selectedActivities.includes(activity.id);
                    return (
                      <button
                        key={activity.id}
                        onClick={() => handleActivityToggle(activity.id)}
                        className={`
                    p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md hover:-translate-y-1
                    ${
                      isSelected
                        ? "border-blue-500 bg-blue-50 shadow-md"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }
                  `}
                      >
                        <div className="flex items-center justify-center space-x-3">
                          <IconComponent
                            className={`w-5 h-5 ${activity.color}`}
                          />
                          <span className="font-medium text-gray-800">
                            {activity.name}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center">
                <button className="px-6 py-3 border-2 border-gray-300 rounded-xl font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                  Previous
                </button>

                <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Generate My Party!</span>
                </button>
              </div>

              {/* Selection Summary */}
            
            </div>
          </div>
        );

      case "Your Perfect Party":
        return (
          <div className="max-w-4xl mx-auto">
            {/* <h2>this is for result tab </h2> */}
            this is 4th tab
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <div className=" mt-12 ">
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <h1 className="text-black text-4xl md:text-6xl font-fredoka font-bold text-center">
              AI Party Generator
            </h1>
            <p className="text-center mt-4 text-[#595959]">
              Tell us about your party, and our AI will create the perfect plan
              in minutes!
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-[90vh] mt-10">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: `url(${allBgImg})` }}
        ></div>

        {/* Main Content */}
        <div className="relative z-10 px-2">
          {/* Header */}
          <div className=" mb-8 lg:mb-12 ">{/* here somthing  */}</div>

          <div className="max-w-6xl mx-auto bg-transparent pt-10 drop-shadow-sm rounded-2xl">
            <div className="flex justify-center mb-2">
              <div className="flex w-full max-w-6xl items-center px-2">
                {steps.map((step, index) => {
                  const currentIndex = getStepIndex(activeStep);
                  const stepIndex = getStepIndex(step.id);
                  const isCompleted = stepIndex < currentIndex;
                  const isActive = stepIndex === currentIndex;

                  return (
                    <React.Fragment key={step.id}>
                      <div className="flex-1 relative flex flex-col items-center   h-[130px] ">
                        {/* Horizontal Line (positioned behind the circle, vertically centered) */}
                        {index < steps.length - 1 && (
                          <div className="absolute top-6 left-1/2 w-full h-0.5 z-0">
                            <div
                              className={`w-full h-full ${
                                isLineActive(index)
                                  ? "bg-[#223B7D]" //this line for  active line color
                                  : "bg-gray-300"
                              }`}
                            ></div>
                          </div>
                        )}

                        {/* Circle */}
                        <div
                          onClick={() => setActiveStep(step.id)}
                          className={`relative z-10 w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300
                                ${
                                  isCompleted
                                    ? "bg-[#223B7D] text-white"
                                    : isActive
                                    ? "bg-[#223B7D] text-white"
                                    : " text-white bg-[#C9C9C9]"
                                }`}
                        >
                          {/* {isCompleted ? (
                                <img src={icon5} alt="" />
                              ) : (
                                step.icon
                              )} */}
                          <h2 className="text-xl font-bold">{step.icon}</h2>
                        </div>

                        {/* Title */}
                        <div className="text-center mt-2">
                          <div
                            className={`font-medium text-sm lg:text-base ${
                              isActive || isCompleted
                                ? "text-black"
                                : "text-gray-800"
                            }`}
                          >
                            <h2 className="text-base md:text-xl break-words whitespace-normal font-fredoka">
                              {" "}
                              {step.title} <br />{" "}
                              {/* <span className="">{step.subtitle}</span> */}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Main Content */}
            <div className="p-6 lg:p-8 mb-4 ">{renderStepContent()}</div>

            {/* Button */}
            {/* <div className="text-center mb-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 lg:px-12 py-3 lg:py-4 rounded-full text-base lg:text-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get started for free
            </button>
          </div> */}
          </div>
        </div>

        {/* Mobile Only Cart in Center */}
        {/* here i want to add design only for mobile   */}
      </div>
    </div>
  );
}
