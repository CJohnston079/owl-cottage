import Button from "../shared/Button";
import FlexContainer from "../shared/FlexContainer";
import Section from "../shared/Section";
import "../../styles/pages/About.css";

export default function About() {
	return (
		<Section sectionId="about">
			<FlexContainer>
				<div className="feature">
					<p>
						A traditional stone cottage built in 1868, Owl Cottage features a large, sociable
						kitchen/dining/living area with wood burner, master bedroom with king size bed, second
						bedroom with bunk beds, shower room, enclosed back garden, off-street parking and
						stunning views over the forest and mountains opposite.
					</p>
					<p>
						Dogs are very welcome here and can enjoy the enclosed garden and dog-friendly furniture
						while you relax in the spacious open-plan living area with log-burner. Amazing views of
						mountains & countryside - you may even see deer in the garden!
					</p>
					<Button style="emphasis">Take a tour of Owl ➞</Button>
				</div>
				<div className="img-grid">
					<figure className="icon-with-caption">
						<img src="./src/assets/icons/amenities/bed.png" alt="" />
						<figcaption>2 bedrooms</figcaption>
					</figure>
					<figure className="icon-with-caption">
						<img src="./src/assets/icons/amenities/pet.png" alt="" />
						<figcaption>Pet friendly</figcaption>
					</figure>
					<figure className="icon-with-caption">
						<img src="./src/assets/icons/amenities/parking.png" alt="" />
						<figcaption>Driveway</figcaption>
					</figure>
					<figure className="icon-with-caption">
						<img src="./src/assets/icons/amenities/landscape.png" alt="" />
						<figcaption>Mountain view</figcaption>
					</figure>
				</div>
			</FlexContainer>
			<h3>Amenities</h3>
			<div className="amenities">
				<div className="amenity">
					<img className="amenity-icon" src="./src/assets/icons/amenities/pet.png" alt="Pet icon" />
					<span className="amenity-text">Pets allowed</span>
				</div>
				<div className="amenity">
					<img
						className="amenity-icon"
						src="./src/assets/icons/amenities/calendar-plus.png"
						alt="Long-term stay icon"
					/>
					<span className="amenity-text">Long-term stays allowed</span>
				</div>
				<div className="amenity">
					<img
						className="amenity-icon"
						src="./src/assets/icons/amenities/key.png"
						alt="Self check-in icon"
					/>
					<span className="amenity-text">Self check-in</span>
				</div>
				<div className="amenity">
					<img
						className="amenity-icon"
						src="./src/assets/icons/amenities/safe-in.png"
						alt="Lockbox icon"
					/>
					<span className="amenity-text">Lockbox</span>
				</div>
			</div>
		</Section>
	);
}
