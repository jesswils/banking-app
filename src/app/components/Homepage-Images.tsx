import React from 'react'

const Images = () => {
  return (
    <>
    {/* mobile phone */}
    <section className='absolute flex place-self-end justify-end  end-80'>
          <img src={'/assets/body_internal.png'} alt='mobile Images' className='absolute w-[14.8935rem] h=[32.2115rem]' />
    <img src={'/assets/phone.png'} alt='mobile view of the banking app' className='w-[14.8935rem] h=[32.2115rem]' />
    </section>
    <section>
    
    {/* symbols floating around */}
      <img src='/svgs/euro-up.svg' alt='euro symbol' className='w-8 h-8 absolute right-60 top-60' />
      <img src='/svgs/pound.svg' alt='pound symbol' className='w-8 h-8 absolute right-16 top-[17rem]' />
    {/* credit card  */}
    <div id='credit-card' className=' bg-credit-card/60 border rounded-[0.9375rem] border-transparent w-[21.375rem] h-[11.875rem] absolute right-9 top-80 backdrop-blur-sm'/>
    <img src='/assets/logo.svg' alt='credit card logo' className='absolute right-[18.7rem] top-[21rem]' />
    
    {/* credit card info */}
    <section className='absolute right-[12.5rem] top-96 text-xs uppercase'>
    <p aria-description='credit card number' className='pt-3 text-base leading-6'>****  ****  ****  ****</p>
    <p aria-description='credit card limit' className='font-semibold pt-6 pr-4 text-base uppercase'>$1000 000 Limit</p>
    <section className='absolute -right-20 -bottom-1'>
    <p aria-description='credit card valid to'>Valid Till<br></br>  +
    <img src='/assets/fi-sr-infinity.svg' alt='credit card valid to date' className='w-min inline pl-2' /></p>
    </section>
    </section>
    </section>
    </>     
  )
}

export default Images