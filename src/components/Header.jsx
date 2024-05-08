import { useState } from "react";
import NavLink from "./NavLink";
import "../styles/Header.css";

export default function Header() {
	const [isFloating, setIsFloating] = useState(false);

	const toggleFloatingNav = () => {
		const boundingElement = document.querySelector("#about");
		const distanceFromBoundingElement = boundingElement.getBoundingClientRect().top;

		setIsFloating(distanceFromBoundingElement <= 0);
	};

	window.addEventListener("scroll", toggleFloatingNav);

	return (
		<header id="nav" className={isFloating ? "floating-nav" : ""}>
			<nav>
				<ul>
					<NavLink href="#home" isActive={true} />
					<NavLink href="#about" />
					<NavLink href="#location" />
					<NavLink href="#gallery" />
					<NavLink href="#reviews" />
					<NavLink href="#booking" />
				</ul>
			</nav>
		</header>
	);
}
