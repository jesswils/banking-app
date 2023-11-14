const Nav = () => {
	return (
		<>
			<nav className='flex items-center justify-between flex-wrap p-6'>
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
					<ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0'>
						<li>
							<a
								href='#'
								className='py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0'
								aria-current='page'
							>
								Home
							</a>
						</li>
						<li>
							<a
								href='#'
								className='py-2 pl-3 pr-4 text-transparent rounded text-white bg-transparent md:p-0'
							>
								Services
							</a>
						</li>
						<li>
							<a
								href='#'
								className='py-3 pl-3 pr-4 text-transparent rounded text-white bg-transparent md:p-0'
							>
								Contact
							</a>
						</li>
						<li>
							<a
								href='#'
								className='py-2 pl-3 pr-4 text-transparent rounded text-white bg-transparent md:p-0'
							>
								About us
							</a>
						</li>
						<li>
							<button type='button' className='inline-block text-sm font-medium text-center text-white bg-transparent
              px-4 py-2.5 leading-none border rounded border-transparent'>
								Sign up
							</button>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Nav;
