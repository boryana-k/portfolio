import React from 'react'
import firechat from '../assets/projects/firechat.png'
import reactlogo from '../assets/techstack-icons/react.png'
import firebaselogo from '../assets/techstack-icons/firebase.png'
import csslogo from '../assets/techstack-icons/css3.png'


function ProjectViewCard({
    title,
    screenshot,
    technologies,
    demolink,
    codelink
}) {
  return (
    <div className='p-4 flex flex-col items-center justify-around gap-4 text-text-color font-exo uppercase'>
        <div>
            <p className='border-b-[1px] border-border-color'>{title}</p>
        </div>

        <div className='flex items-center justify-center'>
            <img className='w-[17rem] md:w-[60%] rounded-lg' src={screenshot} alt="" />
        </div>

        <div className='flex gap-3'>
            {
                technologies.map((logo) => {
                    return (
                        <img className='w-4' src={logo} alt=""/>
                    )
                })
            }
        </div>

        <div className='flex gap-20 mt-[30px]'>
            <a href={demolink} target="_blank" className='border-[1px] p-2 rounded-xl'><button>Live Demo</button></a>
            <a href={codelink} target="_blank" className='border-[1px] p-2 rounded-xl'><button>Code</button></a>
        </div>
    </div>
  )
}

export default ProjectViewCard