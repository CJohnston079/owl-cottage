import PropTypes from "prop-types";
import { useState } from "react";
import NavLink from "./NavLink";
import NavMenu from "./NavMenu";
import "../../styles/nav/NavBar.css";

export default function NavBar({ links, children }) {
	const [isFloating, setIsFloating] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	const toggleFloatingNav = () => {
		const homeElement = document.querySelector("#home");
		const boundingElement = homeElement ? homeElement.nextSibling : undefined;
		const distanceFromBoundingElement = boundingElement
			? boundingElement.getBoundingClientRect().top
			: 0;
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

	const sections = links;
	const navLinks = sections.map(section => {
		const href = `#${section}`;

		return <NavLink key={section} href={href} isActive={activeSection === section} />;
	});

	return (
		<header id="nav" className={isFloating ? "floating-nav" : ""}>
			<NavMenu navLinks={navLinks} activeSection={activeSection} />
			<nav>
				<ul>{navLinks}</ul>
				{children}
			</nav>
		</header>
	);
}

NavBar.propTypes = {
	links: PropTypes.array,
	children: PropTypes.node,
};
