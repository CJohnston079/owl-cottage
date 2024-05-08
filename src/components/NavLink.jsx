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

const startsWithHash = function (props, propName, componentName) {
	const href = props[propName];
	const errorMessage = `Invalid prop type \`${propName}\` of type \`${typeof propName}\` supplied to \`${componentName}\`, expected \`string\` beginning with \`#\` character.`;

	if (typeof href !== "string" || !href.startsWith("#")) {
		return new Error(errorMessage);
	}
};

NavLink.propTypes = {
	href: startsWithHash,
	isActive: PropTypes.bool,
};
