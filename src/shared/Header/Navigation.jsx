import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [scroll, setScroll] = useState(false);

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
    return (
      <nav
        className={`${
          scroll
            ? "bg-white shadow-md text-gray-700 hover:text-black"
            : "bg-transparent text-white"
        } fixed w-full z-50`}
      >
        <div className="container mx-auto px-4 py-5 flex items-center justify-around">
          <Link to="/">
            <img src="" alt="logo" className="w-24" />
          </Link>

          <div className="flex">
            <Link to="/" className=" mx-3 font-medium ">
              Home
            </Link>
            <Link
              to="/about"
              className=" mx-3 font-medium "
            >
              About
            </Link>
            <Link
              to="/contact"
              className="mx-3 font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
};

export default Navigation;