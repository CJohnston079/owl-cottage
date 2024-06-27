import ContentWithBento from "../shared/ContentWithBento";
import Section from "../shared/Section";
import "../../styles/sections/Location.css";

import lochNess from "../../assets/images/locations/poi-loch-ness.jpg";
import isleOfSkye from "../../assets/images/locations/poi-portree-isle-of-skye.jpeg";
import invergarryWoods from "../../assets/images/locations/poi-invergarry-woods.jpg";
import bridgeOfOich from "../../assets/images/locations/poi-bridge-of-oich.jpg";
import fallOfFoyers from "../../assets/images/locations/poi-fall-of-foyers.jpg";
import fortAugustus from "../../assets/images/locations/poi-fort-augustus.webp";

export default function Location() {
	const images = [
		{ src: bridgeOfOich, alt: "Bridge of Oich" },
		{ src: invergarryWoods, alt: "Invergarry Woods" },
		{ src: isleOfSkye, alt: "Portree, Isle of Skye" },
		{ src: fortAugustus, alt: "Fort Augustus" },
		{ src: fallOfFoyers, alt: "Fall of Foyers" },
		{ src: lochNess, alt: "Loch Ness" },
	];

	return (
		<Section sectionId="location">
			<ContentWithBento bentoImages={images}>
				<p>
					Loch Oich is a real hidden treasure, and just a five mintue drive from the cottage. The
					Great Glen Way runs along the loch shore and its flat, level path here makes it highly
					accessible for walking and cycling. Very dog friendly with no nearby roads or livestock,
					and easy parking at Bridge of Oich to access the loch.
				</p>
				<p>
					The Caledonian Canal from Bridge of Oich to Fort Augustus is another flat, accessible
					walk, suitable for walkers, cyclists and dogs. Follow the quiet footpath through beautiful
					forestry to reach the famous Fort Augustus Locks and the start of Loch Ness.
				</p>
				<p>
					Here you can hire bicycles, have a boat trip on the loch, or for the more adventurous,
					several companies offer kayaking, canoeing and white water adventures.
				</p>
				<p>
					Many more wonderful walks are within easy reach - at all levels from short, flat paths to
					challenging Munros. And the ultimate challenge of Ben Nevis is just 40 minutes away.
				</p>
				<p>The Isle of Skye is an hour&apos;s drive west, and Inverness is an hour north.</p>
			</ContentWithBento>
		</Section>
	);
}
