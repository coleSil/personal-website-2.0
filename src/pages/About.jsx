import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-emerald-800 text-gray-300'>
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
                        I am a DC based full stack developer with a proven passion for learning new technologies bla bla 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About