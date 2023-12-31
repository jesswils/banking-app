import Banks from './Banks';
import Phone from './Homepage-Images';

const Main = () => {
	return (
		<>
			<section className='ml-56 mr-56'>
				<Phone />
				<h1 className='text-[3.5rem] font-bold text-white tracking-wider leading-extra-loose w-[36.625rem] h-[13.125rem] mt-16'>
					Discover Financial Freedom with LegacyLine
				</h1>
				<p className='w-[36.625rem] text-transparent-purple mt-8 mb-2'>
					Welcome to our bank's website, where we provide secure finanical solutions tailored to meet your unique needs.
				</p>
				{/* buttons */}

				<ul className='flex pt-6 pr-8 align-center gap-[0.625rem]'>
					<li>
						<a
							href='#'
							className='inline-flex justify-center align-center bg-white px-6 py-4 gap-x-2.5 w-auto h-auto rounded-lg text-deep-purple font-medium'
						>
							Open Bank Account
						</a>
					</li>
					<li>
						<a
							href='#'
							className='inline-flex justify-center align-center border border-white/[.20] text-white px-6 py-4 gap-x-2.5 w-auto h-auto rounded-lg text-deep-purple font-medium'
						>
							Learn More
						</a>
					</li>
				</ul>

				{/* information */}
				<ul className='flex mt-5 pt-6 pr-8 align-center gap-32 mb-[9rem]' aria-description='Bank information'>
					<li className='text-white text-[2rem] font-semibold'>
						{/* less than symbol */}
						&#60;0.1%
						<p className='text-transparent-purple text-base font-normal'>Transaction Fees</p>
					</li>
					<li className='text-white text-[2rem] font-semibold'>
						+14%
						<p className='text-transparent-purple text-base font-normal'>Savings Percentage</p>
					</li>
					<li className='text-white text-[2rem] font-semibold'>
						+2.9M
						<p className='text-transparent-purple text-base font-normal'>Business Owner</p>
					</li>
				</ul>
			</section>
			<section>
				<Banks />
			</section>
		</>
	);
};

export default Main;
