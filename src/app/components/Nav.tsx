const Nav = () => {
	return (
		<>
			<nav className='flex items-center justify-between flex-wrap p-6 ml-64 mr-64'>
				<span className='text-2xl font-sans font-semibold whitespace-nowrap text-white'>LegacyLine.</span>

				<div className='hidden w-full md:block md:w-auto pt-5' id='navbar-default'>
					<ul className='flex flex-col p-4 md:p-0 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 font-display'>
						<li>
							<a
								href='#'
								className='text-base text-white rounded font-medium'
								aria-current='page'
							>
								Home
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-base text-transparent-purple rounded'
							>
								Services
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-base text-transparent-purple rounded'
							>
								Contact
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-base text-transparent-purple rounded'
							>
								About us
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-base text-white font-medium bg-transparent
              px-4 py-2.5 leading-none rounded-lg'
							>
								Sign up
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Nav;
