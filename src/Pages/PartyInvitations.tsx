


import bannerImg from "@/assets/party-banner-bg.png";
import { useState } from "react";

export default function PartyInvitations() {

  const [activeTab, setActiveTab] = useState("Create Invitation");

  const tabs = [
    { id: "Create Invitation", label: "Create Invitation" },
    { id: "Preview & Send", label: "Preview & Send" },
    { id: "Manage RSVPs", label: "Manage RSVPs" },
    // { id: "reviews", label: "Reviews" },
  ];

  


  // this is tab content
  const renderContent = () => {
    switch (activeTab) {
      case "whats-included":
        return (
          <div className="rounded-xl border border-[#DFE1E6] bg-white p-8">
            <h2 className="mb-8 text-2xl text-gray-900">
             first tab
            </h2>
            
          </div>
        );
      case "activities":
        return (
          <div className="">
            <h2>second tab</h2>
          </div>
        );
      case "tutorial":
        return (
          <div className="py-10">
            therd tab 
          </div>
        );
      case "reviews":
        return (
          <div className="p-8">
           fort tab 
          </div>
        );
      default:
        return null;
    }
  };

  // this is   a main  part
  return (
    <div className="pb-20">
      {/* bg-banner here  */}  <div
        className="relative mt-10 h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <h1 className="font-fredoka text-center text-4xl font-bold text-black md:text-6xl">
            Party Invitations
            </h1>
            <p className="mt-4 text-center text-[#595959]  w-full mx-auto  ">
              Create beautiful invitations and manage your guest list effortlessly
            </p>
          </div>
        </div>
      </div>
      {/* teb section  */}
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <div className="overflow-hidden rounded-lg p-4">
          {/* Tab Navigation */}
          <div className="flex overflow-x-scroll rounded-xl border-b border-gray-200 bg-[#F5F5F5] p-2 md:overflow-x-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-3 cursor-pointer text-center font-medium transition-colors duration-200 ${
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
      {/* here add Love (this theme?) section */}
    </div>
  );
}
