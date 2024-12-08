import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div
        className="bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          width: "100%",
          height: "100vh",
          backgroundPosition: "center top",
        }}
      >
        {/* Content Area */}
        <div className="w-full sm:w-3/5 px-4 text-center md:text-left">
          {/* SUMMER 2020 heading */}
          <h3 className="text-white mb-4 sm:mb-8">SUMMER 2020</h3>

          {/* NEW COLLECTION heading */}
          <h1 className="text-4xl sm:text-5xl text-white font-bold sm:mb-10 leading-relaxed">
            NEW COLLECTION
          </h1>

          {/* Paragraph Description */}
          <p className="text-[#FAFAFA] mt-10 text-sm sm:text-base md:text-lg leading-relaxed">
            We know how large objects will act,
            <br className="hidden sm:block" />
            but things on a small scale.
            <br className="hidden sm:block" />
          </p>

          {/* Shop Now button */}
          <button className="text-lg font-bold sm:text-xl md:text-2xl mt-4 sm:mt-6 text-white px-6 py-2 sm:px-8 sm:py-3 bg-[#2DC071] opacity-80 hover:opacity-100 hover:bg-blue-900 hover:scale-105 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
      {/* Grey background section */}
      <div className="bg-gray-100 py-20">
        <div className="w-full text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800">
            EDITOR&apos;S PICK
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Flexbox Layout for Images */}
        <div className="container mx-auto mt-10 px-4 ml-60">
          <div className="flex flex-col lg:flex-row justify-center gap-6">
            {/* First Row with two large images */}
            <div className="flex w-full lg:w-1/2 gap-6 justify-center items-center flex-wrap">
              <div className="relative w-full lg:w-1/2 group mb-6">
                <Image
                  src="/images/man.png"
                  alt="Men"
                  layout="responsive"
                  width={500}
                  height={500}
                  className="transition transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-white hover:bg-black text-black hover:text-white bg-opacity-75 p-2 group-hover:bg-opacity-90 mb-6 ml-4">
                  <span className="font-bold">MAN</span>
                </div>
              </div>
              <div className="relative w-full lg:w-auto ml-8 group mb-6">
                <Image
                  src="/images/woman.png"
                  alt="Women"
                  layout="responsive"
                  width={500}
                  height={500}
                  className="transition transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-white hover:bg-black text-black hover:text-white bg-opacity-75 p-2 group-hover:bg-opacity-90 mb-6 ml-4">
                  <span className="font-bold">WOMEN</span>
                </div>
              </div>
            </div>
            

            {/* Second Row with two small images stacked vertically */}
            <div className="flex flex-col lg:w-1/2 gap-6 justify-center items-center">
              <div className="relative w-full group mb-6">
                <Image
                  src="/images/acce.png"
                  alt="Accessories"
                  layout="intrinsic"
                  width={150}
                  height={150}
                  className="transition transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-white hover:bg-black text-black hover:text-white bg-opacity-75 p-2 group-hover:bg-opacity-90 mb-6 ml-4">
                  <span className="font-bold">ACCESORIES</span>
                </div>
              </div>
              <div className="relative w-full group mb-6">
                <Image
                  src="/images/kid.png"
                  alt="Kids"
                  layout="intrinsic"
                  width={150}
                  height={150}
                  className=" object-cover transition transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-white hover:bg-black text-black hover:text-white bg-opacity-75 p-2 group-hover:bg-opacity-90 mb-6 ml-4">
                  <span className="font-bold">KIDS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
