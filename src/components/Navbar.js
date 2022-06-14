import React from 'react'
import logo from '../assets/logo.png'
import {FaHome, FaLaptopCode} from 'react-icons/fa'
import {BsStack} from 'react-icons/bs'
import {TiContacts} from 'react-icons/ti'
function Navbar() {
  return (
    <>
      <nav className='hidden z-[2] md:flex sticky top-0 h-[3.5rem] bg-gradient-to-t from-grad-color1 via-grad-color2 to-grad-color3 backdrop-blur border-b-[1.5px] rounded-b-[30px] border-secondary-color px-12 items-center justify-between text-text-color font-synco font-normal uppercase text-[12px] lg:text-[14px] xl:[16px]'>
        <div className=''>
            <a href="#"><img className='w-[3.5rem]'src={logo} alt="" /></a>
        </div>
        <div className=''>
            <ul className='flex items-center gap-20'>
                <li className='hover:bg-[#ffffff40] p-2 rounded-[35px]'><a href="#">Home</a></li>
                <li className='hover:bg-[#ffffff40] p-2 rounded-[35px]'><a href="#techstack">Tech Stack</a></li>
                <li className='hover:bg-[#ffffff40] p-2 rounded-[35px]'><a href="#projects">Projects</a></li>
                <li className='hover:bg-[#ffffff40] p-2 rounded-[35px]'><a href="#contacts">Contacts</a></li>
            </ul>
        </div>
      </nav>

      {/* MOBILE NAV BAR*/}
      <nav className='flex z-[2] md:hidden h-[3.5rem] sticky w-[80%] top-0 mx-auto bg-gradient-to-t from-grad-color1 via-grad-color2 to-grad-color3 backdrop-blur-sm border-b-[1.5px] rounded-b-[30px] border-secondary-color px-12 items-center justify-center text-text-color'>
        <div className=''>
            <ul className='flex items-center gap-6'>
                <li className='hover:bg-[#ffffff40] p-2 rounded-[50%]'><a href="#"><FaHome size={25}/></a></li>
                <li className='hover:bg-[#ffffff40] p-2 rounded-[50%]'><a href="#techstack"><BsStack size={25}/></a></li>
                <li className='hover:bg-[#ffffff40] p-2 rounded-[50%]'><a href="#projects"><FaLaptopCode size={25}/></a></li>
                <li className='hover:bg-[#ffffff40] p-2 rounded-[50%]' ><a href="#contacts"><TiContacts size={25}/></a></li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar