import PropTypes from "prop-types";

import hamburgerIcon from "../../assets/icons/menu.svg";

export default function NavMenu({ navLinks }) {
	return (
		<>
			<button className="hamburger">
				<img src={hamburgerIcon} alt="Navigation links" />
			</button>
			{/* <div>{navLinks}</div> */}
		</>
	);
}

NavMenu.propTypes = {
	navLinks: PropTypes.node,
};
