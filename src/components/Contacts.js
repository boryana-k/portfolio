import React from 'react'
import logo from '../assets/memojis/image-4.png'
import {AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'

function Contacts() {
  return (
    <div id='contacts' className='bg-primary-color pb-8 w-full h-screen md:h-screen border-b-[1px] border-secondary-color text-text-color'>
        <div className='w-full flex items-center justify-start flex-col'>
          <div className='w-[1px] h-[7rem] md:h-[9rem] bg-secondary-color '></div>

          <div className='flex items-center gap-2'>
            <p className='font-synco text-[14px] md:text-[19px] uppercase '>Have something on mind?</p>
            <div className='w-[33px] md:w-[48px] h-[1px] bg-secondary-color '></div>
          </div>

          <div className='flex items-center justify-end w-[290px] h-[3.5rem] md:w-[393px] md:h-[2.9rem]'>
            <div className='w-[1px] mb-[2rem] md:mb-[1.85rem] h-[2.9rem] bg-secondary-color '></div>
          </div>
          
          <div className=' mt-[-1.3rem] md:mt-[-1rem] flex ml-[9.1rem] md:ml-[12.3rem] w-[144.5px] md:w-[196px] h-[5rem] border-t-[1px] border-secondary-color'></div>

          <div className='w-[412px] flex justify-center mt-[-5rem]'>
            <div className='w-[1px] h-[2rem] bg-secondary-color '></div>
          </div>

          <div className='flex items-center gap-2'>
            <p className='font-synco text-[13px] md:text-[18px] uppercase border-b-[1px] p-2 border-secondary-color '>Let's turn your idea into reality</p>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='bg-secondary-color w-[1px] h-[4rem]'></div>
          <p className='font-synco uppercase mt-2'>Contacts</p>
        </div>

        <div className='flex mx-14 items-center justify-center mt-[3rem] gap-16'>
          <div className='w-[14rem] h-[5rem] border-t-[1px] border-l-[1px] border-secondary-color'></div>
          <div className='w-[14rem] h-[5rem] border-t-[1px] border-r-[1px] border-secondary-color'></div>
        </div>

        <div className='mt-[-3rem] flex flex-col justify-center items-center font-synco uppercase gap-4 mx-14 p-3'>
          <div className='flex gap-5'>
            <a href="https://www.linkedin.com/in/boryana-krysteva/" target='_blank' className='p-2 rounded-[50%] hover:shadow-sm hover:shadow-text-color'><AiFillLinkedin size={25} /></a>
            <a href="https://github.com/boryana-k" target='_blank' className='p-2 rounded-[50%] hover:shadow-sm hover:shadow-text-color'><AiFillGithub size={25} /></a>
            <a href="https://twitter.com/boryanamk" target='_blank' className='p-2 rounded-[50%] hover:shadow-sm hover:shadow-text-color'><AiOutlineTwitter size={25} /></a>
          </div>

          <p className='font-synco text-[20px]'>or...</p>

          <div>
            <a href="mailto:dev@boryanacodes.com" target='_blank'><button className='text-[14px] uppercase border-[1px] border-secondary-color rounded-lg p-2 bg-gradient-to-t from-[#cb52525f] to-secondary-color hover:shadow-md hover:shadow-text-color'>Send me an email</button></a>
          </div>
        </div>

        <div className='flex mx-14 items-center justify-center mt-[-4rem] gap-16'>
          <div className='w-[14rem] h-[5rem] border-b-[1px] border-l-[1px] border-secondary-color'></div>
          <div className='w-[14rem] h-[5rem] border-b-[1px] border-r-[1px] border-secondary-color'></div>
        </div>
        
        
    </div>
  )
}

export default Contacts