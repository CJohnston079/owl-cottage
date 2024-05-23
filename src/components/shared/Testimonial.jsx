import PropTypes from "prop-types";
import "../../styles/shared/Testimonial.css";

export default function Testimonial({ review }) {
	const [content, author, date, location] = [
		review.content,
		review.name,
		review.date,
		review.location,
	];

	return (
		<div className="testimonial">
			<span className="testimonial-quotation">“</span>
			<p className="testimonial-body">{content}</p>
			<p className="testimonial-footer">
				<span className="testimonial-author">{author}</span>
				<span className="testimonial-location">{location}</span>
				<span className="testimonial-date">{date}</span>
			</p>
		</div>
	);
}

Testimonial.propTypes = {
	review: PropTypes.shape({
		content: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		date: PropTypes.string,
		location: PropTypes.string,
	}),
};
