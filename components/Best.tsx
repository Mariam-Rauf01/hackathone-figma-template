"use client";
import React, { useEffect } from "react";
import Image from "next/image";

const Best = () => {
  // Log to console when the component is rendered
  useEffect(() => {
    console.log("Best component rendered");
  }, []);

  return (
    <>
      <div className="bg-white py-20">
        <h2 className="w-full text-center px-4 text-[#737373]">
          Featured Products
        </h2>
        <div className="w-full text-center px-4">
          <h1 className="text-3xl font-bold text-[#252B42] mt-4">
            BESTSELLER PRODUCTS
          </h1>
          <p className="text-sm text-[#737373] mt-4">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Cards Container */}
        <div className="px-40 -translate-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {/* Card 1 */}
          <div className="w-full bg-white shadow-lg leading-10 overflow-hidden transition transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500/50">
            <Image
              src="/images/fixed-height.png"
              alt="Men"
              layout="responsive"
              width={500}
              height={500}
            />
            <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Graphic Design
              </h3>
              <p className="text-gray-600">English department</p>
              <span className="text-lg font-semibold text-gray-500">
                $16.48
              </span>
              <span className="text-lg font-semibold text-[#23856D] ml-4">
                $6.48
              </span>
            </div>
            {/* Dot Navigation Below Each Card */}
            <div className="flex justify-center gap-2 py-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-white shadow-lg leading-10 overflow-hidden transition transform hover:scale-105  hover:shadow-gray-500/50">
            <Image
              src="/images/product-cover-5.png"
              alt="Men"
              layout="responsive"
              width={500}
              height={500}
            />

            <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Graphic Design
              </h3>
              <p className="text-gray-600">English department</p>
              <span className="text-lg font-semibold text-gray-500">
                $16.48
              </span>
              <span className="text-lg font-semibold text-[#23856D] ml-4">
                $6.48
              </span>
            </div>
            {/* Dot Navigation Below Each Card */}
            <div className="flex justify-center gap-2 py-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full bg-white shadow-lg leading-10 overflow-hidden transition transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500/50">
            <Image
              src="/images/fixed-height (1).png"
              alt="Men"
              layout="responsive"
              width={500}
              height={500}
            />
            <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Graphic Design
              </h3>
              <p className="text-gray-600">English department</p>
              <span className="text-lg font-semibold text-gray-500">
                $16.48
              </span>
              <span className="text-lg font-semibold text-[#23856D] ml-4">
                $6.48
              </span>
            </div>
            {/* Dot Navigation Below Each Card */}
            <div className="flex justify-center gap-2 py-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full bg-white shadow-lg leading-10 overflow-hidden transition transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500/50">
            <Image
              src="/images/fixed-height (2).png"
              alt="Men"
              layout="responsive"
              width={500}
              height={500}
            />
            <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Graphic Design
              </h3>
              <p className="text-gray-600">English department</p>
              <span className="text-lg font-semibold text-gray-500">
                $16.48
              </span>
              <span className="text-lg font-semibold text-[#23856D] ml-4">
                $6.48
              </span>
            </div>
            {/* Dot Navigation Below Each Card */}
            <div className="flex justify-center gap-2 py-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Container */}
      <div className="px-40 -translate-y-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {/* Card 1 */}
        <div className="w-full bg-white shadow-lg leading-10 overflow-hidden transition transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500/50">
          <Image
            src="/images/fixed-height (3).png"
            alt="Men"
            layout="responsive"
            width={500}
            height={500}
          />
          <div className="text-center py-4">
            <h3 className="text-2xl font-bold text-gray-800">Graphic Design</h3>
            <p className="text-gray-600">English department</p>
            <span className="text-lg font-semibold text-gray-500">$16.48</span>
            <span className="text-lg font-semibold text-[#23856D] ml-4">
              $6.48
            </span>
          </div>
          {/* Dot Navigation Below Each Card */}
          <div className="flex justify-center gap-2 py-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full bg-white shadow-lg leading-10 overflow-hidden transition transform hover:scale-105  hover:shadow-gray-500/50">
          <Image
            src="/images/fixed-height (4).png"
            alt="Men"
            layout="responsive"
            width={500}
            height={500}
          />

          <div className="text-center py-4">
            <h3 className="text-2xl font-bold text-gray-800">Graphic Design</h3>
            <p className="text-gray-600">English department</p>
            <span className="text-lg font-semibold text-gray-500">$16.48</span>
            <span className="text-lg font-semibold text-[#23856D] ml-4">
              $6.48
            </span>
          </div>
          {/* Dot Navigation Below Each Card */}
          <div className="flex justify-center gap-2 py-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full bg-white shadow-lg leading-10 overflow-hidden transition transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500/50">
          <Image
            src="/images/fixed-height (5).png"
            alt="Men"
            layout="responsive"
            width={500}
            height={500}
          />
          <div className="text-center py-4">
            <h3 className="text-2xl font-bold text-gray-800">Graphic Design</h3>
            <p className="text-gray-600">English department</p>
            <span className="text-lg font-semibold text-gray-500">$16.48</span>
            <span className="text-lg font-semibold text-[#23856D] ml-4">
              $6.48
            </span>
          </div>
          {/* Dot Navigation Below Each Card */}
          <div className="flex justify-center gap-2 py-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full bg-white shadow-lg leading-10 overflow-hidden transition transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500/50">
          <Image
            src="/images/fixed-height (6).png"
            alt="Men"
            layout="responsive"
            width={500}
            height={500}
          />
          <div className="text-center py-4">
            <h3 className="text-2xl font-bold text-gray-800">Graphic Design</h3>
            <p className="text-gray-600">English department</p>
            <span className="text-lg font-semibold text-gray-500">$16.48</span>
            <span className="text-lg font-semibold text-[#23856D] ml-4">
              $6.48
            </span>
          </div>
          {/* Dot Navigation Below Each Card */}
          <div className="flex justify-center gap-2 py-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="justify-center translate-x-20 bg-[#23856D] max-w-[1200px] flex md:flex-row items-center py-28 px-10 md:px-12 ">
        {/* Left Side */}
        <div className="ml-40 text-white w-full md:w-[50%] text-center md:text-left mb-8 md:mb-0">
          <div className="flex justify-center md:justify-start items-center mb-4">
            <span className="ml-4 text-2xl">SUMMER 2020</span>
          </div>
          <div className="w-full max-w-[280px] md:max-w-[320px] mx-auto md:mx-0">
            <h1 className="text-2xl ml-4 mt-10 md:text-4xl font-sans font-bold mb-8">
              Vita Classic Product
            </h1>
            <div className="ml-4">
              <span className=" text-md">
                We know how large objects will act,We know how are objects will
                act, We know
              </span>
            </div>
            <div className="flex items-center justify-between mt-10 ml-4">
              <span className="text-lg font-semibold">$16.48</span>
              <button className="mr-10 bg-[#2DC071] font-bold text-md px-8 py-3 text-white hover:scale-105 transition-transform duration-200 flex items-center justify-center">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-full md:w-[50%] mt-5 md:mt-0 flex justify-center md:justify-end">
          <Image
            src="/images/col-md-6.png"
            width={400}
            height={360}
            alt="hero img"
            className="mr-10"
          />
        </div>
      </div>
      
    </>
  );
};

export default Best;
