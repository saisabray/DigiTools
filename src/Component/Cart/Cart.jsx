import React from "react";

const Cart = ({ subscribed, setSubscribed }) => {
  const handleRemove = (item) => {
    const filteredItems = subscribed.filter(subscribedItem => subscribedItem.name !== item.name);
    setSubscribed(filteredItems)
  }
  console.log(subscribed);
  return (
    <div>
      {subscribed.length > 0 ? (
        <div className="container mx-auto p-10 flex flex-col gap-4 text-start shadow-sm rounded-2xl">
          <h2 className="text-[#101727] text-[24px] font-bold">Your Cart</h2>
          {subscribed.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-3 bg-gray-100 rounded-2xl p-5"
            >
              <div className="flex justify-between items-center gap-3">
                <div className="border-1 border-gray-300 w-[50px] h-[50px] rounded-full flex items-center justify-center p-3 ">
                  <img src={item.icon} alt="" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#101727] text-[20px]">
                    {item.name}
                  </h3>
                  <p className="font-medium text-base text-[#627382]">
                    <span>$</span> {item.price}
                  </p>
                </div>
              </div>
              <button className="btn btn-error" onClick={()=>handleRemove(item)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="container mx-auto p-10 flex gap-3 flex-col justify-center items-center h-[350px] shadow-sm rounded-2xl">
          <h1 className="font-bold text-2xl text-gray-300">
            Your Cart Is Empty
          </h1>
          <p className="text-gray-300 text-base">
            Please add some items to your cart.
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
