import React from 'react'

export default function Contact() {
  return (
    <div name="contact" className=" h-screen w-full bg-[#0a192f] flex justify-center items-center pb-7">

         <form method='POST' action="https://getform.io/f/56f2f230-85b4-40d9-b18d-456922ce2bca" className='flex flex-col max-w-[600px] pt-10 w-full pl-3 '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                     Contact</p>
                <p className='text-gray-300 py-4'>
                        Submit the form below or shoot me an email - myemail@gmail.com
                </p>


            </div>
                <input className='bg-[#ccd6f6] p-2' placeholder='Name' type='text' name='name'/>
                <input className='my-4 p-2 bg-[#ccd6f6]' placeholder='Email' type='email' name='email'/>
                <textarea  className='bg-[#ccd6f6] p-2' name="message"   rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:border-pink-600 hover:bg-pink-600 px-4 py-3 my-8 flex items-center mx-auto'>Let's Collaborate</button>
         </form>
    </div>
  )
}

