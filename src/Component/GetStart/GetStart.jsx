import React from "react";
import UserImg from "../../assets/main-assets/user.png";
import PackageImg from "../../assets/main-assets/package.png";
import RocketImg from "../../assets/main-assets/rocket.png";
const GetStart = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-gray-200 py-30 ">
      <h2 className="font-bold text-[48px] text-[#101727]">
        Get Started in 3 Steps
      </h2>
      <p className="text-base text-[#627382]">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="grid grid-cols-3 gap-30 justify-items-center mt-5 ">
        <div className="shadow-sm rounded-2xl px-10 py-20 flex flex-col justify-center items-center gap-5 relative bg-white">
          <div
            className="bg-gradient-to-r  from-[#4F39F6] to-[#9514FA] text-white
              font-semibold w-[30px] h-[30px] rounded-full flex justify-center items-center absolute top-5 right-5"
          >
            <span className="">01</span>
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
          className="shadow-sm rounded-2xl px-10 py-20 flex flex-col justify-center items-center gap-5
        bg-white"
        >
          <div
            className="bg-gradient-to-r  from-[#4F39F6] to-[#9514FA] text-white
              font-semibold w-[30px] h-[30px] rounded-full flex justify-center items-center absolute top-5 right-5"
          >
            <span className="">02</span>
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
        <div className="shadow-sm rounded-2xl px-10 py-20 flex flex-col justify-center items-center gap-5 relative bg-white">
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
  );
};

export default GetStart;
