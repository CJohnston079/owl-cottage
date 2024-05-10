import PropTypes from "prop-types";
import "../styles/Button.css";

export default function Button({ content, href, type = "button" }) {
	return (
		<button className="button" type={type}>
			<a href={href}>{content}</a>
		</button>
	);
}

Button.propTypes = {
	content: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	type: PropTypes.string,
};
