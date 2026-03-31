import React from "react";

const Stats = () => {
  return (
    <div className="bg-gradient-to-r  from-[#4F39F6] to-[#9514FA] px-10 py-14 mb-30 ">
      <div className="flex justify-between w-[80%] mx-auto">
        <div>
          <div className="stat-value text-[60px] font-extrabold text-white">
            50K
          </div>
          <div className="stat-title text-[24px] font-medium text-amber-100">
            Active Users
          </div>
        </div>
        <div className="flex justify-between items-center gap-50">
          <hr className="border-1 border-amber-400 w-[50px] rotate-90 origin-center" />

          <div>
            <div className="stat-value text-[60px] font-extrabold text-white">
              200+
            </div>

            <div className="stat-title text-[24px] font-medium text-amber-100">
              Premium Tools
            </div>
          </div>
          <hr className="border-1 border-amber-400 w-[50px] rotate-90 origin-center" />
        </div>

        <div>
          <div className="stat-value text-[60px] font-extrabold text-white">
            4.9
          </div>
          <div className="stat- text-[24px] font-medium text-amber-100">
            Rating
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
