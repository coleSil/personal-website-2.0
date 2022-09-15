import React from 'react';
import {FaLinkedin, FaInstagram, FaEnvelope} from 'react-icons/fa';
import meImage from '../assets/me.jpg';
import resume from '../assets/Silvernail_Resume.pdf';

const Home = () => {

  return (
    <div name='home' className='w-full lg:h-screen bg-[#0a192f]'>
        
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center lg:h-full md:pb-5'>

            <div className='pt-20 lg:pb-10'>
                <img src={meImage} alt='me' className='shadow rounded-full w-60 h-auto align-middle border-none' />
            </div>
            
            <p className='text-lime-400'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Cole Silvernail</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
            <div className='text-lime-400 py-4 text-2xl sm:text-3xl'>
                <p className='lg:inline-block lg:pr-5'>Washington, DC</p>
                <p className='lg:inline-block lg:pr-5'>colesilvernail@gmail.com</p>
                <p className='lg:inline-block lg:pr-5'>(321) 514-4369</p>
            </div>

            {/* Icon links */}
            <div className='text-gray-300'>
                <a href='https://www.linkedin.com/in/cole-silvernail/' className='inline-block px-2 hover:text-lime-400'>
                    <FaLinkedin size={50} />
                </a>
                <a href='https://www.instagram.com/cole.sliversnail/' className='inline-block px-2 hover:text-lime-400'>
                    <FaInstagram size={50} />
                </a>
                <a href='mailto:colesilvernail@gmail.com' className='inline-block px-2 hover:text-lime-400'>
                    <FaEnvelope size={50} />
                </a>
                <a href={resume} download>
                    <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-lime-400 hover:border-lime-400 hover:text-[#0a192f]'>
                        Download Resume 
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Home