import React from "react";

const Navbar = ({ subscribed, handleTabClick }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm justify-between px-20 mx-auto sticky top-0 z-10 mb-">
      <div>
        <a className="btn btn-ghost text-3xl font-bold bg-gradient-to-r  from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          DigiTools
        </a>
      </div>
      <div>
        <ul className="flex gap-5 text-[16px] font-semibold text-[#101727]">
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between gap-5">
        <div
          className="flex-none"
          onClick={() => {
            console.log("Cart clicked");
            handleTabClick("Cart");
          }}
        >
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item">
                  {subscribed.length}
                </span>
              </div>
            </div>
          </div>
        </div>{" "}
        <button>
          <a href="#" className="text-[#101727] font-semibold">
            Login
          </a>
        </button>
        <button className="btn rounded-3xl bg-gradient-to-r font-bold from-[#4F39F6] to-[#9514FA] text-white">
          <a href="#">Get Started</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
