import React, { useState } from "react";
import Logo from "../assets/myLogo.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import fileToUpload from "../assets/chapter.pdf";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const handleResumeClick = () => {
    const link = document.createElement("a");
    link.href = fileToUpload;
    link.download = "resume.pdf"; // Set the desired file name
    link.click();
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img
          src={Logo}
          alt="just a logo"
          style={{ width: "100px", height: "100px" }}
        />
      </div>

      <ul className="hidden md:flex duration-300">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? (
          <FaBars className=" hover:text-pink-500"></FaBars>
        ) : (
          <FaTimes></FaTimes>
        )}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl"><a href="/">Home</a></li>
        <li className="py-6 text-4xl"><a href="/about">About</a></li>
        <li className="py-6 text-4xl"><a href="/skills">Skills</a></li>
        <li className="py-6 text-4xl"><a href="/contact">Contact</a></li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1e1e1e]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Yousef-Alsakkaf"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/yousef-alsakkaf-9a936528b/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#35cc55]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:yousefmohammadalsakkaf@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#444b52]"
            onClick={handleResumeClick}
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
