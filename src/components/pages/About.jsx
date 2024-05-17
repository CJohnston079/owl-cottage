import Paragraphs from "../shared/Paragraphs";
import Section from "../shared/Section";
import copy from "../../data/copy.json";
import "../../styles/pages/About.css";

export default function About() {
	return (
		<Section sectionId="about">
			<Paragraphs paragraphs={copy.about} />
			<h3>Amenities</h3>
			<div className="img-grid">
				<figure className="icon-with-caption">
					<img src="./src/assets/icons/bed.svg" alt="" />
					<figcaption>2 bedrooms</figcaption>
				</figure>
				<figure className="icon-with-caption">
					<img src="./src/assets/icons/pets.svg" alt="" />
					<figcaption>Pet friendly</figcaption>
				</figure>
				<figure className="icon-with-caption">
					<img src="./src/assets/icons/car.svg" alt="" />
					<figcaption>Driveway</figcaption>
				</figure>
				<figure className="icon-with-caption">
					<img src="./src/assets/icons/view.svg" alt="" />
					<figcaption>Mountain view</figcaption>
				</figure>
				<figure className="icon-with-caption">
					<img src="./src/assets/icons/wifi.svg" alt="" />
					<figcaption>Free wifi</figcaption>
				</figure>
				<figure className="icon-with-caption">
					<img src="./src/assets/icons/tv.svg" alt="" />
					<figcaption>55-inch TV with Netflix</figcaption>
				</figure>
			</div>
		</Section>
	);
}
