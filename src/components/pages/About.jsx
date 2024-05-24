import Amenities from "../shared/Amenities";
import Button from "../shared/Button";
import Modal from "../shared/Modal";
import Section from "../shared/Section";
import "../../styles/pages/About.css";

export default function About() {
	return (
		<Section sectionId="about">
			<div style={{ marginBottom: "4rem" }} className="grid">
				<div className="">
					<h3>The Cottage</h3>
					<p>
						A traditional stone cottage built in 1868, Owl Cottage features a large, sociable
						kitchen/dining/living area with wood burner, master bedroom with king size bed, second
						bedroom with bunk beds, shower room, enclosed back garden, off-street parking and
						stunning views over the forest and mountains opposite.
					</p>
					<br />
					<p>
						Dogs are very welcome here and can enjoy the enclosed garden and dog-friendly furniture
						while you relax in the spacious open-plan living area with log-burner. Amazing views of
						mountains & countryside - you may even see deer in the garden!
					</p>
					<br />
					<Button style="emphasis">Take a tour of Owl ➞</Button>
				</div>
				<div className="bento-grid">
					<div className="bento-column">
						<img className="bento-img" src="./src/assets/images/owl-kitchen.webp" alt="s" />
						<img className="bento-img" src="./src/assets/images/owl-bedroom.webp" alt="s" />
					</div>
					<div className="bento-column">
						<img className="bento-img" src="./src/assets/images/owl-signpost.webp" alt="s" />
						<img className="bento-img" src="./src/assets/images/owl-furniture.webp" alt="s" />
					</div>
					<div className="bento-column">
						<img className="bento-img" src="./src/assets/images/owl-garden.webp" alt="s" />
						<img className="bento-img" src="./src/assets/images/owl-coffee.webp" alt="s" />
					</div>
				</div>
			</div>
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
				{() => <Amenities id="wee" />}
			</Modal>
		</Section>
	);
}
