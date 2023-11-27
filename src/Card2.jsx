import React from 'react'

function Card2(props) {
  return (
    <div className=' pb-[47px] h-auto bg-white shadow-lg shadow-[rgba(229, 233, 246, 0.40)] rounded-[20px] w-[350px] h-[354px]'>
        <img className= 'rounded-t-[20px]' src={props.picture} />
        <div className='text-xl mt-[21px] pl-[40px] font-bold'>{props.title}</div>
        <div className='text-base pl-[40px] text-gray-400 mt-[12px] font-light'>{props.content}</div>

        <div className='flex pl-[40px] text-lg font-semibold text-blue-500 mt-[25px]  gap-[14.79px]'>
            Read more
            <img className='w-[14.143px] h-[9.px]' src='../arrow right.svg' />
        </div>
    </div>
  )
}

export default Card2