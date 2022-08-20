import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import FireBase from '../assets/firebase.png'
import AWS from '../assets/aws.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'
import Github from '../assets/github.png'

    

export default function Skills() {
  return (
    <div name="skill" className='w-full sm:h-screen bg-[#0a192f] text-gray-300 '>
        {/* Container */}
        <div className='max-w-[1000px] px-4 mx-auto flex flex-col  justify-center w-full h-full pl-7 pt-24 sm:pt-0'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className="py-4"> // These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8'>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                <p className='my-4'>HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="HTML icon"/>
                <p className='my-4'>CSS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon"/>
                <p className='my-4'>JavaScript</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon"/>
                <p className='my-4'>React</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon"/>
                <p className='my-4'>Tailwind</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Github} alt="HTML icon"/>
                <p className='my-4'>Github</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt="HTML icon"/>
                <p className='my-4'>Node</p>
            </div>


            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Mongo} alt="HTML icon"/>
                <p className='my-4'>Mongo</p>
            </div> 

            </div>
        </div>
    </div>
  )
}

