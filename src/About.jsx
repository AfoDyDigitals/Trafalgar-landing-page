import React from 'react'

function About() {
  return (
    <>
    <div className='flex justify-center items-center mt-[20px] ml-[135px] mr-[223px] gap-[142px]'>
        <div>
            <img className='w-[650px] h-[477px] mt-[84px]' src='../trafalgar-illustration sec02 1.png' />
        </div>
        <div className='mt-[190px]'>
            <h1 className='font-bold text-4xl'>Leading healthcare <br></br>providers</h1>
            <img className='mt-[26px]' src='../Rectangle 11.png' />
            <p className='mt-[25px] text-large font-light'>Trafalgar provides progressive, and affordable <br></br>healthcare, accessible on mobile and online for <br></br>everyone. To us, it's not just work. We take pride <br></br> in the solutions we deliver</p>
            <div className='text-lg font-bold text-center w-[200px] h-[56px] border-2 border-blue-500 text-blue-500 rounded-[55px] mt-[40px] pt-[15px]'>
                Learn more
            </div>        
        </div>
        
    </div>
    <img className='absolute z-[-1] right-0 mt-[68px]' src='../element.svg' />

    <div className='flex justify-center items-center mt-[229px] ml-[280px] mr-[164px] gap-[71px]'>
        
        <div className='mt-[190px] '>
            <h1 className='font-bold text-4xl'>Download our <br></br>mobile apps</h1>
            <img className='mt-[26px]' src='../Rectangle 11.png' />
            <p className='mt-[25px] w-[420px] text-large font-light'>Our dedicated patient engagement app and <br></br> web portal allow you to access information <br></br> instantaneously (no tedious form, long calls, <br></br> or administrative hassle) and securely</p>
            <div className='text-center w-[200px] h-[56px] border-2 border-blue-500 text-blue-500 rounded-[55px] mt-[40px] pt-[15px]'>
                <div className='flex text-lg font-bold justify-center items-center gap-[14.79px]'>
                    Download
                    <img className='h-[15.434px]' src='../Arrow down.svg' />
                </div>
            </div>        
        </div>
        <div>
            <img className='w-[665px] h-[434px] mt-[84px]' src='../trafalgar-illustration sec03 1.png' />
        </div>
        
    </div>
    
    </>
  )
}

export default About