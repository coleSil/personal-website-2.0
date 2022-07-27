import React from 'react';

function About() {
  return (
    <div name='about' className='w-full h-screen bg-white text-emerald-800'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Cole, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>
                        I am a DC based full stack developer with over 3 years of professional experience.
                        I have a passion for learning new programming languages and technologies,
                        and enjoy doing a little bit of everything when it comes to front-end and back-end programming.
                    </p>
                    <p>
                        Outside of my work as a developer, I have a passion for photography.
                        I love getting outside, going on a hike or exploring the city and trying to find new ways of looking at the world through my camera.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About