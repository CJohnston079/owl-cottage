import { Link } from "react-router-dom";
import Button from "../shared/Button";
import AmenitiesList from "./amenities/AmenitiesList";
import Modal from "../shared/Modal";
import ContentWithBento from "../shared/ContentWithBento";
import Section from "../shared/Section";
import "../../styles/sections/About.css";
import "../../styles/sections/Amenities.css";

import livingRoom from "../../assets/images/cottage/living-dogs-on-sofa.webp";
import kitchen from "../../assets/images/cottage/kitchen.jpg";
import kitchenCoffee from "../../assets/images/cottage/kitchen-coffee.jpg";
import bedroomOne from "../../assets/images/cottage/bedroom-one.jpg";
import exteriorSign from "../../assets/images/cottage/exterior-sign.jpg";
import exteriorDogInGarden from "../../assets/images/cottage/exterior-dog-in-garden.webp";

export default function About() {
	const images = [
		{ src: kitchen, alt: "Kitchen" },
		{ src: bedroomOne, alt: "Bedroom" },
		{ src: exteriorSign, alt: "Signpost" },
		{ src: livingRoom, alt: "Furniture" },
		{ src: exteriorDogInGarden, alt: "Garden" },
		{ src: kitchenCoffee, alt: "Coffee" },
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
					with log-burning stove. The master bedroom has a king size bed with memory-foam mattress
					while the second bedroom has bunk beds, ideal for the kids and fun for adults too. Between
					the two rooms is a fresh and modern shower room.
				</p>
				<p>
					The cottage boasts spectacular views over forest and mountains, and the enclosed back
					garden is ideal for children and dogs alike. Watch out for the local wildlife including
					red squirrels, red kite and deer, who can often be seen in the garden at dusk.
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
