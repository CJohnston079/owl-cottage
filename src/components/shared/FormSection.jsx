import PropTypes from "prop-types";
import "../../styles/shared/FormSection.css";

export default function FormSection({ heading, children }) {
	return (
		<div className="form-section">
			<h3 className="form-section-heading">{heading}</h3>
			{children}
		</div>
	);
}

FormSection.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.node,
};
