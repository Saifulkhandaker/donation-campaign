import React from "react";
import image from "../../../assets/Images/Banner.png"

const Banner = () => {
  return (
    <div>
      <div className="hero">
        <img
          className="hero-overlay md:h-[70vh] inset-0 bg-white opacity-20  w-full rounded-lg"
          src={image}
          alt=""
        />
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className=" md:mb-10 text-xl md:text-5xl text-black font-bold">
              I Grow By Helping People In Need
            </h1>
            <input
              className="mt-2 py-2 px-4 border w-1/2 text-black rounded-l-lg"
              type="text"
              name=""
              id=""
              placeholder="Search here...."
            />
            <button className=" text-white font-medium py-2 px-3 rounded-r-lg bg-[#FF444A] ">
            Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
