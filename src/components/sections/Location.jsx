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
					<b>
						Set in the heart of the Great Glen, Owl Cottage is your perfect base to explore the
						highlands.
					</b>
				</p>
				<p>
					The Great Glen (<i>An Gleann Mòr</i>) cuts through the centre of the Scottish Highlands
					from Fort William in the south to Inverness in the north. It is an area of extraordinary
					natural beauty, filled with lochs and rivers, forests and mountains, and the famous
					Caledonian Canal.
				</p>
				<p>
					Owl Cottage occupies an ideal position right in the middle of the Glen, just south of the
					charming village of Fort Augustus and the world-famous Loch Ness. Fort William, Inverness
					and the Isle of Skye can all be reached in around an hour.
				</p>
				<p>
					Many wonderful walks are within easy reach - at all levels from short, flat paths to
					challenging Munros. And the ultimate challenge of Ben Nevis is just 40 minutes away.
				</p>
			</ContentWithBento>
		</Section>
	);
}
