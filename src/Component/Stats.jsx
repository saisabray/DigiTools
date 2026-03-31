import React from "react";

const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mx-5 md:px-10 py-10 md:py-14 mb-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 max-w-6xl mx-auto">
        {/* Stat 1 */}
        <div className="text-center">
          <div className="text-4xl md:text-[60px] font-extrabold text-white">
            50K
          </div>
          <div className="text-lg md:text-[24px] font-medium text-amber-100">
            Active Users
          </div>
        </div>

        <hr className="hidden md:block w-16 border border-amber-400 rotate-0 md:rotate-90" />

        <div className="text-center">
          <div className="text-4xl md:text-[60px] font-extrabold text-white">
            200+
          </div>
          <div className="text-lg md:text-[24px] font-medium text-amber-100">
            Premium Tools
          </div>
        </div>

        <hr className="hidden md:block w-16 border border-amber-400 rotate-0 md:rotate-90" />

        <div className="text-center">
          <div className="text-4xl md:text-[60px] font-extrabold text-white">
            4.9
          </div>
          <div className="text-lg md:text-[24px] font-medium text-amber-100">
            Rating
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
