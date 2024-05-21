import FlexContainer from "../shared/FlexContainer";
import Modal from "../shared/Modal";
import ModalForm from "../shared/ModalForm";
import Section from "../shared/Section";
import Testimonial from "../shared/Testimonial";
import formFields from "../../data/formFields.json";
import reviews from "../../data/reviews.json";
import "../../styles/pages/Testimonials.css";

export default function Testimonials() {
	const shortReviews = reviews.filter(review => {
		return review.content.length > 140 && review.content.length <= 210;
	});

	const randomReviewIds = function () {
		const randomNumsSet = new Set();

		while (randomNumsSet.size < 4) {
			randomNumsSet.add(Math.floor(Math.random() * shortReviews.length));
		}

		return Array.from(randomNumsSet);
	};

	const testimonials = randomReviewIds().map(reviewId => {
		const review = shortReviews[reviewId];

		return (
			<Testimonial
				key={reviewId}
				review={{
					content: review.content,
					author: review.name,
				}}
			/>
		);
	});

	return (
		<Section sectionId="testimonials">
			<FlexContainer>{testimonials}</FlexContainer>
			<Modal heading="Open Form">
				{({ closeModal }) => (
					<ModalForm fieldsData={formFields.testimonials} handleClose={closeModal} />
				)}
			</Modal>
			{/* <Modal heading="Leave a testimonial"></Modal> */}
		</Section>
	);
}
