import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProjectViewCard from './ProjectViewCard';

// projects screenshot
import blogpost from '../assets/projects/blogposts.png'
import bmicalc from '../assets/projects/bmicalc.png'
import firechat from '../assets/projects/firechat.png'
import pdfcoverter from '../assets/projects/pdfconverter.png'
import tictactoe from '../assets/projects/tictactoe.png'
import weatherapp from '../assets/projects/weatherapp.png'

import htmllogo from '../assets/techstack-icons/html.png'
import reactlogo from '../assets/techstack-icons/react.png'
import jslogo from '../assets/techstack-icons/javascript.png'
import gitlogo from '../assets/techstack-icons/git.png'
import firebaselogo from '../assets/techstack-icons/firebase.png'
import csslogo from '../assets/techstack-icons/css3.png'
import bootstraplogo from '../assets/techstack-icons/bootstrap.png'
import tailwindcss from '../assets/techstack-icons/tailwind-css.png'
import nodejslogo from '../assets/techstack-icons/node-js.png'
import sasslogo from '../assets/techstack-icons/sass.png'
import javalogo from '../assets/techstack-icons/java.png'
import background from '../assets/background.png'
import openweather from '../assets/weather.png'

const projects = [
  {
      title: 'firechat',
      screenshot: firechat,
      technologies: [jslogo, reactlogo, csslogo, firebaselogo],
      demolink: 'https://firechatapp-demo.netlify.app/',
      codelink: 'https://github.com/boryana-k/firechat'
  },
  {
    title: 'weather app',
    screenshot: weatherapp,
    technologies: [jslogo, reactlogo, csslogo, openweather],
    demolink: 'https://check-weather-demo.netlify.app/',
    codelink: 'https://github.com/boryana-k/weather-app'
  },
  {
    title: 'Blog',
    screenshot: blogpost,
    technologies: [jslogo, reactlogo, csslogo],
    demolink: 'https://blogposts-demo.herokuapp.com/',
    codelink: 'https://github.com/boryana-k/blog-posts'
  },
]
function Projects() {

  return (
    <div id='projects' className='h-screen pb-4 bg-primary-color border-b-[1px] border-b-secondary-color'>
        <div className='w-full flex items-center justify-start flex-col'>
          <div className='w-[1px] h-[7rem] md:h-[9rem] bg-secondary-color '></div>
          <p className='font-synco text-[22px] uppercase text-text-color'>My recent projects</p>
        </div>

        <div className='mt-4'>
          <Swiper navigation={true} modules={[Navigation]} className="w-[70%] h-fit border-[1px] border-secondary-color bg-gradient-to-t from-[#cb52523f] via-[#fff0] to-[#fff0] rounded-lg shadow-xl">
              {
                projects.map(({title, screenshot, technologies, demolink, codelink}, index) => {
                  return (
                    <SwiperSlide className='flex justify-center items-center'>
                      <ProjectViewCard title={title} screenshot={screenshot} technologies={technologies} demolink={demolink} codelink={codelink} />
                    </SwiperSlide>
                  )
                })
              }
          </Swiper>
        </div>
        
    </div>
  )
}

export default Projects