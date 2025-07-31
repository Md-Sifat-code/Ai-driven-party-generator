import Stats from "@/components/Home/Stats";
import WhatWeOffer from "@/components/Home/WhatWeOffer";
import WhoWeAre from "@/components/Home/WhoWeAre";
import Hero from "../components/Home/Hero";
import VideoBanner from "@/components/Home/VideoBanner";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Stats />
      <WhatWeOffer />
      <VideoBanner />
    </>
  );
};

export default LandingPage;
