
const Main = () => {
  return (
    <>
    <h1 className="text-[3.5rem] font-bold text-white tracking-wider leading-extra-loose w-[36.625rem] h-[13.125rem] mt-[5.25rem]">Discover Financial Freedom with LegacyLine</h1>
    <p className="w-[36.625rem] text-transparent-purple mt-6">Welcome to our bank's website, where we provide secure finanical solutions
        tailored to meet your unique needs.
    </p>
    {/* buttons */}
    <ul className="flex pt-[1.5rem] pr-[2rem] align-center gap-[0.625rem]">
    <li>
        <a
        href='#'
        className='inline-flex justify-center align-center bg-white px-[1.5rem] py-4 gap-x-2.5 w-auto h-auto rounded-lg text-deep-purple font-medium'
        >
            Open Bank Account
        </a>
    </li>
    <li>
    <a
        href='#'
        className='inline-flex justify-center align-center border border-white/[.20] text-white px-[1.5rem] py-4 gap-x-2.5 w-auto h-auto rounded-lg text-deep-purple font-medium'
        >
            Learn More
        </a>
    </li>
    </ul>
    {/* information */}
<ul>
    <li>
        &#60; 0.1%  // less than symbol
        <p>Transaction Fees</p>
    </li>
    <li>
       +14%
        <p>Savings Percentage</p>
    </li>
    <li>
        +2.9M
        <p>Business Owner</p>
    </li>
</ul>
    </>
  )
}

export default Main