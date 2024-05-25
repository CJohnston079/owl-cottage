import AmenitiesList from "../shared/AmenitiesList";
import Introduction from "../shared/Introduction";
import Modal from "../shared/Modal";
import Section from "../shared/Section";
import "../../styles/pages/About.css";

export default function About() {
	return (
		<Section sectionId="about">
			<Introduction />
			<h3>Amenities</h3>
			<div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
				<figure className="icon-with-caption">
					<img src="./src/assets/bed.png" alt="" />
					<figcaption>2 bedrooms, sleeps up to four guests</figcaption>
				</figure>
				<figure className="icon-with-caption">
					<img src="./src/assets/mountains.png" alt="" />
					<figcaption>Amazing views of mountains & countryside</figcaption>
				</figure>
				<figure className="icon-with-caption">
					<img src="./src/assets/dog.png" alt="" />
					<figcaption>Dog-friendly, includng furniture and enclosed garden</figcaption>
				</figure>
			</div>
			<Modal buttonText="Full list of amenities ➞" heading="Amenities" showCloseButton={true}>
				{() => <AmenitiesList id="wee" />}
			</Modal>
		</Section>
	);
}
