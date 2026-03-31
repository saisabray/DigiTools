import React from "react";
import BannerImg from "../../assets/main-assets/banner.png";
import DemoImg from "../../assets/main-assets/Play.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen px-5 md:px-10 py-10 md:py-0">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse md:my-10 items-center justify-between gap-10">
        <img
          className="w-full max-w-sm md:max-w-md lg:max-w-lg drop-shadow-xl"
          src={BannerImg}
          alt="Banner"
        />

        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Supercharge Your Digital Workflow
          </h1>

          <p className="py-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-xl">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex gap-4 flex-col sm:flex-row justify-center lg:justify-start">
            <button className="btn hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold rounded-full">
              Explore Products
            </button>

            <button className="btn hover:scale-105 transition-transform duration-300 btn-outline btn-primary rounded-full flex items-center gap-2">
              <img src={DemoImg} alt="Play icon" className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
