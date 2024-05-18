import PropTypes from "prop-types";
import "../../styles/shared/Testimonial.css";

export default function Testimonial({ review }) {
	const content = review.content;
	const author = review.author;

	return (
		<div className="testimonial">
			<span className="testimonial-quotation">“</span>
			<p className="testimonial-body">{content}</p>
			<span className="testimonial-author">{author}</span>
		</div>
	);
}

Testimonial.propTypes = {
	review: PropTypes.shape({
		content: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
	}),
};
