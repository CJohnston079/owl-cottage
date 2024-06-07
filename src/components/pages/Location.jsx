import Bento from "../shared/Bento";
import Section from "../shared/Section";
import "../../styles/pages/Location.css";

import owlKitchen from "../../assets/images/owl-kitchen.webp";
import owlBedroom from "../../assets/images/owl-bedroom.webp";
import owlSignpost from "../../assets/images/owl-signpost.webp";
import owlFurniture from "../../assets/images/owl-furniture.webp";
import owlGarden from "../../assets/images/owl-garden.webp";
import owlCoffee from "../../assets/images/owl-coffee.webp";

export default function Location() {
	const images = [
		{ src: owlKitchen, alt: "Kitchen" },
		{ src: owlBedroom, alt: "Bedroom" },
		{ src: owlSignpost, alt: "Signpost" },
		{ src: owlFurniture, alt: "Furniture" },
		{ src: owlGarden, alt: "Garden" },
		{ src: owlCoffee, alt: "Coffee" },
	];

	return (
		<Section sectionId="location">
			<div className="grid-container">
				<div className="p-container">
					<p>
						Loch Oich is a real hidden treasure, and just a five mintue drive from the cottage. The
						Great Glen Way runs along the loch shore and its flat, level path here makes it highly
						accessible for walking and cycling. Very dog friendly with no nearby roads or livestock,
						and easy parking at Bridge of Oich to access the loch.
					</p>
					<p>
						The Caledonian Canal from Bridge of Oich to Fort Augustus is another flat, accessible
						walk, suitable for walkers, cyclists and dogs. Follow the quiet footpath through
						beautiful forestry to reach the famous Fort Augustus Locks and the start of Loch Ness.
					</p>
					<p>
						Here you can hire bicycles, have a boat trip on the loch, or for the more adventurous,
						several companies offer kayaking, canoeing and white water adventures.
					</p>
					<p>
						Many more wonderful walks are within easy reach - at all levels from short, flat paths
						to challenging Munros. And the ultimate challenge of Ben Nevis is just 40 minutes away.
					</p>
					<p>The Isle of Skye is an hour&apos;s drive west, and Inverness is an hour north.</p>
				</div>
				<Bento images={images} />
			</div>
		</Section>
	);
}
