import React from 'react'

function TechStackCard({
    logo,
    title,
    id
  }) {
  return (
    <div className='w-auto h-[3rem] flex justify-center rounded-md bg-gradient-to-b from-[#ffffff83] to-text-color hover:shadow-md hover:shadow-secondary-color cursor-pointer'>
        <div className='flex gap-2 rounded-md p-[0.50rem] text-main justify-center items-center'>
            <img className='w-4 h-4' src={logo} alt="" />
            <div className='w-auto' >
                <h1 className='font-synco text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] uppercase tracking-wider font-extrabold '>{title}</h1>
            </div>
        </div>
    </div>
  )
}

export default TechStackCard