
import React, { useEffect, useState } from "react";

// import uploadImg from "@/assets/imgUpload.png";
import uploadImg from "@/assets/imgUpload.png";
import c1 from "@/assets/c1.jpg";
import c2 from "@/assets/c2.jpg";
import c3 from "@/assets/c3.jpg";
import c4 from "@/assets/c4.png";
import icon5 from "@/assets/icon 5.png";

// import img2 from "@/assets/img2.png"
// import img3 from "@/assets/img3.png"
// import img4 from "@/assets/img4.png"
import {
  ShieldCheck,
  MessageCircleQuestion,
  ImagePlus,
  TriangleAlert,
  ArrowLeft,
} from "lucide-react";
import { SlBadge } from "react-icons/sl";






export default function PartyGenerator() {
   const [activeStep, setActiveStep] = useState("upload");
  // const [selectedInsurance, setSelectedInsurance] = useState("Home");
  // const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  // const [userQuestion, setUserQuestion] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<null | "claim" | "coverage">(null);

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
      id: "upload",
      title: "Upload",
      subtitle: "PDF",
      icon: <ImagePlus className="w-6 h-6" />, // JSX icon
    },
    {
      id: "question",
      title: "Ask your",
      subtitle: "question",
      icon: <MessageCircleQuestion className="w-6 h-6" />,
    },
    {
      id: "verify",
      title: "Verify",
      subtitle: "",
      icon: <SlBadge className="w-6 h-6" />,
    },
    {
      id: "result",
      title: "Get your",
      subtitle: "result",
      icon: <ShieldCheck className="w-6 h-6" />,
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

  const renderStepContent = () => {
    switch (activeStep) {
      case "upload":
        return (
          <div>
            <div className="max-w-3xl mx-auto ">
              

          first tab

           

           
            </div>
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
            {/* <h2>this for question tab </h2> */}
            <div className="text-center ">
              <h2 className="text-2xl text-center font-semibold mb-2">
                {" "}
                What's your question?
              </h2>
              <h2>e.g., 'Am I covered for storm damage to my fence?"</h2>
              <h2>
                {" "}
                e.g. If my factory flooded am I covered for $1.4m worth of
                stock?
              </h2>
              <div className="w-full mx-auto mt-4">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
              </div>
              <div className="flex  gap-6 mt-4">
                <button
                  onClick={handleBack}
                  className="px-8 py-3 bg-[#EDEEF0] rounded-full font-semibold cursor-pointer hover:bg-[#bbbfc7]"
                >
                  Back
                </button>
                {/* next button  */}
                <button
                  onClick={handleNext}
                  className="w-full py-3 cursor-pointer rounded-full text-white bg-gradient-to-b from-[#4881FF] to-[#0151FF] hover:from-[#0151FF] hover:to-[#0031AA] transition-all duration-300"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );

      case "verify":
        return (
          <div className="max-w-3xl mx-auto">
            {/* <h2>for very tab </h2> */}
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-bold text-center text-[#212325]">
                  Almost there!
                </h2>
                <h2 className="text-md text-center text-[#212325]">
                  Verify you're human to see your free analysis.
                </h2>
              </div>
              <form className="   space-y-6">
                <button className="py-3 w-full cursor-pointer text-[#0151FF] font-semibold rounded-full border border-[#0151FF] flex items-center justify-center gap-2">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  Sign in with Google
                </button>

                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    name="name"
                    className="w-full px-4 py-2 border border-[#C6CAD1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    name="email"
                    className="w-full px-4 py-2 border border-[#C6CAD1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <label
                    htmlFor="agree"
                    className="flex justify-between items-center w-full px-4 py-2  border border-[#C6CAD1] rounded-md cursor-pointer text-sm text-gray-700"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="agree"
                        name="agree"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        required
                      />
                      I’m not a robot
                    </div>
                    {/* Placeholder-style text */}
                    <span className="text-gray-400 text-xs italic">
                      reCAPTCHA
                    </span>
                  </label>
                </div>

                <div className="flex  gap-6 mt-6">
                  <button
                    onClick={handleBack}
                    className="px-8 py-3 bg-[#EDEEF0] rounded-full font-semibold cursor-pointer hover:bg-[#bbbfc7]"
                  >
                    Back
                  </button>
                  {/* next button  */}
                  <button
                    onClick={handleNext}
                    className="w-full py-3 cursor-pointer rounded-full text-white bg-gradient-to-b from-[#4881FF] to-[#0151FF] hover:from-[#0151FF] hover:to-[#0031AA] transition-all duration-300"
                  >
                    Get My Analysis
                  </button>
                </div>
              </form>
            </div>
          </div>
        );

      case "result":
        return (
          <div className="max-w-4xl mx-auto">
            {/* <h2>this is for result tab </h2> */}
            <div className="text-center space-y-2">
              <h2 className="text-xl">Likelihood of Coverage</h2>
              <button className="px-6 py-3 bg-[#D5FFDA] rounded-full text-[#008C05] font-semibold ">
                Coverage likely
              </button>
              <h2 className="text-xl">Confidence Score</h2>
              <h2 className="text-4xl text-[#79A27D] font-bold">65%</h2>
            </div>
            <div className="max-w-xl mx-auto ">
              <h2 className="mb-3 text-2xl">Explanation</h2>
              <div className="bg-[#F8FAFC] p-4 ">
                <p>
                  Based on the policy summary, while Section A covers storm
                  damage to the main building (root, walls), the Key Exclusions
                  section explicitly states that storm damage to auxiliary
                  structures not attached to the main building, such as fences,
                  is not covered under this policy.
                </p>
              </div>
              <div className="bg-[#EFF6FF] mt-8 p-6 border-2 border-[#00A3E0] rounded-2xl">
                <h2 className="text-xl text-center font-semibold">
                  Results not as expected? Get a trusted Aussie broker to find
                  you the best coverage available
                </h2>
                <p className="text-md text-center mt-4">
                  Join thousands of Aussies using affordable brokers to find,
                  bind and manage their insurance claims.
                </p>
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="py-3 text-white cursor-pointer bg-[#f09a37] hover:bg-[#4881FF] hover:text-white  border-2 px-6 border-[#4881FF] rounded-full text-center"
                  >
                    Get an Aussie broker
                  </button>
                </div>
              </div>
              <div className="mt-6">
                {/* <button
                    
                    className="w-full py-3 cursor-pointer rounded-full text-white bg-gradient-to-b from-[#4881FF] to-[#0151FF] hover:from-[#0151FF] hover:to-[#0031AA] transition-all duration-300"
                  >
                   Start a New Analysis
                  </button> */}
                <div>
                  {/* Button to open modal */}
                  <button
                    onClick={() => setActiveStep("upload")}
                    className="w-full py-3 cursor-pointer  rounded-full text-white bg-gradient-to-b from-[#4881FF] to-[#0151FF] hover:from-[#0151FF] hover:to-[#0031AA] transition-all duration-300"
                  >
                    Start a New Analysis
                  </button>

                  {/* Modal */}
                  {isModalOpen && (
                    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
                      <div className="bg-white w-[90%] max-w-md p-6 px-8 rounded-lg shadow-lg relative">
                        <button
                          onClick={() => setIsModalOpen(false)}
                          className="absolute top-2 right-6 cursor-pointer text-[#4881FF] hover:text-black text-xl"
                        >
                          &times;
                        </button>
                        <h2 className="text-lg text-[#4881FF]">
                          {" "}
                          How can we help?
                        </h2>
                        <div className="mt-4">
                          {/* <button className="border-2 border-[#4881FF] text-[#4881FF] hover:bg-[#4881FF] hover:text-white py-3 w-full rounded-full mb-3">Support with a claim</button>
                          <button className="border-2 border-[#4881FF] text-[#4881FF] py-3 w-full rounded-full hover:bg-[#4881FF] hover:text-white">Get real coverage</button> */}
                          <button
                            onClick={() => setModalType("claim")}
                            className="border-2 border-[#4881FF] text-[#4881FF] hover:bg-[#4881FF] hover:text-white py-3 w-full rounded-full mb-3"
                          >
                            Support with a claim
                          </button>

                          <button
                            onClick={() => setModalType("coverage")}
                            className="border-2 border-[#4881FF] text-[#4881FF] py-3 w-full rounded-full hover:bg-[#4881FF] hover:text-white"
                          >
                            Get real coverage
                          </button>
                        </div>
                        <div className="flex justify-between  items-center mt-6 ">
                          <button
                            onClick={() => setIsModalOpen(false)}
                            className="text-[#4881FF] cursor-pointer "
                          >
                            Close
                          </button>
                          {/* <button className="bg-[#4881FF] cursor-pointer  px-6 py-2  text-white rounded-full">
                            Next <ArrowRight className="inline" />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <div className="container mx-auto bg-gray-500 mt-10">
          <div className="bg-[#EDEEF0]">
      <div className="container mx-auto hidden md:block">
        <div className=" w-full px-4 pb-10 pt-8 ">
          <div className="grid grid-cols-5  gap-4 mt-10 ">
            <div className="hidden md:block  row-span-5 ">
              <article className="hidden md:flex relative isolate  justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-96 max-w-sm mx-auto">
                {/* Background Image */}
                <img
                  src={c1}
                  alt="University of Southern California"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Top-left Text */}
                <h3 className="absolute top-4 left-4 z-10 text-2xl  text-white">
                  Save Big on Car Insurance
                </h3>
              </article>
              <article className="hidden md:flex  relative mt-8 isolate justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-96 max-w-sm mx-auto">
                {/* Background Image */}
                <img
                  src={c2}
                  alt="University of Southern California"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Top-left Text */}
                <h3 className="absolute top-4 left-4 z-10 text-2xl  text-white">
                  Secure Your Family's Future
                </h3>
              </article>
            </div>
            {/* second cart image  */}
            <div className="hidden md:block  row-span-5 col-start-5 row-start-1 ">
              <article className=" hidden md:flex relative isolate  justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-96 max-w-sm mx-auto">
                {/* Background Image */}
                <img
                  src={c3}
                  alt="University of Southern California"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Top-left Text */}
                <h3 className="absolute top-4 left-4 z-10 text-2xl  text-white">
                  Protect Your Biggest Asset
                </h3>
              </article>
              <article className="hidden md:flex relative mt-8 isolate justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-96 max-w-sm mx-auto">
                {/* Background Image */}
                <img
                  src={c4}
                  alt="University of Southern California"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Top-left Text */}
                <h3 className="absolute top-4 left-4 z-10 text-2xl  text-white">
                  Plan Your Financial Freedom
                </h3>
              </article>
            </div>

            {/* main turd div  */}
            <div className="col-span-full md:col-span-3 md:row-span-5 md:col-start-2 md:row-start-1 ">
              <div className="  ">
                {/* Background Decorative Cards */}

                {/* Main Content */}
                <div className="px-2">
                  {/* Header */}
                  <div className=" mb-8 lg:mb-12 ">
                    <h1 className="text-3xl text-center tektur-font lg:text-5xl font-bold text-[#4881FF] mb-2 lg:mb-2">
                      Covermate
                    </h1>
                    <p className="text-lg text-center lg:text-xl text-black mb-4 lg:mb-4 ">
                      Free insurance checker
                    </p>
                    {activeStep === "upload" && (
                      <div>
                        <div className="py-2">
                          <p className="text-base">
                            Thousands of Australians are paying for policies
                            that won't protect them when it matters most.
                          </p>
                        </div>
                        <div className=" mb-2 lg:mb-2">
                          <ul className="space-y-2 text-left">
                            <li className="flex items-center text-black text-base lg:text-base">
                              <div className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></div>
                              Check your cover in minutes
                            </li>
                            <li className="flex items-center text-black  lg:text-base">
                              <div className="w-2 h-2 bg-black rounded-full mr-3 text-base flex-shrink-0"></div>
                              Identify gaps in your policy
                            </li>
                            <li className="flex items-center text-black  lg:text-base">
                              <div className="w-2 h-2 bg-black rounded-full mr-3  flex-shrink-0"></div>
                              Avoid costly surprises
                            </li>
                          </ul>
                        </div>

                        <p className="text-left lg:text-base text-black mb-6 lg:mb-8">
                          An estimated 870,000 homes and 64% of businesses are
                          underinsured — don't be one of them.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="w-full bg-white pt-10 drop-shadow-sm rounded-2xl">
                    <div className="flex justify-center mb-2">
                      <div className="flex w-full max-w-6xl items-center px-4">
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
                                          ? "bg-[#0151FFD6]"
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
                                    ? "bg-[#1861FF] text-white"
                                    : isActive
                                    ? "bg-blue-500 text-white"
                                    : "border-2 border-[#0151FFD6] text-blue-500 bg-[#F0F5FD]"
                                }`}
                                >
                                  {isCompleted ? (
                                    <img src={icon5} alt="" />
                                  ) : (
                                    step.icon
                                  )}
                                </div>

                                {/* Title */}
                                <div className="text-center mt-2">
                                  <div
                                    className={`font-medium text-sm lg:text-base ${
                                      isActive || isCompleted
                                        ? "text-blue-500"
                                        : "text-gray-800"
                                    }`}
                                  >
                                    <h2>
                                      {" "}
                                      {step.title} <br />{" "}
                                      <span className="">{step.subtitle}</span>
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
                    <div className="p-6 lg:p-8 mb-4 ">
                      {renderStepContent()}
                    </div>

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
                      general in nature and do not constitute financial advice.
                      We do not consider your personal objectives, financial
                      situation, or needs. You should seek professional guidance
                      from your insurer, financial advisor, or licensed
                      insurance broker before making any decisions related to
                      your insurance coverage. While we strive to provide
                      accurate and up-to-date information, we make no guarantees
                      as to its completeness or applicability to your specific
                      circumstances. Use of this website and its tools is at
                      your own discretion and risk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Only Cart in Center */}
          </div>
        </div>
      </div>
      {modalType && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md p-6 px-8 rounded-lg shadow-lg relative">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-2 right-6 cursor-pointer text-[#4881FF] hover:text-black text-xl"
            >
              &times;
            </button>

            {/* <h2 className="text-lg text-[#4881FF] mb-4">How can we help?</h2> */}

            {modalType === "claim" && (
              // fist component
              <div className="px-8 ">
                <div className="flex justify-center">
                  <TriangleAlert className="w-24 h-24 text-[#4881FF]" />
                </div>
                <h2 className="text-lg text-[#4881FF] py-2 text-center">
                  Unfortunately, we are unable to support with processing claims
                  at this point in time
                </h2>
                <button
                  onClick={() => setModalType(null)}
                  className="bg-[#4881FF] cursor-pointer w-full py-2 text-white rounded-full mt-2"
                >
                  <ArrowLeft className="inline mr-4" /> Go Back
                  {/* <ArrowRight className="inline" /> */}
                </button>
              </div>
            )}

            {modalType === "coverage" && (
              <div>
                <div></div>
                <h2 className="text-xl font-semibold mb-4 text-[#1861FF] ">
                  What's your easiest <br /> contact point?
                </h2>
                <div>
                  <button className="border-2 cursor-pointer border-[#4881FF] rounded-full py-3 w-full">
                    Email
                  </button>
                </div>
                <div className="mb-4 bg-[#F1F5F9] mt-4 p-4 rounded-xl">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <div className="flex items-center cursor-pointer bg-gray-100 rounded-md overflow-hidden border border-gray-300">
                    <div className="flex items-center justify-center bg-gradient-to-b from-[#4881FF] to-[#0151FF] px-3 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M6.62 10.79a15.09 15.09 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.16 22 2 13.84 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1.003 1.003 0 01-.21 1.11l-2.2 2.2z" />
                      </svg>
                    </div>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      placeholder="Enter Your Number"
                      className="w-full px-3 py-2 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                </div>
                <h2 className="text-[#4881FF]">
                  Call Us:{" "}
                  <span className="text-[#212325]">+1 (234) 567-890</span>{" "}
                </h2>
                <div className="flex justify-between  items-center py-4">
                  <button
                    onClick={() => setModalType(null)}
                    className="text-[#4881FF] cursor-pointer "
                  >
                    Close
                  </button>
                  <button className="bg-[#0151FF] cursor-pointer  px-6 py-3  text-white rounded-full">
                    Submit
                  </button>
                </div>
              </div>
            )}

            {/* <div className=" mt-3">
              <button className="bg-[#4881FF] cursor-pointer w-full py-2 text-white rounded-full">
                Go Back
                <ArrowRight className="inline" />
              </button>
            </div> */}
          </div>
        </div>
      )}

      {/* here i want to add design only for mobile   */}
      <div className="block md:hidden  mt-8">
          {/* first 2 card */}
        <div className="bg-white ">
          <div className="">
            <article className=" relative isolate  justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-96 max-w-sm mx-auto">
                {/* Background Image */}
                <img
                  src={c1}
                  alt="University of Southern California"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Top-left Text */}
                <h3 className="absolute top-4 left-4 z-10 text-2xl  text-white">
                  Save Big on Car Insurance
                </h3>
              </article>
             
          </div>
           {/* main content */}
          <div>
            <div className=" pt-8 pb-8 px-4">
                {/* Background Decorative Cards */}

                {/* Main Content */}
                <div className="px-2">
                  {/* Header */}
                  <div className=" mb-8 lg:mb-12 ">
                    <h1 className="text-3xl text-center tektur-font lg:text-5xl font-bold text-[#4881FF] mb-2 lg:mb-2">
                      Covermate
                    </h1>
                    <p className="text-lg text-center lg:text-xl text-black mb-4 lg:mb-4 ">
                      Free insurance checker
                    </p>
                    {activeStep === "upload" && (
                      <div>
                        <div className="py-4">
                          <p className="text-base">
                            Thousands of Australians are paying for policies
                            that won't protect them when it matters most.
                          </p>
                        </div>
                        <div className=" mb-4 lg:mb-6">
                          <ul className="space-y-2 text-left">
                            <li className="flex items-center text-black text-base lg:text-base">
                              <div className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></div>
                              Check your cover in minutes
                            </li>
                            <li className="flex items-center text-black  lg:text-base">
                              <div className="w-2 h-2 bg-black rounded-full mr-3 text-base flex-shrink-0"></div>
                              Identify gaps in your policy
                            </li>
                            <li className="flex items-center text-black  lg:text-base">
                              <div className="w-2 h-2 bg-black rounded-full mr-3  flex-shrink-0"></div>
                              Avoid costly surprises
                            </li>
                          </ul>
                        </div>

                        <p className="text-left lg:text-base text-black mb-6 lg:mb-8">
                          An estimated 870,000 homes and 64% of businesses are
                          underinsured — don't be one of them.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="w-full bg-white pt-10 drop-shadow-sm rounded-2xl">
                    <div className="flex justify-center mb-2">
                      <div className="flex w-full max-w-6xl items-center px-4">
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
                                          ? "bg-[#0151FFD6]"
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
                                    ? "bg-[#1861FF] text-white"
                                    : isActive
                                    ? "bg-blue-500 text-white"
                                    : "border-2 border-[#0151FFD6] text-blue-500 bg-[#F0F5FD]"
                                }`}
                                >
                                  {isCompleted ? (
                                    <img src={icon5} alt="" />
                                  ) : (
                                    step.icon
                                  )}
                                </div>

                                {/* Title */}
                                <div className="text-center mt-2">
                                  <div
                                    className={`font-medium text-sm lg:text-base ${
                                      isActive || isCompleted
                                        ? "text-blue-500"
                                        : "text-gray-800"
                                    }`}
                                  >
                                    <h2>
                                      {" "}
                                      {step.title} <br />{" "}
                                      <span className="">{step.subtitle}</span>
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
                    <div className="p-6 lg:p-8 mb-4 ">
                      {renderStepContent()}
                    </div>

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
                      general in nature and do not constitute financial advice.
                      We do not consider your personal objectives, financial
                      situation, or needs. You should seek professional guidance
                      from your insurer, financial advisor, or licensed
                      insurance broker before making any decisions related to
                      your insurance coverage. While we strive to provide
                      accurate and up-to-date information, we make no guarantees
                      as to its completeness or applicability to your specific
                      circumstances. Use of this website and its tools is at
                      your own discretion and risk.
                    </p>
                  </div>
                </div>
              </div>
          </div>
            {/* last 2 card */}
          <div>
            <article className="  relative isolate  justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-96 max-w-sm mx-auto">
                {/* Background Image */}
                <img
                  src={c3}
                  alt="University of Southern California"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Top-left Text */}
                <h3 className="absolute top-4 left-4 z-10 text-2xl  text-white">
                  Protect Your Biggest Asset
                </h3>
              </article>
              <article className="relative mt-8 isolate justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-96 max-w-sm mx-auto">
                {/* Background Image */}
                <img
                  src={c4}
                  alt="University of Southern California"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Top-left Text */}
                <h3 className="absolute top-4 left-4 z-10 text-2xl  text-white">
                  Plan Your Financial Freedom
                </h3>
              </article>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
