const Nav = () => {
	return (
		<>
			<nav className='flex items-center justify-between flex-wrap p-6 ml-[16rem] mr-[16rem]'>
				{
					/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-base text-transparent" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> */
				}
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
              px-4 py-2.5 leading-none rounded-lg'>
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
