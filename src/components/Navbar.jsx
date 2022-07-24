import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import myLogo from '../assets/me.jpg';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        {/* <div>
            <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
        </div> */}

        {/* Menu */}
        <ul className='hidden md:flex'>
            <li>
                <Link to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to='about' smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to='experience' smooth={true} duration={500}>
                    Experience
                </Link>
            </li>
            <li>Skills</li>
            <li>Contact</li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link to='experience' smooth={true} duration={500}>
                    Experience
                </Link>
            </li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social Icons */}
        {/* <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
            </ul>
        </div> */}

    </div>
  )
}

export default Navbar