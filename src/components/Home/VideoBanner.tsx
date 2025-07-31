import bgImage from "@/assets/videobanner.png";
import React from "react";
import { EdgeWave, PlayIcon } from "../Icons";

const VideoBanner: React.FC = () => {
  return (
    <div className="mx-auto mt-16 w-full max-w-[1440px]">
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Top wave */}
        <div className="absolute top-0 left-1/2 z-10 w-full max-w-[1440px] -translate-x-1/2 overflow-hidden leading-none">
          <EdgeWave />
        </div>

        {/* Overlay */}
        <div className="bg-primary absolute inset-0 opacity-45" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-24 text-center text-white sm:py-28 md:py-36 lg:py-44">
          <h1 className="font-fredoka max-w-2xl text-2xl leading-snug font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
            Wishing you a day full of
            <br /> happiness and joy
          </h1>

          <p className="mt-4 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Play Button */}
          <button className="text-primary mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105 sm:h-20 sm:w-20">
            <PlayIcon />
          </button>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-1/2 w-full max-w-[1440px] -translate-x-1/2 rotate-180 overflow-hidden leading-none">
          <EdgeWave />
        </div>
      </section>
    </div>
  );
};

export default VideoBanner;
