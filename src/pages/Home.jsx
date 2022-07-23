import React from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaEnvelope} from 'react-icons/fa';
import meImage from '../assets/me.jpg';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {

    const homeStyle = {
        imageStyle: {
            borderRadius: '50%',
            width: 400
        }
    }

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <img src={meImage} alt='me' className='img-fluid img-profile rounded-circle mx-auto mb-2' />
            <p className='text-lime-400'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Cole Silvernail</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                intro/summary blah blah blah blah blah
                blah blah blah aaaaa aaaaaaa aaaaaaaaaa aaaaa aaaaa aaaaaaa aaaaaaaaaa
                aaaaaaa aaaaaaa  aaaaaa aaaaaaaaaaaaaa aaaa aaaaa aaaaaaaaa aaaaaaa
                aaaaaaa aaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaa aaaaaaaaS
            </p>

            {/* Icon links */}
            <div className='text-gray-300'>
                <a href='https://www.linkedin.com/in/cole-silvernail/' className='inline-block px-2 hover:text-lime-400'>
                    <FaLinkedin size={50} />
                </a>
                <a href='https://github.com/coleSil' className='inline-block px-2 hover:text-lime-400'>
                    <FaGithub size={50} />
                </a>
                <a href='https://www.instagram.com/cole.sliversnail/' className='inline-block px-2 hover:text-lime-400'>
                    <FaInstagram size={50} />
                </a>
                <a href='mailto:colesilvernail@gmail.com' className='inline-block px-2 hover:text-lime-400'>
                    <FaEnvelope size={50} />
                </a>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-lime-400 hover:border-lime-400 group'>
                    <span className='group-hover:text-[#0a192f]'>View Work</span> 
                    {/* <span className='hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span> */}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home