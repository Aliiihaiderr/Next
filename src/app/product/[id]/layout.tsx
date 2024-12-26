export default function ProductLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			{children}
			<h1>Hello product</h1>
		</>
	);
}
