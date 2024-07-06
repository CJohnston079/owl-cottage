import { useState } from "react";
import Section from "../shared/Section";
import "../../styles/sections/LocalAreaMap.css";

import lochNess from "../../assets/images/locations/poi-loch-ness.jpg";
import isleOfSkye from "../../assets/images/locations/poi-portree-isle-of-skye.jpeg";
import invergarryWoods from "../../assets/images/locations/poi-invergarry-woods.jpg";
import bridgeOfOich from "../../assets/images/locations/poi-bridge-of-oich.jpg";
import fallOfFoyers from "../../assets/images/locations/poi-fall-of-foyers.jpg";
import fortAugustus from "../../assets/images/locations/poi-fort-augustus.webp";

export default function LocalAreaMap() {
	const pointsOfInterest = [
		{
			name: "Bridge of Oich",
			src: bridgeOfOich,
			alt: "Bridge of Oich",
			description: [
				"Loch Oich is just five minutes away. Not as well known as Loch Ness but a real hidden treasure. The Great Glen Way runs along the loch shore and its flat, level path here makes it highly accessible for walking and cycling. Very dog friendly with no nearby roads or livestock. Park at Bridge of Oich to access the loch.",
				"The Loch Oich circuit is a great walk that can be tackled in one or broken down into sections - the flat wide cycle path on the east of the loch is ideal for those seeking a more accessible walk.",
			],
		},
		{
			name: "Fort Augustus",
			src: fortAugustus,
			alt: "Fort Augustus",
			description: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus. Metus aliquam eleifend mi in nulla posuere sollicitudin.",
			],
		},
		{
			name: "Loch Ness",
			src: lochNess,
			alt: "Loch Ness",
			description: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus. Metus aliquam eleifend mi in nulla posuere sollicitudin.",
			],
		},
		{
			name: "Alt na Calliche Trail",
			src: invergarryWoods,
			alt: "Invergarry Woods",
			description: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus. Metus aliquam eleifend mi in nulla posuere sollicitudin.",
			],
		},
		{
			name: "Falls of Foyers",
			src: fallOfFoyers,
			alt: "Fall of Foyers",
			description: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus. Metus aliquam eleifend mi in nulla posuere sollicitudin.",
			],
		},
		{
			name: "Isle of Skye",
			src: isleOfSkye,
			alt: "Portree, Isle of Skye",
			description: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus. Metus aliquam eleifend mi in nulla posuere sollicitudin.",
			],
		},
	];

	const [selectedPOI, setSelectedPOI] = useState(pointsOfInterest[0]);

	const handlePOIClick = poi => {
		setSelectedPOI(poi);
	};

	const paragraphs = selectedPOI.description.map((description, i) => <p key={i}>{description}</p>);

	return (
		<Section sectionId="points-of-interest">
			<div className="map-container">
				<figure className="img-with-caption">
					<img src={selectedPOI.src} alt={selectedPOI.alt} />
					<figcaption>
						<h3>{selectedPOI.name}</h3>
						{paragraphs}
					</figcaption>
				</figure>
				<iframe
					className="map"
					src="https://snazzymaps.com/embed/611220"
					width="100%"
					height="600px"
					style={{ border: "none" }}
				></iframe>
			</div>
			<div className="poi-container">
				{pointsOfInterest.map(poi => (
					<button
						key={poi.name}
						className={`poi ${selectedPOI.name === poi.name ? "active" : ""}`}
						onClick={() => handlePOIClick(poi)}
					>
						{poi.name}
					</button>
				))}
			</div>
		</Section>
	);
}
