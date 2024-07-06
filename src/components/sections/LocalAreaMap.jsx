import { useState } from "react";
import Section from "../shared/Section";
import "../../styles/sections/LocalAreaMap.css";

import lochNess from "../../assets/images/locations/poi-loch-ness.jpg";
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
				"Fort Augustus offers spectacular views down Loch Ness and is a paradise for keen walkers and cyclists with many beautiful walks around the area, the most popular being the Great Glen Way.",
				"The Caledonian Canal from Bridge of Oich to Fort Augustus is another flat, accessible walk, suitable for walkers, cyclists and dogs. Follow the quiet footpath through beautiful forestry to reach the famous Fort Augustus Locks and the start of Loch Ness.",
				"You can hire cycles here, try a boat trip on the loch, or for the more adventurous, several companies offer kayaking, canoeing and white water adventures.",
			],
		},
		{
			name: "Loch Ness",
			src: lochNess,
			alt: "Loch Ness",
			description: [
				"The world-famous Loch Ness needs no introduction, and is just three miles away.",
			],
		},
		{
			name: "Alt na Calliche Trail",
			src: invergarryWoods,
			alt: "Invergarry Woods",
			description: [
				"Try this 4.7-km circular trail near Invergarry, Highlands. It is a well-marked Forestry Commission walk which follows a delightful stream up through the forest, passing an attractive waterfall. Generally considered a moderately challenging route, it takes an average of 1 h 24 min to complete. This is a popular trail for hiking, running, and walking, but you can still enjoy some solitude during quieter times of day.",
			],
		},
		{
			name: "Falls of Foyers",
			src: fallOfFoyers,
			alt: "Fall of Foyers",
			description: [
				"Take the B862 up the less travelled side of Loch Ness for stunning views and access to the wonderful Falls of Foyers and on to Dores.",
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
