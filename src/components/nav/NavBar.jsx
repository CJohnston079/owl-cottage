import { useState } from "react";
import NavLink from "./NavLink";
import "../../styles/nav/NavBar.css";

export default function NavBar() {
	const [isFloating, setIsFloating] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

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

	const sections = ["home", "about", "location", "faq", "testimonials", "booking"];
	const navLinks = sections.map(section => {
		const href = `#${section}`;

		return <NavLink key={section} href={href} isActive={activeSection === section} />;
	});

	return (
		<header id="nav" className={isFloating ? "floating-nav" : ""}>
			<nav>
				<ul>{navLinks}</ul>
			</nav>
		</header>
	);
}
