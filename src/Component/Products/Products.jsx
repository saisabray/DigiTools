import React from "react";
import Card from "../Card/Card";

const Products = ({ items, subscribed, setSubscribed }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 justify-items-center">
      {items.map((item) => (
        <Card
          key={item.id}
          item={item}
          subscribed={subscribed}
          setSubscribed={setSubscribed}
        />
      ))}
    </div>
  );
};

export default Products;
