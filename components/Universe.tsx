import React from "react";
import Image from "next/image";

const Universe = () => {
  return (
    <div className="flex justify-center translate-x-20 gap-40 bg-white max-w-[1200px] py-28 px-10 md:px-12">
      <div className="relative w-full md:w-[50%] mt-5 md:mt-0 flex justify-center md:justify-end">
        <Image
          src="/images/asian-woman-man-with-winter-clothes 1.png"
          width={400}
          height={360}
          alt="hero img"
        />
      </div>

      {/* Left Side */}
      <div className="translate-y-20 text-[#252B42] w-full md:w-[50%] text-center md:text-left mb-8 md:mb-0">
        <div className="flex justify-center md:justify-start items-center mb-4">
          <span className="ml-4 text-2xl">SUMMER 2020</span>
        </div>
        <div className="w-full max-w-[280px] md:max-w-[320px] mx-auto md:mx-0">
          <h1 className="text-2xl ml-4 mt-10 md:text-4xl font-sans font-bold mb-8">
            Part of the Neural Universe
          </h1>
          <div className="ml-4">
            <span className="text-md">
              We know how large objects will act, but things on a small scale.
            </span>
          </div>
          <div className="flex items-center justify-between mt-8 ml-4">
            <button className="mr-10 bg-[#2DC071] font-bold text-md px-6 py-2 text-white hover:scale-105 transition-transform duration-200 flex items-center justify-center whitespace-nowrap">
              BUY NOW
            </button>
            <button className="mr-10 bg-white border-2 border-[#2DC071] font-bold text-md px-6 py-2 text-[#2DC071] hover:scale-105 transition-transform duration-200 flex items-center justify-center whitespace-nowrap">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universe;
