"use client";
import { useState } from "react";
import Link from "next/link";

import {
  MdSearch,
  MdOutlineShoppingCart,
  MdFavoriteBorder,
  MdPersonOutline,
  MdKeyboardArrowDown,
} from "react-icons/md";
import Topbar1 from "./Topbar1";


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <Topbar1/>
      {/* Main Navbar */}
      <div className="bg-white py-3 shadow-md">
        <div className="container mx-auto flex justify-between items-center flex-wrap px-4 md:px-8">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#252B42]">
            <Link href="/">Bandage</Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#252B42] hover:underline"
            >
              Home
            </Link>
            <div className="relative">
              <div
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 hover:underline cursor-pointer"
                onClick={toggleDropdown}
              >
                <Link href={'/productlist'}>Shop</Link>
                <MdKeyboardArrowDown size={20} />
              </div>
            
             
              
            </div>
            <Link
              href={'/About'}
              className="text-gray-600 hover:text-[#252B42] hover:underline"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-[#252B42] hover:underline"
            >
              Blog
            </Link>
            <Link
              href={'/Contact'}
              className="text-gray-600 hover:text-[#252B42] hover:underline"
            >
              Contact
            </Link>
            <Link
              href={'/pages'}
              className="text-gray-600 hover:text-[#252B42] hover:underline"
            >
              Pages
            </Link>
          </nav>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center space-x-4 flex-row-reverse">
            <div
              onClick={toggleMenu}
              className="space-y-1 ml-4 cursor-pointer "
            >
              <div className="w-8 h-1  bg-gray-600"></div>
              <div className="w-6 h-1 ml-2 bg-gray-600"></div>
              <div className="w-4 h-1 ml-4 bg-gray-600"></div>
            </div>
            <Link href="/cart" className="text-[#252B42] hover:text-[#23A6F0]">
              <MdOutlineShoppingCart size={24} />
            </Link>

            <Link
              href="/search"
              className="text-[#252B42] hover:text-[#23A6F0]"
            >
              <MdSearch size={24} />
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4 text-[#23A6F0]">
            <Link
              href="/login"
              className="flex items-center hover:text-[#252B42]"
            >
              <MdPersonOutline size={24} />
              <span className="ml-1">Login / Register</span>
            </Link>
            <Link href="/search" className="hover:text-[#252B42]">
              <MdSearch size={24} />
            </Link>
            <Link
              href="/cart"
              className="flex items-center hover:text-[#252B42]"
            >
              <MdOutlineShoppingCart size={24} />
              <span className="ml-1 text-sm">1</span>
            </Link>
            <Link
              href="/wishlist"
              className="flex items-center hover:text-[#252B42]"
            >
              <MdFavoriteBorder size={24} />
              <span className="ml-1 text-sm">1</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <nav className="space-y-4 flex flex-col items-center justify-center">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#252B42] hover:underline"
            >
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-[#252B42] hover:underline">
              Product
            </Link>
            <Link href={'/Pricing'} className="text-gray-600 hover:text-[#252B42] hover:underline">
              Pricing
            </Link>
            <Link
              href={'/Contact'}
              className="text-gray-600 hover:text-[#252B42] hover:underline "
            >
              Contact
            </Link>
            <div className="relative">
              <div
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 cursor-pointer"
                onClick={toggleDropdown}
              ></div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
