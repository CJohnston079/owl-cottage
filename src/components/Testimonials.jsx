import FlexContainer from "./FlexContainer";
import Testimonial from "./Testimonial";
import Section from "./Section";
import reviews from "../data/reviews.json";

export default function Testimonials() {
	const randomReviewIds = Array.from({ length: 3 }, () =>
		Math.floor(Math.random() * reviews.length)
	);

	const testimonials = randomReviewIds.map(reviewId => {
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
