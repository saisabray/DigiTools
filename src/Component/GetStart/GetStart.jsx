import React from "react";
import UserImg from "../../assets/main-assets/user.png";
import PackageImg from "../../assets/main-assets/package.png";
import RocketImg from "../../assets/main-assets/rocket.png";
const GetStart = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-5 mb-20">
          <h2 className="font-bold text-3xl md:text-[48px] text-[#101727] text-center">
            Get Started in 3 Steps
          </h2>
          <p className="text-base text-[#627382] text-center">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-5 ">
          <div className="shadow-sm rounded-2xl px-10 py-20 flex flex-col justify-center items-center gap-5 relative bg-white hover:cursor-pointer hover:scale-105 transition-transform duration-300">
            <div
              className="bg-gradient-to-r  from-[#4F39F6] to-[#9514FA] text-white
              font-semibold w-[30px] h-[30px] rounded-full flex justify-center items-center absolute top-5 right-5"
            >
              <span>01</span>
            </div>
            <div className="bg-[#eae5edd1] flex justify-center items-center rounded-full w-[100px] h-[100px] p-3">
              <img src={UserImg} alt="" />
            </div>
            <h2 className="text-[24px] font-bold text-[#001931]">
              Create Account
            </h2>
            <p className="text-[#627382] text-base text-center">
              Sign up for free in seconds. No credit card <br /> required to get
              started.
            </p>
          </div>
          <div
            className="shadow-sm rounded-2xl px-10 py-20 flex flex-col justify-center items-center gap-5 relative
        bg-white hover:cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <div
              className="bg-gradient-to-r  from-[#4F39F6] to-[#9514FA] text-white
              font-semibold w-[30px] h-[30px] rounded-full flex justify-center items-center absolute top-5 right-5"
            >
              <span>02</span>
            </div>
            <div className="bg-[#eae5edd1] flex justify-center items-center rounded-full w-[100px] h-[100px] p-3">
              <img src={PackageImg} alt="" />
            </div>
            <h2 className="text-[24px] font-bold text-[#001931]">
              Choose Products
            </h2>
            <p className="text-[#627382] text-base text-center">
              Browse our catalog and select the tools <br />
              that fit your needs.
            </p>
          </div>
          <div className="shadow-sm rounded-2xl px-10 py-20 flex md:col-span-2 lg:col-span-1 flex-col justify-center items-center gap-5 relative bg-white hover:cursor-pointer hover:scale-105 transition-transform duration-300">
            <div
              className="bg-gradient-to-r  from-[#4F39F6] to-[#9514FA] text-white
              font-semibold w-[30px] h-[30px] rounded-full flex justify-center items-center absolute top-5 right-5"
            >
              <span className="">03</span>
            </div>
            <div className="bg-[#eae5edd1] flex justify-center items-center rounded-full w-[100px] h-[100px] p-3">
              <img src={RocketImg} alt="" />
            </div>
            <h2 className="text-[24px] font-bold text-[#001931]">
              Start Creating
            </h2>
            <p className="text-[#627382] text-base text-center">
              Download and start using your premium <br />
              tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
