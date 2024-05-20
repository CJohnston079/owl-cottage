import PropTypes from "prop-types";
import "../../styles/shared/Amenity.css";

export default function Amenity({ icon, content }) {
	return (
		<div className="amenity">
			<img
				className="amenity-icon"
				src={`./src/assets/icons/amenities/${icon}.png`}
				alt={`${icon} icon`}
			/>
			<span className="amenity-text">{content}</span>
		</div>
	);
}

Amenity.propTypes = {
	icon: PropTypes.string,
	content: PropTypes.string,
};
