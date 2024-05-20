import Button from "../shared/Button";
import FlexContainer from "../shared/FlexContainer";
import Section from "../shared/Section";
import "../../styles/pages/About.css";

export default function About() {
	return (
		<Section sectionId="about">
			<FlexContainer>
				<div>
					<p>
						A traditional stone cottage built in 1868, Owl Cottage features a large, sociable
						kitchen/dining/living area with wood burner, master bedroom with king size bed, second
						bedroom with bunk beds, shower room, enclosed back garden, off-street parking and
						stunning views over the forest and mountains opposite.
					</p>
					<Button style="emphasis">Take a tour of Owl ➞</Button>
				</div>
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
			</FlexContainer>
		</Section>
	);
}
