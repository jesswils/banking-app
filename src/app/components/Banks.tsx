const Banks = () => {
	return (
		<>
			<section
				className=' flex justify-evenly justify-self-center pb-5 bg-white/[0.20] w-screen h-20 flex pt-6 pr-8 align-center gap-[0.625rem]'
				aria-description='logos for banking providers'
			>
				<img src={'/svgs/binance.svg'} alt='Binance' />
				<img src={'/svgs/ibm.svg'} alt='IBM' />
				<img src={'/svgs/pnc.svg'} alt='PNC' />
				<img src={'svgs/world-bank.svg'} alt='World Bank' />
				<img src={'/svgs/stripe.svg'} alt='Stripe' />
			</section>
		</>
	);
};

export default Banks;
