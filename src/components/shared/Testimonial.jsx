import PropTypes from "prop-types";
import Modal from "./Modal";
import "../../styles/shared/Testimonial.css";

export default function Testimonial({ review }) {
	const [content, author, date, location] = [
		review.content,
		review.name,
		review.date,
		review.location,
	];

	const overflowHeading = `Message from ${author}, ${date}`;

	return (
		<div className="testimonial">
			<span className="testimonial-quotation">“</span>
			<div className="testimonial-container">
				<p className={`testimonial-body ${content.length > 210 && "overflow"}`}>{content}</p>
				{content.length > 210 && (
					<Modal buttonText="Show more" heading={overflowHeading} showCloseButton={true}>
						{() => <p className="overflow-body">{content}</p>}
					</Modal>
				)}
			</div>
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
