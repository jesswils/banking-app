import React from 'react'

const Images = () => {
  return (
    <>
    {/* mobile banking app */}
    <section className='absolute flex place-self-end justify-end  end-80'>
          <img src={'/assets/body_internal.png'} alt='mobile Images' className='absolute w-[14.8935rem] h=[32.2115rem]' />
    <img src={'/assets/phone.png'} alt='mobile view of the banking app' className='w-[14.8935rem] h=[32.2115rem]' />
    </section>
    <section>
    <img src='/assets/gaussian_layer.png' alt='credit card' className='absolute right-24 top-[23rem]'/>
    <img src='/assets/logo.svg' alt='credit card logo' className='absolute right-[19rem] top-[24rem]' />
    
    {/* credit card */}
    <section className='absolute right-64 top-[27rem] text-xs uppercase'>
    <p aria-description='credit card number' className='pt-3'>****  ****  ****  ****</p>
    <p aria-description='credit card limit' className='font-semibold pt-[1.5rem]'>$1000 000 Limit</p>
    <section className='absolute -right-24 -bottom-1'>
    <p aria-description='credit card valid to'>Valid Till<br></br>  +
    <img src='/assets/fi-sr-infinity.svg' alt='credit card valid to date' className='w-min inline pl-2' /></p>
    </section>
    </section>
    </section>
    </>     
  )
}

export default Images