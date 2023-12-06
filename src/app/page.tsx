import Main from './components/Main';
import Nav from './components/Nav';

export default function Home() {
	return (
		<main>
			<Nav />
			<Main />
			<div id='ellipse-left' className='ellipse-left relative mr-[50.6rem] ml-[-16rem] mb-[-9.2rem] mt-[8.1rem]' />
			<div id='ellipse-right' className='ellipse-right relative mr-[7.94rem] mb-[7.79rem] ml-[33.4rem] mt-[11.1rem]' />
		</main>
	);
}
