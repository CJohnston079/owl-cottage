import Button from "./Button";
import FlexContainer from "./FlexContainer";
import Testimonial from "./Testimonial";
import Section from "./Section";
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
			<Button content="Leave a testimonial" href="#home"></Button>
		</Section>
	);
}
