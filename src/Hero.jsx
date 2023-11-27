import React from 'react'

function Hero() {
  return (
    <>
    <img className='static mt-[68px]' src='../element.svg' />
    <div className='flex mt-[10px] ml-[190px] mr-[163px] justify-between'>
        <div className=''>
            <h1 className='font-bold text-5xl'>Virtual healthcare <br></br>for you</h1>
            <p className='mt-[25px] text-2xl'>Trafalgar provides progressive, and affordable <br></br> healthcare, accessible on mobile and online <br></br> for everyone</p>
            <div className='text-lg font-bold w-[200px] h-[56px] bg-blue-500 text-center text-white rounded-[55px] mt-[48px] pt-[15px]'>Consult today</div>
        </div>
        <div>
            <img className='w-[693px] h-[598px] mt-[-120px]' src='../trafalgar-header illustration 1.png' />
        </div>
    </div>

    
    </>
  )
}

export default Hero