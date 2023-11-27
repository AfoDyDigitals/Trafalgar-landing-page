import React from 'react'
import Card2 from './Card2'

function Articles() {
  return (
    <div>
         <div className='items-center '>
            <img className='absolute w-[587] h-[420] z-[-1] mt-[260px] right-[0px]' src='../Vector2.png' />
            <img className='absolute z-[-1] mt-[320px] ml-[200px]' src='../element.svg' />

            <div className='flex flex-col justify-center items-center'>
              <div className='text-4xl text-center font-bold mt-[192px]'>Check out our latest article</div>
              <img className='mt-[26px]' src='../Rectangle 2.png' />
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='grid grid-cols-3 gap-[36px] mx-[240px] mt-[80px]'>
              <div>
                <Card2 
                picture="/bloodtrans.png"
                title="Disease detection, check up in the laboratory"
                content="In this case, the role of the health laboratory is very important to do a disease detection..."
                />
                    
              </div>

              <Card2 
              picture="/lab.png"
              title="Herbal medicines that are safe for consumption"
              content="Herbal medicine is very widely used at this time because of its very good for your health..."
              />

              <Card2 
              picture="../skincare.png"
              title="Natural care for healthy facial skin"
              content="A healthy lifestyle should start from now and also for your skin health. There are some..."
              />

          </div>
          <div className='text-lg font-bold text-center w-[200px] h-[56px] border-2 border-blue-500 text-blue-500 rounded-[55px] mt-[72px] pt-[15px]'>
              View all
          </div>
        </div>
    </div>
  )
}

export default Articles