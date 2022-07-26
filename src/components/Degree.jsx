import React from 'react';

function Degree(props) {
  return (
    <div className='pt-3'>
        {/* university details */}
        <div className='flex flex-col w-full'>
            <p className='text-2xl font-bold'>{props.university}</p>
            {/* Degree details */}
            <div className='py-0 lg:grid lg:grid-cols-2 lg:gap-8'>
                <p className='text-xl'>{props.degree}</p>
                <p className='text-xl text-pink-600 lg:justify-start'>{props.start} - {props.end}</p>
            </div>
            <p className='text-xl text-pink-600'>{props.location}</p>
        </div>
        
    </div>
  )
}

export default Degree
