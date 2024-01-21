import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import myImage from '../assets/PersonalImage.jpg'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
     
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Yousef Alsakkaf
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#a4abc1]">
  
          Computer Science student
        </h2>
        <p className="text-[#c6cbda] py-4 max-w-[700px]">
          I am a Computer Science (AI) student pursuing a Bachelor's degree with
          a strong passion for artificial intelligence. Eager to apply my AI
          knowledge and problem-solving skills, I'm seeking an internship to
          contribute to innovative projects and gain practical experience. My
          academic background equips me to excel in dynamic, collaborative
          environments. I am committed to continuous learning and excited about
          the opportunity to make a meaningful impact in the field of AI through
          an internship.
        </p>
        <div>
          <Link smooth={true} duration={500} to="project">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
