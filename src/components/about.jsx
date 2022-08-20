import React from 'react'

export default function About() {
  return (
    <div name='about' className='w-full sm:h-screen bg-[#0a192f] text-gray-300'>
    <div className='flex flex-col justify-center items-center h-full w-full'>
       <div className='mx-w-[1000px]  w-full px-4 grid grid-cols-2 gap-8'>

        <div className='sm:text-right pb-8 px-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p> 
        </div>
        <div className=''>  </div>

       </div>
       <div className='mx-w-[1000px]  w-full px-4 grid sm:grid-cols-2 gap-8'>
        <div className='sm:text-right text-4xl font-bold px-4'>
            <p className=''>
                Hi. I'm clint, nice to meet you.Please take look around.
            </p>
        </div>
        <div>
            <p className='px-4'>
                i am a passionate about building excellent software that improves the lives of those
                around me. i am specialize in creating  software for clients ranging from individuals
                and small-bussinesses all the way to large enterprises corporations.What would  you do
                if had a software expert available at your fingertips?
            </p>
        </div>
       </div>
    </div>
    </div> 
  )
}

