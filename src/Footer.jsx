import React from 'react'

function Footer() {
  return (
      <>
        <img className='absolute mt-[130px] ml-[1377px] z-[-1]' src='../element.svg' />
        <div className='flex justify-center items-center text-white w-[100vw] h-[432px] mt-[202px] bg-gradient-to-r from-blue-500 to-cyan-500 gap-[145px]'>
            <img className='absolute left-0  mt-[330px] z-[1]' src='../element.svg' />
            <div className=''>
                <div className='flex items-center gap-[12px]'>
                    <img src='../logoWhite.svg' />
                    <div className='font-bold text-2xl'>Trafalgar</div>
                </div>
                <p className='w-[391px] text-lg font-light mt-[22px]'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                <p className='text-base font-light mt-[31px]'>©Trafalgar PTY LTD 2020. All rights reserved</p>
            </div>
            <div>
                <p className='text-xl font-bold'>Company</p>
                <p className='text-lg font-light mt-[30px]'>About</p>
                     <p className='text-lg font-light mt-[10px]'>Testimonials</p>
                     <p className='text-lg font-light mt-[10px]'>Find a doctor</p>
                    <p className='text-lg font-light mt-[10px]'>Apps</p>
            </div>
            <div>
                <p className='text-xl font-bold'>Region</p>
                <p className='text-lg font-light mt-[30px]'>Indonesia</p>
                     <p className='text-lg font-light mt-[10px]'>Singapore</p>
                     <p className='text-lg font-light mt-[10px]'>Hongkong</p>
                    <p className='text-lg font-light mt-[10px]'>Canada</p>
            </div>
            <div>
                <p className='text-xl font-bold'>Help</p>
                <p className='text-lg font-light mt-[30px]'>Help center</p>
                     <p className='text-lg font-light mt-[10px]'>Contact support</p>
                     <p className='text-lg font-light mt-[10px]'>Instructions</p>
                    <p className='text-lg font-light mt-[10px]'>How it works</p>
            </div>
            
        </div>
    </>
  )
}

export default Footer