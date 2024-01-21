import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Yousef Alsakkaf, nice to meet you. Please just take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I am a Computer Science (AI) student pursuing a Bachelor's degree
              with a strong passion for artificial intelligence. Eager to apply
              my AI knowledge and problem-solving skills, I'm seeking an
              internship to contribute to innovative projects and gain practical
              experience. My academic background equips me to excel in dynamic,
              collaborative environments. I am committed to continuous learning
              and excited about the opportunity to make a meaningful impact in
              the field of AI through an internship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
