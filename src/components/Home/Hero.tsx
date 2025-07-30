import bgImage from "../../assets/main-bg.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Party Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 custom-image-curve"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/40 to-black/70 transition-all duration-500 ease-in-out custom-image-curve" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Tagline Badge */}
        <div className=" backdrop-blur bg-black/10 border border-white/45 text-xs md:text-sm text-white px-3 py-2 rounded-full mb-4 shadow">
          ✨ New: AI-Powered Party Planning
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-fredoka font-semibold text-white leading-tight mb-4 drop-shadow-md">
          Organize your child’s
          <br />
          <span className="text-white">party in a few clicks</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[#F4F5F7] text-sm sm:text-base max-w-2xl mx-auto mb-10 md:mb-16 font-light">
          From theme ideas to a full schedule, our AI assistant helps you create
          a magical and unforgettable celebration effortlessly.
        </p>

        {/* CTA Button */}
        <button className="bg-secondary hover:bg-secondary-light cursor-pointer text-white py-2 md:py-3.5 px-5 md:px-7 rounded-lg text-sm md:text-base transition duration-200">
          Plan My Party With AI
        </button>
      </div>
    </section>
  );
};

export default Hero;
