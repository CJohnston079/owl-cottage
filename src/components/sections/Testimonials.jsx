import { useState } from "react";
import Button from "../shared/Button";
import FlexContainer from "../shared/FlexContainer";
import Modal from "../shared/Modal";
import ModalForm from "../shared/ModalForm";
import Section from "../shared/Section";
import Testimonial from "../shared/Testimonial";
import formFields from "../../data/formFields.json";
import reviews from "../../data/reviews.json";
import "../../styles/sections/Testimonials.css";

export default function Testimonials() {
	const longReviews = reviews.filter(review => {
		return review.content.length > 140; // && review.content.length <= 210;
	});

	const randomReviewIds = () => {
		const randomNumsSet = new Set();

		while (randomNumsSet.size < 4) {
			randomNumsSet.add(Math.floor(Math.random() * longReviews.length));
		}

		return Array.from(randomNumsSet);
	};

	const [testimonials, setTestimonials] = useState(generateTestimonials());

	function generateTestimonials() {
		return randomReviewIds().map(reviewId => {
			const review = longReviews[reviewId];
			return <Testimonial key={reviewId} review={review} />;
		});
	}

	const handleShowMoreTestimonials = () => {
		setTestimonials(generateTestimonials());
	};

	return (
		<Section sectionId="testimonials">
			<FlexContainer>{testimonials}</FlexContainer>
			<div className="t-buttons">
				<Button onClick={handleShowMoreTestimonials}>Show more testimonials</Button>
				<Modal buttonText="Leave a testimonial">
					{({ closeModal }) => (
						<ModalForm fieldsData={formFields.testimonials} handleClose={closeModal} />
					)}
				</Modal>
			</div>
		</Section>
	);
}
