import React from 'react'
import PropTypes from 'prop-types'

function JobHeader(props) {
    var description = props.descriptions?.map(function(d){
        return(
            <li key={d}>{d}</li>
        );
    })
  return (
    <div className='pt-2'>
        <div className='flex flex-col w-full'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
                <p className='text-2xl font-bold'>{props.company}</p>
                <p className='text-xl text-pink-600'>{props.start} - {props.end}</p>
            </div>
            <div></div>
            <div className='py-0'>
                <p className='text-xl'>{props.location}</p>
                <p className='text-xl text-pink-600'>{props.title}</p>
            </div>
            <ul className='marker:text-pink-600 list-outside list-disc ml-6'>
              <div>{description}</div>
            </ul>
        </div>
    </div>
  )
}

JobHeader.propTypes = {}

export default JobHeader
