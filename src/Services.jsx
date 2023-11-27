import React from 'react'
import Card from './Card'

function Services() {
  return (
    <>

        <div className='items-center '>
            <img className='absolute z-[-1] mt-[380px]' src='../Vector.png' />
            <img className='absolute z-[-1] mt-[710px] ml-[1350px] mr-[190px]' src='../element.svg' />

            <div className='flex flex-col justify-center items-center'>
              <div className='text-4xl text-center font-bold mt-[192px]'>Our services</div>
              <img className='mt-[26px]' src='../Rectangle 2.png' />
              <p className='font-light text-lg text-center mt-[33px]'>We provide to you the best choices for you. Adjust it to your health needs and make sure your undergo treatment <br></br> with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='grid grid-cols-3 gap-x-8 gap-y-9 mx-[240px] mt-[80px]'>
              <Card 
              image="/mirror.svg"
              heading="Search doctor"
              description="Choose your doctor from thousands of specialist, general, and trusted hospitals"
              />

              <Card 
              image="/bottle.svg"
              heading="Online pharmacy"
              description="Buy  your medicines with our mobile application with a simple delivery system"
              />

              <Card 
              image="../consultation.svg"
              heading="Consultation"
              description="Free consultation with our trusted doctors and get the best recommendations"
              />

              <Card 
              image="../details info.svg"
              heading="Details info"
              description="Free consultation with our trusted doctors and get the best recommendations"
              />

              <Card 
              image="../emergency.svg"
              heading="Emergency care"
              description="You can get 24/7 urgent care for yourself or your children and your
              lovely family"
              />

              <Card 
              image="../tracking.svg"
              heading="Tracking"
              description="Track and save your medical history and health data"
              />
          </div>
          <div className='text-lg font-bold text-center w-[200px] h-[56px] border-2 border-blue-500 text-blue-500 rounded-[55px] mt-[72px] pt-[15px]'>
              Learn more
          </div>
        </div>

    </>
  )
}

export default Services