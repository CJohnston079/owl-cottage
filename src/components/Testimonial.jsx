import PropTypes from "prop-types";

export default function Testimonial({ review }) {
	const content = review.content;
	const author = review.author;

	return (
		<div className="testimonial">
			<img
				className="testimonial-quotation"
				src="./src/assets/quotes.svg"
				alt="Opening quotation mark"
			/>
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
