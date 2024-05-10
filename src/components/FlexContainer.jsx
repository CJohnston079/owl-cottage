import PropTypes from "prop-types";
import "../styles/FlexContainer.css";

export default function FlexContainer({ children }) {
	return <div className="flex-container">{children}</div>;
}

FlexContainer.propTypes = {
	children: PropTypes.node,
};
