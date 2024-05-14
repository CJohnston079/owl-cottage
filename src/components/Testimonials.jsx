import FlexContainer from "./FlexContainer";
import Form from "./Form";
import Modal from "./Modal";
import Section from "./Section";
import Testimonial from "./Testimonial";
import reviews from "../data/reviews.json";

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
			<Modal heading="Leave a testimonial">
				<Form />
			</Modal>
		</Section>
	);
}
