import React ,{useState} from 'react'
import {FaBars , FaTimes, FaGithub,FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll/modules'


import Logo from "../assets/logo.png"
// import Logo1 from "../assets/logo1.webp"



export default function Navbar() {
    const [nav, setnav] = useState(false)
    const handleClick = ()=>setnav(!nav)

  return (
    <>
    <div className='fixed w-full h-[80px] flex justify-between items-center bg-[#0a192f] text-gray-300 z-10 '>

        <div className='pl-7'>
            <img src={Logo} alt="Logo Image" style={{width:"50px"}} />
        </div>
        <div>
            <ul className=' hidden md:flex  pr-[50px]'>
                <li className='py-6 text-[23px]'><Link to="hero"  smooth={true} offset={50} duration={500}>Home</Link></li>
                <li className='py-6 text-[23px]'><Link to="about"  smooth={true} offset={50} duration={500}>About</Link></li>
                <li className='py-6 text-[23px]'><Link to="skill"  smooth={true} offset={50} duration={500}>Skill</Link></li>
                <li className='py-6 text-[23px]'><Link to="work"  smooth={true} offset={50} duration={500}>Work</Link></li>
                <li className='py-6 text-[23px]'><Link to="contact"  smooth={true} offset={50} duration={500}>Contact</Link></li>
            </ul>
        </div>
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 pr-[50px]'>
            {!nav ? <FaBars/>: <FaTimes/>}
        </div>
        {/* {/* Mobile Menu */}
    
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center pr-5 border border-white'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="hero"   smooth={true} offset={50}  duration={500}>Home</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about"  smooth={true} offset={50} duration={500}>About</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skill"  smooth={true} offset={50} duration={500}>Skill</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="work"   smooth={true} offset={50} duration={500}>Work</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact"smooth={true} offset={50} duration={800}>Contact</Link></li>
            </ul>
    

        {/* Social Icons */}
        <div className= ' hidden  lg:flex  frff fixed flex-col top-[35%] left-0  '>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700  '>
                <a className='flex justify-between items-center w-full text-white' href='/'>
                    Linkedin <FaLinkedin size={30}/>
                </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]  '>
                <a className='flex justify-between items-center w-full text-white' href='/'>
                    Github <FaGithub size={30}/>
                </a>
                </li>  <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]  '>
                <a className='flex justify-between items-center w-full text-white' href='/'>
                    Email <HiOutlineMail size={30}/>
                </a>
                </li>  <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]  '>
                <a className='flex justify-between items-center w-full text-white' href='/'>
                   Resume <BsFillPersonLinesFill size={30}/>
                </a>
                </li>
            </ul>
        </div>
    </div>
    
    </>
  )
}
