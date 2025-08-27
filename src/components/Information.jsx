import React from 'react'
import Container from "../components/Container"
import { CiDeliveryTruck } from 'react-icons/ci'
import { IoReloadOutline } from 'react-icons/io5'




const Information = () => {
  return (
    <section>
        <Container>
           <div className='flex py-[10px]' >
            <div className='w-2/5' >
            <div className='flex items-center lg:gap-2 pb-1 lg:pb-2 '>
            <span className='text-[#000000] text-[12px] lg:text-[16px] font-normal font-dms'>2</span>
            <h6 className='text-[#6D6D6D] text-[12px] lg:text-[16px] font-normal font-dms'>Two years warranty</h6>
          </div>
            </div>
            <div className='w-2/5' >
             <div className='flex items-center lg:gap-2 pb-1 lg:pb-2'>
            <span><CiDeliveryTruck /></span>
            <h6 className='text-[#6D6D6D] text-[16px] font-normal font-dms'>Free shipping</h6>
          </div>
            </div>
            <div className='w-1/5' >
              <div className='flex items-center gap-2'>
            <span className='text-[14px]' ><IoReloadOutline /></span>
            <h6 className='text-[#6D6D6D] text-[9px] lg:text-[16px] font-normal font-dms'>Return policy in 30 days</h6>
          </div>
            </div>
           </div>
        </Container>
    </section>
  )
}

export default Information