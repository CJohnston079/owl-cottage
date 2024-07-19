import PropTypes from "prop-types";
import Card from "../../shared/Card";

export default function IconCard({ iconSrc, heading }) {
	return (
		<Card>
			<figure className="icard">
				<img className="icard-icon" src={iconSrc} alt="" />
				<hr />
				<figcaption className="icard-text-wrapper">
					<h4 className="icard-heading">{heading}</h4>
				</figcaption>
			</figure>
		</Card>
	);
}

IconCard.propTypes = {
	iconSrc: PropTypes.string,
	heading: PropTypes.string,
};
