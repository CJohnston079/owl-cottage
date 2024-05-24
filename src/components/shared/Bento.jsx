import PropTypes from "prop-types";
import "../../styles/shared/Bento.css";

export default function Bento({ images }) {
	const imgElements = images.map(image => {
		return <img key={image.alt} className="bento-img" src={image.src} alt={image.alt} />;
	});

	return (
		<div className="bento-container">
			<div className="bento-column">
				{imgElements[0]}
				{imgElements[1]}
			</div>
			<div className="bento-column">
				{imgElements[2]}
				{imgElements[3]}
			</div>
			<div className="bento-column">
				{imgElements[4]}
				{imgElements[5]}
			</div>
		</div>
	);
}

Bento.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			src: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired,
		})
	).isRequired,
};
