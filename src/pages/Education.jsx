import React from 'react';
import Degree from '../components/Degree';

function Education() {
  return (
    <div name='education' className='w-full h-screen bg-[#0a192f] text-[#ccd6f6]'>
        <div className='flex flex-col w-full h-full justify-center px-8'>
            {/* Header */}
            <div className='py-3'>
                <h2 className='text-4xl font-bold inline border-b-4 border-pink-600'>Education</h2>
            </div>

            {/* Education items/Degrees */}
            <Degree
                university="University of Central Florida"
                start="August 2016"
                end="May 2019"
                location="Orlando, FL"
                degree="Bachelor of Science in Computer Science"
            />

            <Degree
                university="Florida State University"
                start="June 2007"
                end="April 2012"
                location="Tallahassee, FL"
                degree="Bachelor of Science in Finance"
            />

            {/* Fire academy and EMT school */}
            <div className='pt-3'>
                <div className='flex flex-col w-full'>
                    <p className='text-2xl font-bold'>Eastern Florida State College</p>
                    
                    <p className='text-xl py-0'>Firefighter I and Firefighter II Standards</p>

                    <div className='py-0 text-xl lg:grid lg:grid-cols-2 lg:gap-8'>
                        <p>Emergency Medical Technician Certificate</p>
                        <p className='text-pink-600 lg:justify-start'>May 2013 - November 2013</p>
                    </div>
                    <p className='text-xl text-pink-600'>Melbourne, FL</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Education