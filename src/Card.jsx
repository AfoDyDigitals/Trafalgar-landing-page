import React from 'react'

function Card(props) {
  return (
    <div className=' py-[47px] pl-[40px] bg-white shadow-lg shadow-[rgba(229, 233, 246, 0.40)] rounded-[20px] w-[350px] h-[354px]'>
        <img className= 'mb-[25px]' src={props.image} />
        <div className='text-2xl font-bold'>{props.heading}</div>
        <div className='text-base font-light'>{props.description}</div>
    </div>
  )
}

export default Card