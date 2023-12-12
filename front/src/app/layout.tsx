import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Provider } from "jotai";

const notoJp = Noto_Sans_JP({
	weight: ["400", "500"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Provider>
			<html lang="ja">
				<body className={notoJp.className}>{children}</body>
			</html>
		</Provider>
	);
}
