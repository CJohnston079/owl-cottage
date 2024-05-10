import FlexContainer from "./FlexContainer";
import Testimonial from "./Testimonial";
import Section from "./Section";

export default function Testimonials() {
	return (
		<Section sectionId="testimonials">
			<FlexContainer>
				<Testimonial
					review={{
						content:
							"My second stay at Owl Cottage. Such a lovely property, good base for lots of exploring. Will definitely be back.",
						author: "Kelly",
					}}
				/>
				<Testimonial
					review={{
						content:
							"Beautiful house in a great location. Very spacious and has everything you need for a few days away. Great garden, which is fully enclosed for the dog too.",
						author: "Erin",
					}}
				/>
				<Testimonial
					review={{
						content:
							"Owl Cottage is a very cosy comfortable place to stay and a great base to explore and enjoy the local area. Loads to do and see locally. Highly recommended!",
						author: "Tracy",
					}}
				/>
			</FlexContainer>{" "}
		</Section>
	);
}
