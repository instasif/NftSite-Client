import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/vite.svg";
import { BsCart } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";

const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const handleMenuToggle = () => {
    setOpen(!open);
    console.log("hello");
  };
  return (
    <nav
      className={`${
        scroll
          ? "bg-white shadow-md text-gray-700 hover:text-black"
          : "bg-transparent text-white"
      } fixed w-full z-50 transition duration-500`}
    >
      <div className="container mx-auto px-4 py-5 flex items-center justify-around ">
        <Link to="/">
          <img src={logo} alt="logo" className="w-7" />
        </Link>
        <div className="hidden md:flex md:items-center md:justify-center">
          <Link to="/" className="mx-3 font-medium">
            Home
          </Link>
          <Link to="/" className="mx-3 font-medium">
            Live Actions
          </Link>
          <Link to="/" className="mx-3 font-medium">
            Today's Picks
          </Link>
          <Link to="/about" className="mx-3 font-medium">
            About
          </Link>
          <Link to="/contact" className="mx-3 font-medium">
            Contact
          </Link>
          <Link to="/cart" className="mx-3 font-medium">
            <div className="flex justify-center items-center">
              <BsCart />
              <p className="mt-[-20px]  text-white rounded-full h-5 w-5 text-center">
                10
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/login" className="mx-3 font-medium">
            <button className="bg-blue-950 rounded-3xl mt-[-10px] px-4 py-2 hover:bg-pink-800 text-white">
              Login
            </button>
          </Link>
          <Link to="/sellerForm" className="mx-3 font-medium">
            <button className="bg-black rounded-3xl mt-[-10px] px-3 py-2 hover:bg-blue-950 border-2 border-white text-white">
              Become Seller
            </button>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMenuToggle}
            className={`${
              open ? "text-white" : "text-white"
            } focus:outline-none hover:text-gray-400`}
          >
            {open ? <ImCross size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`${open ? "block" : "hidden"} md:hidden text-black bg-white`}
      >
        <Link to="/" className="block my-2 font-medium text-center">
          Home
        </Link>
        <Link to="/" className="block my-2 font-medium text-center">
          Live Actions
        </Link>
        <Link to="/" className="block my-2 font-medium text-center">
          Today's Picks
        </Link>
        <Link to="/about" className="block my-2 font-medium text-center">
          About
        </Link>
        <Link to="/contact" className="block my-2 font-medium text-center">
          Contact
        </Link>
        <Link to="/cart" className="block my-2 font-medium text-center">
          Cart (10)
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
