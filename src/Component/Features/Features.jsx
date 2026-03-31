import React from "react";

const Features = ({ features }) => {
  return (
    <div>
      {features.map((feature, index) => (
        <li className="text-[#101727] text-base " key={index}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 me-2 inline-block text-success"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          {feature}
        </li>
      ))}
    </div>
  );
};

export default Features;
