import { useState } from "react";
import NavLink from "./NavLink";
import "../styles/Header.css";

export default function Header() {
	const [isFloating, setIsFloating] = useState(false);
	const [activeSection, setActiveSection] = useState("#home");

	const toggleFloatingNav = () => {
		const boundingElement = document.querySelector("#home").nextSibling;
		const distanceFromBoundingElement = boundingElement.getBoundingClientRect().top;

		setIsFloating(distanceFromBoundingElement <= 0);
	};

	const toggleActiveSection = () => {
		const scrollPosition = window.scrollY;
		const sections = document.querySelectorAll("section");

		sections.forEach(section => {
			const sectionTop = section.offsetTop - 42;
			const sectionHeight = section.clientHeight;

			if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
				setActiveSection(section.id);
			}
		});
	};

	window.addEventListener("scroll", toggleFloatingNav);
	window.addEventListener("scroll", toggleActiveSection);

	return (
		<header id="nav" className={isFloating ? "floating-nav" : ""}>
			<nav>
				<ul>
					<NavLink href="#home" isActive={activeSection === "home"} />
					<NavLink href="#about" isActive={activeSection === "about"} />
					<NavLink href="#location" isActive={activeSection === "location"} />
					<NavLink href="#gallery" isActive={activeSection === "gallery"} />
					<NavLink href="#reviews" isActive={activeSection === "reviews"} />
					<NavLink href="#booking" isActive={activeSection === "booking"} />
				</ul>
			</nav>
		</header>
	);
}
