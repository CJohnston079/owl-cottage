import { Link } from "react-router-dom";
import Button from "../shared/Button";
import AmenitiesList from "./amenities/AmenitiesList";
import Modal from "../shared/Modal";
import ContentWithBento from "../shared/ContentWithBento";
import Section from "../shared/Section";
import "../../styles/sections/About.css";
import "../../styles/sections/Amenities.css";

import owlKitchen from "../../assets/images/cottage/owl-kitchen.webp";
import owlBedroom from "../../assets/images/cottage/owl-bedroom.webp";
import owlSignpost from "../../assets/images/cottage/owl-signpost.webp";
import owlFurniture from "../../assets/images/cottage/owl-furniture.webp";
import owlGarden from "../../assets/images/cottage/owl-garden.webp";
import owlCoffee from "../../assets/images/cottage/owl-coffee.webp";

export default function About() {
	const images = [
		{ src: owlKitchen, alt: "Kitchen" },
		{ src: owlBedroom, alt: "Bedroom" },
		{ src: owlSignpost, alt: "Signpost" },
		{ src: owlFurniture, alt: "Furniture" },
		{ src: owlGarden, alt: "Garden" },
		{ src: owlCoffee, alt: "Coffee" },
	];

	return (
		<Section sectionId="about">
			<ContentWithBento bentoImages={images}>
				<h3>The Cottage</h3>
				<p className="intro-text">
					A cozy and inviting traditional stone cottage built in 1868, Owl Cottage is an ideal base
					for your Highlands adventures. We have lovingly furnished it to feel like a real home from
					home, for you, your family and your furry friends.
				</p>
				<p>
					The heart of the home is a large and sociable open-plan kitchen, dining and living room
					with space for the whole family. The well-equipped kitchen is perfect for preparing
					home-cooked meals to enjoy at the farmhouse dining table with the family. In the evenings
					you can relax around the wood burner and enjoy our wide range of books, games and DVDs.
				</p>
				<p>
					The master bedroom has a king size bed with memory-foam mattress while the second bedroom
					has bunk beds, ideal for the kids and fun for adults too. Between the two rooms is a fresh
					and modern shower room.
				</p>
				<p>
					The enclosed back garden is ideal for children and dogs alike. Soak up the sun on the
					large patio with luxury garden furniture and enjoy the peace and quiet. Watch out for the
					local wildlife including red squirrels, red kite and deer, who can often be seen in the
					garden at dusk. To the front of the cottage is space for one vehicle and spectacular views
					over the forest and mountains opposite.
				</p>
				<p>
					Please note that the cottage does not have internet access but does have mobile phone
					reception.
				</p>
				<p></p>
				<Link to="/tour">
					<Button style="normal">Take a tour of Owl ➞</Button>
				</Link>
				<Modal buttonText="Full list of amenities ➞" heading="Amenities" showCloseButton={true}>
					{() => <AmenitiesList />}
				</Modal>
			</ContentWithBento>
		</Section>
	);
}
