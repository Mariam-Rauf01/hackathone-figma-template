"use client";

import Image from "next/image";

import Header from "@/components/Header";

const Shop: React.FC = () => {
  const categories = [
    { title: "CLOTHS", items: 5, img: "/images/2.png" },
    { title: "CLOTHS", items: 5, img: "/images/1.png" },
    { title: "CLOTHS", items: 5, img: "/images/card-cover-7 (1).jpg" },
    { title: "CLOTHS", items: 5, img: "/images/card-cover-7 (1).jpg" },
    { title: "CLOTHS", items: 5, img: "/images/hero.jpg" },
  ];

  const logos = [
    { name: "Hooli", img: "/images/col-md-2.png" },
    { name: "Lyft", img: "/images/fa-brands-2.png" },
    { name: "Stripe", img: "/images/fa-brands-3.png" },
    { name: "AWS", img: "/images/fa-brands-5.png" },
    { name: "Reddit", img: "/images/col-md-2 (2).png" },
  ];

  const images = [
    "/images/man.png",
    "/images/fixed-height (1).png",
    "/images/product-cover-5 (1).png",
    "/images/kid.png",
    "/images/product-cover-5 (1).png",
    "/images/fixed-height (8).png",
    "/images/product-cover-5 (3).png",
    "/images/product-cover-5 (4).png",
    "/images/product-cover-5 (5).png",
    "/images/product-cover-5 (6).png",
    "/images/product-cover-5 (9).png",
    "/images/product-cover-5 (10).png",
  ];

  return (
    <div className="bg-white py-8">
      <Header />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800">Shop</h1>
        <p className="text-sm text-gray-500 mt-1">Home &gt; Shop</p>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex justify-center items-center sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className=" bg-gray-100 rounded-lg overflow-hidden group "
          >
            <Image
              src={category.img}
              alt={category.title}
              width={150}
              height={150}
              className="w-[120px] h-[120px] object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="bg-black bg-opacity-50 flex justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-xl font-bold justify-center flex items-center">{category.title}</h2>
              <p className="text-xl font-bold justify-center flex items-center">{category.items} Items</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-600">Showing all 12 results</p>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <div className="flex space-x-2">
            <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
              <i className="fas fa-th"></i>
            </button>
            <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
              <i className="fas fa-list"></i>
            </button>
          </div>
          <select className="border border-gray-300 rounded px-4 py-2">
            <option>Popularity</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Filter
          </button>
        </div>
      </div>

      {/* Logos Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={logo.img}
              alt={logo.name}
              width={80}
              height={40}
              className="w-20 h-auto "
            />
          </div>
        ))}
      </div>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12"></div>

        {/* Product Grid Rows */}
        {[images.slice(0, 4), images.slice(4, 8), images.slice(8)].map(
          (productImages, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-16 mt-8"
            >
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`border rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden ${
                    index === 2 ? "border-purple-500" : "border-gray-200"
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={image}
                      alt={`Product ${index + 1}`}
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold">Graphic Design</h3>
                    <p className="text-gray-500 text-sm mb-3">
                      English Department
                    </p>
                    <div className="text-gray-500 flex justify-center items-center space-x-2 text-sm">
                      <span className="line-through">$16.48</span>
                      <span className="text-green-600 font-semibold">
                        $6.48
                      </span>
                    </div>
                    <div className="flex justify-center space-x-2 mt-3">
                      <span className="w-4 h-4 rounded-full bg-blue-600"></span>
                      <span className="w-4 h-4 rounded-full bg-gray-500"></span>
                      <span className="w-4 h-4 rounded-full bg-orange-400"></span>
                      <span className="w-4 h-4 rounded-full bg-black"></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default Shop;
