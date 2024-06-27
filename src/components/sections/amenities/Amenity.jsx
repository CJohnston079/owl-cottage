import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../../styles/sections/amenities/Amenity.css";

export default function Amenity({ icon, content }) {
	const [iconPath, setIconPath] = useState(null);

	useEffect(() => {
		const fetchIcon = async () => {
			const amenityIcon = await import(`../../../assets/icons/amenities/${icon}.png`);
			setIconPath(amenityIcon.default);
		};

		fetchIcon();
	}, [icon]);

	return (
		<div className="amenity">
			{iconPath && <img className="amenity-icon" src={iconPath} alt={`${icon} icon`} />}
			<span className="amenity-text">{content}</span>
		</div>
	);
}

Amenity.propTypes = {
	icon: PropTypes.string,
	content: PropTypes.string,
};
