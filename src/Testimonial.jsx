import React from 'react'

function Testimonial() {
  return (
    <div>
    <img className='absolute mt-[530px] ml-[150px]' src='../element.svg' />

      <div className='flex flex-col justify-center items-center'>
        <div className='mt-[266px] w-[1120px] h-[425px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[24px]'>
                <img className='absolute ml-[1036px] z-[1]' src='../Group.svg' />

            <div className=' flex flex-col items-center content-center text-4xl font-bold'>
                <div className='mt-[64px] text-white'>What our customer are saying</div>
                <img className=' mt-[25px]' src='../Rectangle 17.png' />
            </div>

            <div className='flex justify-center items-center mt-[80px] gap-[110px]'>
                <div className='flex items-center gap-[29px]'>
                    <img className='mt-[]' src='../passport.svg' />
                    <div>
                        <p className='text-2xl font-bold text-white'>Edward Newgate</p>
                        <p className='text-lg font-normal text-white'>Founder Circle</p>
                    </div>
                </div>
                <p className='w-[420px] text-white text-xl font-normal'>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, <br></br>or administrative hassle) and securely”</p>
            </div>
        </div>

        <div className='flex justify-center mt-[42px] gap-[89.57px]'>
        <img className='mt-[]' src='../arrow light.svg' />
        <img className='mt-[]' src='../slider.svg' />
        <img className='mt-[]' src='../arrow dark.svg' />
        </div>
    </div>
    </div>
  )
}

export default Testimonial