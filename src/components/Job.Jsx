import React from 'react'

function Job(props) {
  return (
    <div>
        <p className='inline-block text-bold justify-left'>{props.company}</p>
        <p className='inline-block justify-right'>{props.start} - {props.end}</p>
    </div>
  )
}

export default Job