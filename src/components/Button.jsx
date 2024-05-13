import PropTypes from "prop-types";
import "../styles/Button.css";

export default function Button({ type = "button", style = "", children }) {
	return (
		<button className={`btn ${style}`} type={type}>
			{children}
		</button>
	);
}

Button.propTypes = {
	type: PropTypes.string,
	style: PropTypes.string,
	children: PropTypes.node,
};
