import React from "react";

const Workflow = () => {
  return (
    <div className=" bg-gradient-to-r  from-[#4F39F6] to-[#9514FA] py-30">
      <div className=" flex flex-col gap-1 md:gap-5 justify-center items-center  container mx-auto text-center">
        <h2 className="font-bold text-white text-[24px] md:text-[40px] px-3 md:px-0">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-base text-white p-5 md:p-0">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br />
          Start your free trial today.
        </p>
        <div className="flex gap-5">
          <button className="btn bg-white text-[#4F39F6] rounded-full">
            Explore Products
          </button>
          <button className="btn  bg-[#4F39F6]  text-white rounded-full">
            View Pricing
          </button>
        </div>
        <p className="text-base text-white p-5 md:p-0">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default Workflow;
