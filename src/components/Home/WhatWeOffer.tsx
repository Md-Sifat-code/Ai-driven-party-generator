import backgroundImage from "@/assets/bgdoodle.png";
import split from "@/assets/split.png";
import { AIGenerator, BoxIcon, CheckIcon, LetterIcon } from "../Icons";

export default function WhatWeOffer() {
  return (
    <div
      className="container mx-auto mt-10 px-4 py-10 sm:py-16 md:mt-16 md:py-24 lg:px-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-6xl text-center">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center justify-center sm:flex-row sm:gap-2">
          <span className="text-primary text-lg font-medium sm:text-xl">
            What we offer
          </span>
          <div className="relative mt-2 w-10 sm:-top-6 sm:left-8 sm:mt-0">
            <img src={split} alt="split line" className="mx-auto sm:mx-0" />
          </div>
        </div>

        {/* Title */}
        <h2 className="font-fredoka mb-4 text-2xl leading-snug font-bold text-[#191919] sm:mb-6 sm:text-4xl sm:leading-tight md:text-5xl">
          Everything you need for the
          <br className="hidden sm:block" />
          perfect party
        </h2>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-xl px-2 text-sm text-[#5A5C5F] sm:mb-16 sm:px-0 sm:text-base md:text-lg">
          From AI-powered planning to curated DIY boxes, we've got every detail
          covered
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 px-1 sm:grid-cols-2 sm:gap-6 sm:px-0 md:gap-8">
          {/* Feature Card */}
          {[
            {
              icon: <AIGenerator />,
              title: "AI Generator",
              desc: "Get personalized party plans in minutes with our smart AI assistant",
            },
            {
              icon: <BoxIcon />,
              title: "DIY Party Boxes",
              desc: "Curated boxes with everything you need for the perfect themed party",
            },
            {
              icon: <LetterIcon />,
              title: "Smart Invitations",
              desc: "Create beautiful invitations and track RSVPs effortlessly",
            },
            {
              icon: <CheckIcon />,
              title: "Party Checklist",
              desc: "Never forget anything with our intelligent party planning checklist",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#F6F6F6] p-5 text-center shadow-sm sm:p-6 sm:text-left md:p-8"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl sm:mx-0 sm:mb-6 sm:h-14 sm:w-14 md:h-16 md:w-16">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-800 sm:mb-3 sm:text-xl md:text-2xl">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
