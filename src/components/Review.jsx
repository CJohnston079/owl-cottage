import PropTypes from "prop-types";

export default function Review({ review }) {
	const content = review.content;
	const author = review.author;

	return (
		<div className="review">
			<img
				className="review-quotation"
				src="./src/assets/quotes.svg"
				alt="Opening quotation mark"
			/>
			<p className="review-body">{content}</p>
			<span className="review-author">{author}</span>
		</div>
	);
}

Review.propTypes = {
	review: PropTypes.shape({
		content: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
	}),
};
