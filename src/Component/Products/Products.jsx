import React from "react";
import Card from "../Card/Card";

const Products = ({ items, subscribed, setSubscribed }) => {
  return (
    <div className="container  lg:p-5 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 md:gap-8 lg:gap-10 py-8 justify-items-center">
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            subscribed={subscribed}
            setSubscribed={setSubscribed}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
