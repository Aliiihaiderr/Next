"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
	const pathname = usePathname();
	return (
		<div className="Header">
			<Link
				href="/"
				style={{
					fontWeight: pathname === "/" ? "bold" : "normal",
					color: pathname === "/" ? "white" : "blue",
				}}
			>
				Home
			</Link>
			<Link
				href="/about"
				style={{
					fontWeight: pathname === "/about" ? "bold" : "normal",
					color: pathname === "/about" ? "white" : "blue",
				}}
			>
				About
			</Link>
			<Link
				href="/product/1"
				style={{
					fontWeight: pathname === "/product/1" ? "bold" : "normal",
					color: pathname === "/product/1" ? "white" : "blue",
				}}
			>
				Product 1
			</Link>
		</div>
	);
};
