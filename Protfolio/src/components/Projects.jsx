import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

import library from '../assets/library.png'
import scraper from '../assets/blackboardScraper.png'
import dashboard from '../assets/Dashboard.png'
import database from '../assets/database-system.png'

const Skills = () => {
  return (
    <div name='project' className='w-full h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Projects</p>
              <p className='py-4'>This is a list of projects that I have worked on: </p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={library} alt="HTML icon" />
                  <p className='my-4'>Library System (GUI)</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={scraper} alt="HTML icon" />
                  <p className='my-4'>Blackboard Scraper</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={dashboard} alt="HTML icon" />
                  <p className='my-4'>Educational system dashboard</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={database} alt="HTML icon" />
                  <p className='my-4'>Database system for Educational dashboard</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;