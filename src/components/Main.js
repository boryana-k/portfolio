import React from 'react'
import image from '../assets/memojis/Image.png'
import Typed from 'react-typed'
import {MdOutlineLocationOn} from 'react-icons/md'
import {AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'
import resume from '../assets/resume.pdf'
import {IoMdCodeDownload} from 'react-icons/io'

function Main() {
  return (
    <div className='p-10 w-full h-screen flex flex-col-reverse justify-end gap-16 items-center md:flex md:flex-row border-b-[1px] border-secondary-color'>
      <div className='md:w-[50%] flex flex-col gap-14 text-text-color'>
        <div className='flex flex-col justify-center font-exo items-center md:items-start'>
          <p className='text-[20px] md:text-[3rem]'>Hello, I'm </p>
          <p className='font-synco uppercase text-primary-color text-[22px] md:text-[2.8rem]'>Boryana Krasteva</p>
          <Typed className='uppercase text-[18px] md:text-[20px]' 
            strings={[
            'Student',
            'Front-End Developer',
            'Freelancer'
          ]} typeSpeed={100} backSpeed={100} loop></Typed>
          <p className='text-[12px] md:text-[1rem] mt-4 flex gap-1'>Sofia, Bulgaria <MdOutlineLocationOn className='text-[#b22222]' size={20}/></p>
        </div>
        
        <div className='flex text-primary-color items-center justify-center md:justify-start gap-6'>
          <a href="https://www.linkedin.com/in/boryana-krysteva/" target='_blank' className='p-2 rounded-[50%] hover:bg-[#ffffff40] hover:shadow-lg hover:shadow-text-color'><AiFillLinkedin size={25} /></a>
          <a href="https://github.com/boryana-k" target='_blank' className='p-2 rounded-[50%] hover:bg-[#ffffff40] hover:shadow-lg hover:shadow-text-color'><AiFillGithub size={25}/></a>
          <a href="https://twitter.com/boryanamk" target='_blank' className='p-2 rounded-[50%] hover:bg-[#ffffff40] hover:shadow-lg hover:shadow-text-color'><AiOutlineTwitter size={25} /></a>
          <a href={resume} download='boryana-resume.pdf'><button id='download-btn' className='rounded-lg p-2 text-text-color border-text-color bg-primary-color text-[10px] font-synco uppercase gap-2 flex items-center hover:shadow-lg hover:shadow-text-color'>Download CV<IoMdCodeDownload size={20}/></button></a>
        </div>
          
      </div>

      <div className='md:w-[50%] flex md:items-center md:justify-end'>
        <img className='w-[11rem] md:w-[20rem] rounded-[50%] border-[0.5px] border-text-color shadow-md shadow-text-color'src={image} alt="" />
      </div>
      
      
      
    </div>
  )
}

export default Main