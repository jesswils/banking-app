import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	weight: ['400', '600'],
	style: ['normal'],
	display: 'swap',
	variable: '--font-poppins',
	subsets: ['latin'],
});

const jakarta = Plus_Jakarta_Sans({
	weight: ['400', '500', '700'],
	style: ['normal'],
	display: 'swap',
	variable: '--font-jakarta',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Legacy Line',
	description: 'Discover finanical freedom',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={jakarta.className}>{children}</body>
		</html>
	);
}
