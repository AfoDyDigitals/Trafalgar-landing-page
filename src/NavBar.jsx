import React from 'react'

function NavBar() {
  return (
    <div className='w-[100vw] mt-[56px] mb-[80px] px-[191px] flex justify-center items-center justify-between'>
        <div className='flex gap-[12px] justify-center items-center'>
            <img src='../logo.svg' alt='logo' />
            <div className='font-bold text-2xl'>Trafalgar</div>
        </div>
        <div className='gap-[40px] flex'>
                <div className='font-bold'>Home</div>
                <div>Find a doctor</div>
                <div>Apps</div>
                <div>Testimonials</div>
                <div>About us</div>
        </div>
        
    </div>
  )
}

export default NavBar