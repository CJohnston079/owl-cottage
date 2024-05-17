import PropTypes from "prop-types";
import "../../styles/shared/Paragraphs.css";

export default function Paragraphs({ paragraphs }) {
	const paragraphElements = paragraphs.map(paragraph => (
		<p key={paragraph.id}>{paragraph.content}</p>
	));

	return <div className="p-container">{paragraphElements}</div>;
}

Paragraphs.propTypes = {
	paragraphs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			content: PropTypes.string.isRequired,
		})
	),
};
