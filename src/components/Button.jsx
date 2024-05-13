import PropTypes from "prop-types";
import "../styles/Button.css";

export default function Button({ type = "button", style = "", onClick, children }) {
	return (
		<button className={`btn ${style}`} type={type} onClick={onClick}>
			{children}
		</button>
	);
}

Button.propTypes = {
	type: PropTypes.string,
	style: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node,
};
