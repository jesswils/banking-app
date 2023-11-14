import Nav from "./components/Nav";

export default function Home() {
	return (
		<main>
      <Nav />
      <div id='ellipse-top' className='ellipse-top fixed inset-y-0 pl-[11.8rem] pr-[23.2rem] ml-[11.8rem] mr-[23.2rem] mb-[20.5rem]' />
       <div id='ellipse-left' className='ellipse-left relative mr-[50.6rem] ml-[-16rem] mb-[-9.2rem] mt-[8.1rem]' />
      <div id='ellipse-right' className='ellipse-right relative mr-[7.94rem] mb-[7.79rem] ml-[33.4rem] mt-[11.1rem]' />
		</main>
	);
}
