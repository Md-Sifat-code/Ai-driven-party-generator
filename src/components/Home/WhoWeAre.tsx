import whoImg from "@/assets/who.png";
import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <div className="mt-10 w-full sm:mt-16 md:mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-5">
        {/* Main Content */}
        <main>
          <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <div className="max-w-2xl space-y-6 sm:space-y-8">
              <div className="text-primary text-sm sm:text-base">
                Who we are
              </div>

              <h1 className="font-fredoka text-3xl leading-snug font-medium text-black sm:text-4xl lg:text-5xl">
                There's nothing more magical than a child's imagination
              </h1>

              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                From sparkles and balloons to themed adventures — we help bring
                your child's dream party to life in minutes with the power of
                AI.
              </p>

              {/* CTA Button */}
              <button className="bg-secondary hover:bg-secondary-dark cursor-pointer rounded-lg px-6 py-3 text-base text-white transition-colors sm:px-8 sm:py-3.5">
                Plan My Party With AI
              </button>
            </div>

            {/* Right Content - Party Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
                <img
                  src={whoImg}
                  alt="Happy children at birthday party with party hats and balloons"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WhoWeAre;
