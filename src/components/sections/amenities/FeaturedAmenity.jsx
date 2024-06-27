import PropTypes from "prop-types";
import Card from "../../shared/Card";

export default function FeaturedAmenity({ iconSrc, heading, content }) {
	return (
		<Card>
			<figure className="ft-amenity">
				<img className="ft-amenity-icon" src={iconSrc} alt="" />
				<hr />
				<figcaption className="ft-amenity-text-wrapper">
					<h4 className="ft-amenity-heading">{heading}</h4>
					<p className="ft-amenity-description">{content}</p>
				</figcaption>
			</figure>
		</Card>
	);
}

FeaturedAmenity.propTypes = {
	iconSrc: PropTypes.string,
	heading: PropTypes.string,
	content: PropTypes.string,
};
