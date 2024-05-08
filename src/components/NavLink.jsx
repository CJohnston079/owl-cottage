import PropTypes from "prop-types";
import "../styles/NavLink.css";

export default function NavLink({ href, isActive = false }) {
	const linkTitle = href.charAt(1).toUpperCase() + href.slice(2);

	return (
		<a className={`nav-link ${isActive && "active"}`} href={href}>
			<li>{linkTitle}</li>
		</a>
	);
}

NavLink.propTypes = {
	href: PropTypes.string,
	isActive: PropTypes.bool,
};
