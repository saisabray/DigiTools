import React, { useState } from "react";
import Features from "../Features/Features";

const Card = ({ item, subscribed, setSubscribed }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubscribe = () => {
    const alreadyExists = subscribed.find(
      (subItem) => subItem.name === item.name,
    );

    if (alreadyExists) {
      alert("Item already added to cart!");
      return;
    }
    setIsSubscribed(true);
    setSubscribed([...subscribed, item]);
  };
  return (
    <div className="card bg-base-100 shadow-sm h-full text-start hover:cursor-pointer hover:scale-105 transition-transform duration-300 p-5">
      <div className="card-body flex flex-col gap-5">
        <div className="flex justify-between items-center relative flex-1">
          <div className="border-1 border-gray-300 w-[50px] h-[50px] rounded-full flex items-center justify-center p-3 ">
            <img src={item.icon} alt="" className="" />
          </div>
          <div className="absolute -top-3 right-0">
            <span className="badge badge-lg rounded-full badge-warning">
              {item.tag}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[24px] text-[#101727] font-bold">{item.name}</h2>
          <p className="text-[#627382] text-base">{item.description}</p>
          <p>
            <span className="text-xl text-[#101727] font-bold">
              ${item.price}
            </span>
            /Mo
          </p>

          <ul>
            <Features features={item.features} />
          </ul>
          <div className="mt-6">
            <button
              className="btn bg-gradient-to-r  from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full "
              onClick={handleSubscribe}
            >
              {isSubscribed ? "Subscribed" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
