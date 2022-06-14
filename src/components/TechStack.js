import React from 'react'
import TechStackCard from './TechStackCard'
import logo from '../assets/memojis/Image 2.png'
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
import canva from '../assets/techstack-icons/canva.png'
import figma from '../assets/techstack-icons/figma.png'
import background from '../assets/background.png'
const data = [
  {
    logo: htmllogo,
    title: 'html'
  },
  {
    logo: csslogo,
    title: 'css'
  },
  {
    logo: jslogo,
    title: 'javascript'
  },
  {
    logo: bootstraplogo,
    title: 'bootstrap'
  },
  {
    logo: sasslogo,
    title: 'sass'
  },
  {
    logo: tailwindcss,
    title: 'tailwind css'
  },
  {
    logo: reactlogo,
    title: 'react js'
  },
  {
    logo: firebaselogo,
    title:'firebase'
  },
  {
    logo: gitlogo,
    title:'git/github'
  },
  {
    logo: nodejslogo,
    title: 'node js'
  },
  {
    logo: javalogo,
    title: 'java'
  },
  {
    logo: figma,
    title: 'figma'
  },
  {
    logo: canva,
    title: 'canva'
  }
]
function TechStack() {
  return (
    <div id='techstack' className='w-full h-auto flex flex-col bg-primary-color border-b-[1px] border-b-secondary-color'>
        <div className='w-full flex items-center justify-start flex-col'>
          <div className='w-[1px] h-[7rem] md:h-[9rem] bg-secondary-color '></div>
          <p className='font-synco text-[22px] uppercase text-text-color'>Tech Stack</p>
        </div>

        <div className='flex flex-col-reverse md:flex-row gap-5 md:gap-[15rem] h-screen items-center justify-center bg-code bg-center bg-cover'>
          <div className='flex w-full justify-end md:justify-center md:w-auto md:px-0 px-4'>
            <img className='w-[6rem] md:w-[20rem] rounded-[50%] border-[0.5px] border-text-color shadow-md shadow-text-color' src={logo} alt="" />
          </div>
          
          <div className='w-ful grid grid-cols-3 grid-flow-row  gap-3 md:gap-5 items-center'>
            {
              data.map(({logo, title}, index) => {
                return (
                  <TechStackCard logo={logo} title={title} id={index}/>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default TechStack