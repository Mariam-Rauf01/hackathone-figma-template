import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Top Section */}
      <div className="w-full px-14 h-28 bg-[#FAFAFA] shadow-2xl flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
        <div className="flex space-x-4">
          <FaInstagram className="text-blue-400 hover:text-blue-500 cursor-pointer" />
          <FaFacebook className="text-blue-400 hover:text-blue-500 cursor-pointer" />
          <FaTwitter className="text-blue-400 hover:text-blue-500 cursor-pointer" />
        </div>
      </div>

      {/* Middle Section */}
      <div className="bg-[#FFFFFF] text-gray-700">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-10">
            {/* Social Media Links */}
            <div>
              <h3 className="font-semibold text-gray-800">Follow Us</h3>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Company Info */}
            <div>
              <h3 className="font-semibold text-gray-800">Company Info</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
                <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
                <li><a href="#" className="hover:text-blue-500">Blog</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-gray-800">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-500">Licenses</a></li>
                <li><a href="#" className="hover:text-blue-500">Cookie Policy</a></li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-gray-800">Features</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">Business Marketing</a></li>
                <li><a href="#" className="hover:text-blue-500">User Analytics</a></li>
                <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
                <li><a href="#" className="hover:text-blue-500">Unlimited Support</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-gray-800">Get In Touch</h3>
              <form className="mt-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="p-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Lore ipsum dolor sit amet.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full text-sm px-14 h-[74px] bg-[#FAFAFA] shadow-2xl flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        Made With Love By Finland | All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
