import React from 'react'
import logo from '../assets/BK.png'
import {AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'


function Footer() {
  return (
    <div className='p-2 bg-primary-color text-text-color'>
        <div className='flex items-center justify-between'>
            <div>
                <img className='w-[7rem] xl:w-[15rem]' src={logo} alt="" />
            </div>

            <div>
                <p className='text-[8px] md:text-[10px] uppercase font-synco'>©2022</p>
            </div>

            <div className='flex gap-4'>
                <a href="https://www.linkedin.com/in/boryana-krysteva/" target='_blank' className='p-2 rounded-[50%] hover:shadow-sm hover:shadow-text-color'><AiFillLinkedin size={25} /></a>
                <a href="https://github.com/boryana-k" target='_blank' className='p-2 rounded-[50%] hover:shadow-sm hover:shadow-text-color'><AiFillGithub size={25} /></a>
                <a href="https://twitter.com/boryanamk" target='_blank' className='p-2 rounded-[50%] hover:shadow-sm hover:shadow-text-color'><AiOutlineTwitter size={25} /></a>
            </div>
        </div>

    </div>
  )
}

export default Footer