import FlexContainer from "./FlexContainer";
import Testimonial from "./Testimonial";
import Section from "./Section";
import reviews from "../data/reviews.json";

export default function Testimonials() {
	const randomReviewIds = function () {
		const randomNumsSet = new Set();

		while (randomNumsSet.size < 3) {
			randomNumsSet.add(Math.floor(Math.random() * reviews.length));
		}

		return Array.from(randomNumsSet);
	};

	const testimonials = randomReviewIds().map(reviewId => {
		const review = reviews[reviewId];

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
		</Section>
	);
}
