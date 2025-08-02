import React, {  useState } from "react";


import bannerImg from "@/assets/party-banner-bg.png";
import allBgImg from "@/assets/party-al-bg.png";
import { FiChevronDown } from "react-icons/fi";
import {
  BookmarkIcon,
  Boxes,
  Download,
  ListChecks,
  Mail,
  Music,
  RefreshCcw,
  ShoppingCartIcon,
  
} from "lucide-react";
import sortVideo from "../../public/sort-img.mp4";
import gift1 from "@/assets/giftImg-1.jpg";
import gift2 from "@/assets/gioftImg-2.jpg";
import gift3 from "@/assets/giftImg-3.jpg";
import  QCode  from "@/assets/Qcode.png";
import musicImg1  from "@/assets/mic1.png";
import musicImg2  from "@/assets/mic-2.png";
import musicImg3  from "@/assets/mic-3.png";


// import { Calendar, ChevronDown } from 'lucide-react';
export default function PartyGenerator() {
  const [activeStep, setActiveStep] = useState("Basis Info");


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


  // for first  step
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
  // this is for third tab

  const [selectedTheme, setSelectedTheme] = useState<string>("");
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const titles = [
    "30 min before: Setup decorations",
    "Party start: Welcome & costume photos",
    "First 30 min: Superhero training",
    "Food & cake time",
    "Final 30 min: Games & prizes",
  ];

  const themes = [
    {
      id: "unicorns",
      name: "🦄 Unicorns",
    },
    { id: "princess", name: "🏰 Princess" },
    { id: "space", name: "🚀 Space" },
    {
      id: "superheroes",
      name: "🦸 Superheroes",
    },
    {
      id: "art-party",
      name: "🎨 Art Party",
    },
    { id: "animals", name: "🐾 Animals" },
    { id: "pirates", name: "🏴‍☠️ Pirates" },
    {
      id: "fairy-tale",
      name: "🧚 Fairy Tale",
    },
    { id: "other-theme", name: "Other" },
  ];

  const activities = [
    {
      id: "craft",
      name: "Craft activities ✂️",
    },
    {
      id: "outdoor",
      name: "Outdoor games 🌳",
    },
    {
      id: "treasure",
      name: "Treasure hunt 🗺️",
    },
    {
      id: "show",
      name: "Show or animation 🎭",
    },
    {
      id: "cooking",
      name: "Cooking workshop 🍪",
    },
    { id: "other-activity", name: "Other" },
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

  // this is for forth tab
  const gifts = [
    {
      id: 1,
      title: "LEGO Superhero Building Set",
      description: "Perfect for creative building and superhero adventures",
      price: "$24.99",
      retailer: "Amazon",
      image: gift1, // Using the provided image
    },
    {
      id: 2,
      title: "Superhero Cape & Mask Set",
      description: "High-quality costume pieces for dress-up fun",
      price: "$30.99",
      retailer: "Etsy",
      image: gift2, // Placeholder for superhero costumes
    },
    {
      id: 3,
      title: "Hero Action Figure Collection ",
      description: "Collectible figures for imaginative play Amazon",
      price: "$35.99",
      retailer: "Amazon",
      image: gift3, // Placeholder for action figures
    },
  ];
  // fak data for  musicCards
  const musicCards = [
    {
      id: 1,
      title: "Superhero Theme Songs",
      description: "Epic superhero movie soundtracks and theme songs",
      platform: "YouTube",
      image:musicImg1,
    },
    {
      id: 2,
      title: "Kids Dance Party Mix",
      description: "High-energy songs perfect for kids' dance time",
      platform: "Spotify",
image:musicImg2,
    },
    {
      id: 3,
      title: "Happy Birthday Remixes",
      description: "Fun birthday song variations and remixes",
      platform: "YouTube",
      image:musicImg3,
    },
  ];

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
            {/* <h2>this is thead tab </h2> */}
            <h2 className="text-3xl font-bold text-center text-[#050505]">
              Step 3: A few more details! ✨
            </h2>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8  mt-10">
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
                    return (
                      <button
                        key={theme.id}
                        onClick={() => handleThemeSelect(theme.id)}
                        className={`
                    p-4 rounded-xl border-2  cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-1
                    ${
                      selectedTheme === theme.id
                        ? "border-[#223B7D] bg-blue-50 shadow-md"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }
                  `}
                      >
                        <div className="flex items-center justify-center space-x-3">
                          <span className="font-medium text-gray-800">
                            {theme.name}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Favorite Activities Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Favorite Activities
                </h2>
                <p className="text-gray-600 mb-8">
                  Would you like to add one or more specific activities?
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                  {activities.map((activity) => {
                    const isSelected = selectedActivities.includes(activity.id);
                    return (
                      <button
                        key={activity.id}
                        onClick={() => handleActivityToggle(activity.id)}
                        className={`
                    p-4 rounded-xl cursor-pointer border-2 transition-all duration-200 hover:shadow-md hover:-translate-y-1
                    ${
                      isSelected
                        ? "border-[#223B7D] bg-blue-50 shadow-md"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }
                  `}
                      >
                        <div className="flex items-center justify-center space-x-3">
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
              <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
                <button
                  onClick={handleBack}
                  className="px-6 py-3  cursor-pointer border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                >
                  Previous
                </button>

                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-[#223B7D] cursor-pointer text-white rounded-lg font-medium hover:bg-blue-700 hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
                >
                  ✨ Generate My Party!
                </button>
              </div>

              {/* Selection Summary */}
            </div>
          </div>
        );

      case "Your Perfect Party":
        return (
          <div className="container mx-auto  ">
            <div className=" pb-24   px-8 pt-10 bg-white">
              {/* Header */}
              <div className="text-center md:text-left mb-6">
                <h1 className="text-base md:text-2xl font-bold font-fredoka text-gray-900 mb-3 ">
                  <span>🎉</span>
                  Your Perfect Party Plan is Ready!
                </h1>
                <p className="text-gray-600 text-base">
                  Here's what our AI created just for you
                </p>
              </div>

              {/* Main Content Grid */}
              <div className="grid md:grid-cols-2 px-8 gap-8 mb-12">
                {/* Theme & Decorations */}
                <div className=" mt-6">
                  <div className=" mb-6">
                    <h3 className="text-md md:text-xl font-fredoka font-semibold text-[#223B7D]">
                      🎨 Theme & Decorations
                    </h3>
                  </div>

                  <div className="mb-5 ">
                    <span className="inline-block bg-[#223B7D] text-white px-6 py-3 rounded-full text-xs md:text-sm font-medium">
                      Superhero Adventure
                    </span>
                  </div>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#223B7D] rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Superhero banners and balloons</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#223B7D] rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>City skyline backdrop</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#223B7D] rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Comic book style table settings</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2  bg-[#223B7D] rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>LED string lights in primary colors</span>
                    </li>
                  </ul>
                </div>

                {/* Fun Activities */}
                <div className="mt-6">
                  <div className=" mb-4">
                    <h3 className="text-xl font-semibold text-[#191919] font-fredoka">
                      🎯 Fun Activities
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Superhero training obstacle course</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Design your own superhero mask</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Pin the cape on the superhero</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Superhero dance party</span>
                    </li>
                  </ul>
                </div>

                {/* Food & Treats */}
                <div className="mt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-[#223B7D] font-fredoka">
                      🍰 Food & Treats
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#FFD54F] rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Hero sandwiches with fun names</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#FFD54F] rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Power-up fruit kabobs</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#FFD54F] rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Superhero cake with cape design</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#FFD54F] rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Comic book cookies</span>
                    </li>
                  </ul>
                </div>

                {/* Party Supplies  */}
                <div className="mt-6">
                  <div className=" mb-3">
                    <h3 className="text-xl font-semibold text-[#191919] font-fredoka">
                      🛍️ Party Supplies
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#F8BBD0] rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Superhero capes for each guest</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#F8BBD0] rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Mask-making supplies</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#F8BBD0] rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Activity prizes and stickers</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#F8BBD0] rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Themed party favors</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Party Timeline  bottom part*/}
              <div className=" p-6 pt-8 border-t  border-[#E2E2E2]">
                <div className=" mb-6">
                  <h3 className="text-xl font-fredoka font-semibold text-gray-900">
                    ⏰ Party Timeline
                  </h3>
                </div>

                <div className="flex flex-wrap gap-4">
                  {titles.map((title, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-md border border-blue-400 mb-4 px-6 py-1.5"
                    >
                      {/* Background Video */}
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover z-0"
                      >
                        <source src={sortVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Black overlay */}
                      <div className="absolute inset-0 bg-black/60 z-10"></div>

                      {/* Text content */}
                      <div className="relative z-20">
                        <h1 className="text-white text-base font-normal">
                          {title}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* card section  */}
              <div>
                {/* Product Cards Grid */}
                <div className="mb-12 mt-8 border-t border-[#E2E2E2] pt-10 flex flex-col md:flex-row md:gap-0 gap-4  content-center justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold font-fredoka">
                      🎁 Suggested Gifts
                    </h2>
                    <p className="mt-2 text-gray-600 text-base">
                      Based on age and theme, here are great gift ideas:
                    </p>
                  </div>
                  <button className="px-6 py-2 cursor-pointer  border  rounded-md">
                  
                    <RefreshCcw className="inline h-4 w-4 mr-2" />
                    Refresh
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {gifts.map((gift) => (
                    <div
                      key={gift.id}
                      className="bg-white rounded-3xl p-3  border border-[#DFE1E6] overflow-hidden"
                    >
                      <div className="relative">
                        <img
                          src={gift.image || "/placeholder.svg"}
                          alt={gift.title}
                          className="w-full h-48 object-cover rounded-xl"
                        />
                        <button className="absolute top-3 cursor-pointer right-3 p-2 bg-white rounded-sm shadow-sm hover:bg-gray-50">
                          <BookmarkIcon />
                        </button>
                      </div>
                      <div className="p-2">
                        <h3 className="font-bold  text-gray-900 mb-2">
                          {gift.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {gift.description}
                        </p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xl font-bold text-[#223B7D]">
                            {gift.price}
                          </span>
                          <span className="text-sm text-gray-500 border rounded-md border-[#DFE1E6] px-2 py-1">
                            {gift.retailer}
                          </span>
                        </div>
                        <button className="w-full cursor-pointer text-sm font-normal bg-[#223B7D] text-white py-2 px-4 rounded-lg  hover:bg-blue-900 transition-colors flex items-center justify-center gap-2">
                          <ShoppingCartIcon />
                          Buy Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* 🎶 Party Music Playlist for Superhero Adventure */}
              <div>
                  <div className="mb-12 mt-8 border-t border-[#E2E2E2] pt-10 flex flex-col md:flex-row md:gap-0 gap-4  content-center justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold font-fredoka">
                      🎶 Party Music Playlist for Superhero Adventure
                    </h2>
                    <p className="mt-2 text-gray-600 text-base">
                      Get the party started with this curated playlist:
                    </p>
                  </div>
                  
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                  {musicCards.map((card) => (
                    <div
                      key={card.id}
                      className="bg-white border border-[#DFE1E6]  rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden`}
                          >
                            <img
                              src={card.image}
                              alt={card.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900  text-base mb-1 line-clamp-2">
                              {card.title}
                            </h3>
                            <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                              {card.description}
                            </p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <span className="text-sm text-gray-500 border rounded-md border-[#DFE1E6] px-2 py-1">
                            {card.platform}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <button className="bg-[#223B7D] cursor-pointer hover:bg-blue-800 text-white px-8 py-2 rounded-md font-normal transition-colors duration-200 flex items-center gap-2 shadow-md hover:shadow-lg">
                            <Music size={18} />
                            Listen
                          </button>

                          <div className="w-12 h-12  flex items-center justify-center bg-gray-50">
                            {/* <QrCode size={24} className="text-gray-400" /> */}
                            <img src={ QCode} alt=""  className=""/>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* button group  */}
          
              <div className=" flex flex-col md:flex-row gap-6 content-center justify-center pt-8 border-t border-[#E2E2E2] mt-10">
                 <button className="px-6 py-2 cursor-pointer border rounded"> <Mail height={24}  width={24} className="inline mr-2"/> Email Plan</button>
                 <button className="px-6 py-2 cursor-pointer border rounded"> <ListChecks height={24}  width={24} className="inline mr-2"/> Create Checklist</button>
                 <button className="px-6 py-2 cursor-pointer border rounded"> <Boxes  height={24}  width={24} className="inline mr-2"/> View More Gifts</button>
                 <button className="px-6 py-2 cursor-pointer bg-[#223B7D] rounded text-white"> <Download  height={24}  width={24} className="inline mr-2"/> View More Gifts</button>
              </div>
            </div>
            <div className=" mt-20 pb-10 flex justify-center">
              <button className="px-6 py-3 border cursor-pointer border-[#DFE1E6] rounded">  Plan Another Party</button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // main div here
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
      <div className="relative h-[90vh] mt-1">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: `url(${allBgImg})` }}
        ></div>

        {/* Main Content */}
        <div className="relative z-10 px-2">
          {/* Header */}
          <div className=" mb-8 lg:mb-12 ">{/* here something  */}</div>

          <div className="max-w-6xl mx-auto -mt-20 pt-10  bg-transparent drop-shadow-sm rounded-2xl">
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
                          <h2 className="text-xl font-bold font-fredoka">{step.icon}</h2>
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
