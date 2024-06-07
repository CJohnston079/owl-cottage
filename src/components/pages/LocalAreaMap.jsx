import React, { useState } from "react";
import Section from "../shared/Section";
import "../../styles/pages/LocalAreaMap.css";

import lochNess from "../../assets/images/poi-loch-ness.jpg";
import isleOfSkye from "../../assets/images/poi-portree-isle-of-skye.jpeg";
import invergarryWoods from "../../assets/images/poi-invergarry-woods.jpg";
import bridgeOfOich from "../../assets/images/poi-bridge-of-oich.jpg";
import fallOfFoyers from "../../assets/images/poi-fall-of-foyers.jpg";
import fortAugustus from "../../assets/images/poi-fort-augustus.webp";

export default function LocalAreaMap() {
	const pointsOfInterest = [
		{ name: "Bridge of Oich", src: bridgeOfOich, alt: "Bridge of Oich" },
		{ name: "Fort Augustus", src: fortAugustus, alt: "Fort Augustus" },
		{ name: "Loch Ness", src: lochNess, alt: "Loch Ness" },
		{ name: "Alt na Calliche Trail", src: invergarryWoods, alt: "Invergarry Woods" },
		{ name: "Falls of Foyers", src: fallOfFoyers, alt: "Fall of Foyers" },
		{ name: "Isle of Skye", src: isleOfSkye, alt: "Portree, Isle of Skye" },
	];

	const [selectedPOI, setSelectedPOI] = useState(pointsOfInterest[0]);

	const handlePOIClick = poi => {
		setSelectedPOI(poi);
	};

	return (
		<Section sectionId="points-of-interest">
			<div className="grid-container">
				<figure className="img-with-caption">
					<img src={selectedPOI.src} alt={selectedPOI.alt} />
					<figcaption>
						<h3>{selectedPOI.name}</h3>
						<p>
							Loch Oich is just five minutes away. Not as well known as Loch Ness but a real hidden
							treasure. The Great Glen Way runs along the loch shore and its flat, level path here
							makes it highly accessible for walking and cycling. Very dog friendly with no nearby
							roads or livestock. Park at Bridge of Oich to access the loch.
						</p>
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
