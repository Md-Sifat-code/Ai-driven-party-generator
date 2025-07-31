import split from "@/assets/split.png";
import { AIGenerator, BoxIcon, CheckIcon, LetterIcon } from "../Icons";

export default function WhatWeOffer() {
  return (
    <div className="container mx-auto mt-10 px-4 sm:mt-16 md:mt-24 lg:px-5">
      <div className="mx-auto max-w-6xl text-center">
        {/* Header */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="text-primary text-xl font-medium">
            What we offer
          </span>
          <div className="relative -top-6 left-8 w-10">
            <img src={split} alt="" />
          </div>
        </div>

        <h2 className="font-fredoka mb-6 text-3xl sm:text-4xl md:text-5xl leading-tight font-bold text-[#191919]">
          Everything you need for the
          <br className="hidden sm:block" />
          perfect party
        </h2>

        <p className="mx-auto mb-12 sm:mb-16 max-w-2xl text-base sm:text-lg text-[#5A5C5F]">
          From AI-powered planning to curated DIY boxes, we've got every detail covered
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* AI Generator */}
          <div className="rounded-2xl bg-[#F6F6F6] p-6 sm:p-8 shadow-sm">
            <div className="mx-auto mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl">
              <AIGenerator />
            </div>
            <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-gray-800">
              AI Generator
            </h3>
            <p className="leading-relaxed text-gray-600 text-sm sm:text-base">
              Get personalized party plans in minutes with
              <br className="hidden sm:block" />
              our smart AI assistant
            </p>
          </div>

          {/* DIY Party Boxes */}
          <div className="rounded-2xl bg-[#F6F6F6] p-6 sm:p-8 shadow-sm">
            <div className="mx-auto mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl">
              <BoxIcon />
            </div>
            <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-gray-800">
              DIY Party Boxes
            </h3>
            <p className="leading-relaxed text-gray-600 text-sm sm:text-base">
              Curated boxes with everything you need for
              <br className="hidden sm:block" />
              the perfect themed party
            </p>
          </div>

          {/* Smart Invitations */}
          <div className="rounded-2xl bg-[#F6F6F6] p-6 sm:p-8 shadow-sm">
            <div className="mx-auto mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl">
              <LetterIcon />
            </div>
            <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-gray-800">
              Smart Invitations
            </h3>
            <p className="leading-relaxed text-gray-600 text-sm sm:text-base">
              Create beautiful invitations and track RSVPs
              <br className="hidden sm:block" />
              effortlessly
            </p>
          </div>

          {/* Party Checklist */}
          <div className="rounded-2xl bg-[#F6F6F6] p-6 sm:p-8 shadow-sm">
            <div className="mx-auto mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl">
              <CheckIcon />
            </div>
            <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-gray-800">
              Party Checklist
            </h3>
            <p className="leading-relaxed text-gray-600 text-sm sm:text-base">
              Never forget anything with our intelligent party
              <br className="hidden sm:block" />
              planning checklist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
