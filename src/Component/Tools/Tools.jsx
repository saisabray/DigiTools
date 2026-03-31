import React, { use, useState } from "react";
import Products from "../Products/Products";

const Tools = ({ itemsPromise }) => {
  const items = use(itemsPromise);
  const [activeTab, setActiveTab] = useState("Products");
  const handleTabClick = (Tab) => {
    setActiveTab(Tab);
  };
  return (
    <div className="mb-40 container mx-auto text-center flex flex-col gap-5">
      <h1 className="text-[48px] font-extrabold text-[#101727]">
        Premium Digital Tools
      </h1>
      <p className="text-[24px] text-[#627382]">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>
      <div className="bg-white shadow w-fit mx-auto rounded-full p-1 flex gap-1">
        <div className="flex justify-center items-center">
          <button
            className={`px-6 py-2 rounded-full ${activeTab === "Products" ? "bg-gradient-to-r  from-[#4F39F6] to-[#9514FA] text-white" : "text-gray"}`}
            onClick={() => {
              handleTabClick("Products");
            }}
          >
            Products
          </button>
          <button
            className={`px-6 py-2 rounded-full ${activeTab === "Cart" ? "bg-gradient-to-r  from-[#4F39F6] to-[#9514FA] text-white" : "text-gray"}`}
            onClick={() => {
              handleTabClick("Cart");
            }}
          >
            Cart
          </button>
        </div>
      </div>
      <div>
        <Products items={items} />
      </div>
    </div>
  );
};

export default Tools;
