import Bento from "./Bento";
import Button from "./Button";

import owlKitchen from "../../assets/images/owl-kitchen.webp";
import owlBedroom from "../../assets/images/owl-bedroom.webp";
import owlSignpost from "../../assets/images/owl-signpost.webp";
import owlFurniture from "../../assets/images/owl-furniture.webp";
import owlGarden from "../../assets/images/owl-garden.webp";
import owlCoffee from "../../assets/images/owl-coffee.webp";

import "../../styles/shared/Introduction.css";

export default function Introduction() {
	const images = [
		{ src: owlKitchen, alt: "Kitchen" },
		{ src: owlBedroom, alt: "Bedroom" },
		{ src: owlSignpost, alt: "Signpost" },
		{ src: owlFurniture, alt: "Furniture" },
		{ src: owlGarden, alt: "Garden" },
		{ src: owlCoffee, alt: "Coffee" },
	];

	return (
		<div id="introduction" className="grid-container">
			<div className="p-container">
				<h3>The Cottage</h3>
				<p className="intro-text">
					A traditional stone cottage built in 1868, Owl Cottage features a large, sociable
					kitchen/dining/living area with wood burner, master bedroom with king size bed, second
					bedroom with bunk beds, shower room, enclosed back garden, off-street parking and stunning
					views over the forest and mountains opposite.
				</p>
				<p>
					The well-equipped kitchen features a breakfast bar, dishwasher, electric range cooker,
					fridge, freezer, Nespresso machine and washer/dryer. Plenty of storage space and a wide
					range of kitchen equipment makes this great area if you choose to cook on your holiday.
				</p>
				<p>
					The enclosed garden is dog friendly. Enjoy the peace and quiet and spot the wildlife on
					the hill - including deer, best spotted at dusk or dawn.
				</p>
				<Button style="emphasis">Take a tour of Owl ➞</Button>
			</div>
			<Bento images={images} />
		</div>
	);
}
