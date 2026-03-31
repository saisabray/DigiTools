import React from "react";
import BannerImg from "../../assets/main-assets/banner.png";
import DemoImg from "../../assets/main-assets/Play.png";

const Banner = () => {
  return (
    <div className="hero  min-h-screen  ">
      <div className="container flex justify-between items-center flex-col lg:flex-row-reverse">
        <img className="drop-shadow-xl ml-30 px-5" src={BannerImg} />
        <div>
          <h1 className="text-5xl font-bold">
            Supercharge YourDigital Workflow
          </h1>
          <p className="py-6">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex gap-6 flex-col sm:flex-row">
            <button
              className="btn bg-gradient-to-r  from-[#4F39F6] to-[#9514FA] text-white
              font-semibold rounded-full"
            >
              Explore Products
            </button>
            <button className="btn btn-outline btn-primary rounded-full">
              <img src={DemoImg} alt="" /> Watch Demo{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
