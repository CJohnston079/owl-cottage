import PropTypes from "prop-types";
import "../../styles/shared/Card.css";

export default function Card({ children }) {
	return <div className="card">{children}</div>;
}

Card.propTypes = {
	children: PropTypes.node,
};
