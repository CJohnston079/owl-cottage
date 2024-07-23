import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/nav/NavMenu.css";

import hamburgerIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";

export default function NavMenu({ navLinks }) {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => setShowMenu(!showMenu);

	useEffect(() => {
		if (showMenu) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}

		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, [showMenu]);

	return (
		<>
			<button className="menu-button" onClick={toggleMenu}>
				<img src={hamburgerIcon} alt="Open menu" />
				<p className="menu-text">Menu</p>
			</button>
			<div className={`menu-overlay ${!showMenu && "hidden"}`}>
				<div id="nav-menu">
					<button className="menu-button" onClick={toggleMenu}>
						<img src={closeIcon} alt="Close menu" />
						<p className="menu-text">Close</p>
					</button>
					<ul className="nav-menu-links" onClick={toggleMenu}>
						{navLinks}
					</ul>
				</div>
				<div className="menu-backdrop" onClick={toggleMenu}></div>
			</div>
		</>
	);
}

NavMenu.propTypes = {
	navLinks: PropTypes.node,
};
