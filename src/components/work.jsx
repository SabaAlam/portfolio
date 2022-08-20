import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import RealEstate from "../assets/realestate.jpg"

export default function Work() {
  return (
    <div name="work" className='w-full sm:h-screen text-gray-300 bg-[#0a192f]'>
    {/* COntainer */}
        <div className='max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full pl-7  '>
            <div className=' pt-20 sm:pt-0'>
                <p className='text-4xl font-bold border-b-4 inline border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent works</p>
            </div>
        {/* Card Item */}
        {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Item */}
                <div  className='shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content_div' style={{backgroundImage:` url(${WorkImg}) `}}>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        
                        </div>
                    </div>
                </div>


                <div  className='shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content_div' style={{backgroundImage:` url(${RealEstate}) `}}>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        
                        </div>
                    </div>
                </div>

                <div  className='shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content_div' style={{backgroundImage:` url(${WorkImg}) `}}>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        
                        </div>
                    </div>
                </div>


                <div  className='shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content_div' style={{backgroundImage:` url(${RealEstate}) `}}>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        
                        </div>
                    </div>
                </div>

                <div  className='shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content_div' style={{backgroundImage:` url(${WorkImg}) `}}>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        
                        </div>
                    </div>
                </div>


                <div  className='shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content_div' style={{backgroundImage:` url(${RealEstate}) `}}>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

