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
    
      icon:3,
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

  // const handleBack = () => {
  //   const currentIndex = getStepIndex(activeStep);
  //   const prevIndex = currentIndex - 1;
  //   if (prevIndex >= 0) {
  //     setActiveStep(steps[prevIndex].id);
  //   }
  // };

  // this handel back for inside modul buton
  // const handleBack = () => {
  //   const currentIndex = getStepIndex(activeStep);
  //   const prevIndex = currentIndex - 1;
  //   if (prevIndex >= 0) {
  //     setActiveStep(steps[prevIndex].id);
  //   }
  // };

  const renderStepContent = () => {
    switch (activeStep) {
      case "upload":
        return (
          <div>
            <div className="max-w-3xl mx-auto ">first tab</div>
            <div className="mt-8">
              <button
                onClick={handleNext}
                className="w-full py-3 cursor-pointer rounded-full text-white bg-gradient-to-b from-[#4881FF] to-[#0151FF] hover:from-[#0151FF] hover:to-[#0031AA] transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        );

      case "question":
        return (
          <div className="max-w-3xl mx-auto">
            <h2>this for second tab </h2>
          </div>
        );

      case "verify":
        return (
          <div className="max-w-3xl mx-auto">
            <h2>this is therd tab </h2>
          </div>
        );

      case "result":
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
    <div className="container mx-auto bg-gray-500 mt-10">
      <div className="bg-[#EDEEF0]">
        <div className="col-span-full md:col-span-3 md:row-span-5 md:col-start-2 md:row-start-1 ">
          <div className="  ">
            {/* Background Decorative Cards */}

            {/* Main Content */}
            <div className="px-2">
              {/* Header */}
              <div className=" mb-8 lg:mb-12 ">
          {/* here somthing  */}
              </div>

              <div className="max-w-6xl mx-auto bg-white pt-10 drop-shadow-sm rounded-2xl">
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
                                      ? "bg-[#223B7D]"   //this line for  active line color
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
                                <h2 className="text-base md:text-xl break-words whitespace-normal">
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

              {/* Disclaimer */}
              <div className="max-w-4xl mx-auto bg-[#EFF6FF] rounded-lg shadow-md p-4 lg:p-6 mt-6">
                <h4 className="text-center   text-blue-500 font-medium mb-4 text-sm lg:text-xl">
                  Disclaimer
                </h4>
                <p className="text-xs lg:text-sm text-gray-600 text-center px-8 leading-relaxed">
                  The information and analysis provided on this website are
                  general in nature and do not constitute financial advice. We
                  do not consider your personal objectives, financial situation,
                  or needs. You should seek professional guidance from your
                  insurer, financial advisor, or licensed insurance broker
                  before making any decisions related to your insurance
                  coverage. While we strive to provide accurate and up-to-date
                  information, we make no guarantees as to its completeness or
                  applicability to your specific circumstances. Use of this
                  website and its tools is at your own discretion and risk.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Only Cart in Center */}
        {/* here i want to add design only for mobile   */}
      </div>
    </div>
  );
}
