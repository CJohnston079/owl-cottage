import NavLink from "./NavLink";
import "../styles/Header.css";

export default function Header() {
	return (
		<header id="nav">
			<nav>
				<ul>
					<NavLink href="#hero" isActive={true} />
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
