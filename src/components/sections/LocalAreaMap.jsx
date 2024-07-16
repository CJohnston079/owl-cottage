import { useState } from "react";
import Section from "../shared/Section";
import "../../styles/sections/LocalAreaMap.css";

import lochOich from "../../assets/images/points-of-interest/loch-oich.jpg";
import fortAugustus from "../../assets/images/points-of-interest/fort-augustus.jpg";
import lochNess from "../../assets/images/points-of-interest/loch-ness.jpg";
import caledonianCanal from "../../assets/images/points-of-interest/caledonian-canal.jpg";
import fallsOfFoyers from "../../assets/images/points-of-interest/falls-of-foyers.jpg";
import invermoriston from "../../assets/images/points-of-interest/invermoriston.jpg";
import dundreggan from "../../assets/images/points-of-interest/dundreggan.jpg";

export default function LocalAreaMap() {
	const pointsOfInterest = [
		{
			name: "Loch Oich",
			src: lochOich,
			alt: "Loch Oich",
			description: [
				"Loch Oich is just five minutes away. Not as well known as Loch Ness but a real hidden treasure. The Great Glen Way runs along the loch shore and its flat, level path here makes it highly accessible for walking and cycling. This is a very dog friendly route with no nearby roads or livestock. Park at Bridge of Oich to start your walk along the loch or up the Caledonian Canal. Stop to admire the magnificent Victorian suspension bridge.",
			],
		},
		{
			name: "Fort Augustus",
			src: fortAugustus,
			alt: "Fort Augustus",
			description: [
				"Fort Augustus offers spectacular views down Loch Ness and is a paradise for keen walkers and cyclists with many beautiful walks around the area, the most popular being the Great Glen Way. This is the home of the famous Fort Augustus Locks and the start of Loch Ness. On a summer’s day you can enjoy the spectacle of boats making their way through the dramatic series of five locks that step down to Loch Ness. There are some excellent shops and eateries in the village and a range of attractions including the Caledonian Canal Centre, Clansman Centre and a glass-blowing workshop. You can hire cycles here, try a boat trip on the loch, or for the more adventurous, several companies offer kayaking, canoeing and white water adventures.",
			],
		},
		{
			name: "Loch Ness",
			src: lochNess,
			alt: "Loch Ness",
			description: [
				"Loch Ness is renowned worldwide for its breathtaking natural beauty and legendary folklore. Stretching for 36km and reaching depths of over 240m, it is the largest and second deepest freshwater loch in Scotland. Explore its serene shores to capture stunning vistas, discover charming villages like Drumnadrochit, Glenmoriston and Foyers, and delve into the mystery of the elusive Nessie, the Loch Ness Monster. There are ample opportunities for hiking, boating, and wildlife spotting. The surrounding landscape, dotted with ancient castles and lush forests, invites exploration and adventure. If you’re feeling brave, the Loch Ness 360 outdoor activity trail loops for 120km around the whole circumference of the loch.",
			],
		},
		{
			name: "The Caledonian Canal",
			src: caledonianCanal,
			alt: "The Caledonian Canal",
			description: [
				"This marvel of engineering stretches nearly 100km from Inverness to Fort William. Built by Thomas Telford in the early 19th century, it connects a series of picturesque lochs, including Loch Ness. Enjoy scenic boat trips, cycling, and walking along the towpaths, taking in breathtaking landscapes and historical sites. The canal offers a serene escape into nature, with opportunities for wildlife spotting and photography.",
			],
		},
		{
			name: "Falls of Foyers",
			src: fallsOfFoyers,
			alt: "Falls of Foyers",
			description: [
				"The Falls of Foyers is a stunning waterfall cascading into a deep gorge near Loch Ness. This spectacular natural attraction, with a drop of 50m, inspired poets like Robert Burns. Enjoy scenic walks through lush woodlands, offering breathtaking views of the falls, the loch and the surrounding landscape. The trails are well-marked and suitable for dogs and children. In the village of Foyers the charming Waterfall Café has delicious cakes and tables outside for dogs. Or just outside the village Camerons Tearooms is dog friendly inside and out, and has deer and Highland Cows to view.",
			],
		},
		{
			name: "Invermoriston",
			src: invermoriston,
			alt: "Invermoriston",
			description: [
				"Invermoriston, the next village after Fort Augustus, is nestled on the banks of the River Moriston near Loch Ness. Famous for its picturesque Thomas Telford Bridge which crosses the spectacular River Moriston falls, it offers scenic walks and stunning views. The delightful Glen Rowan Café is dog friendly with beautiful views across the glen.",
			],
		},
		{
			name: "Dundreggan Rewilding Centre",
			src: dundreggan,
			alt: "Dundreggan Rewilding Centre",
			description: [
				"A pioneering conservation project dedicated to restoring the native Caledonian Forest, the centre offers a unique opportunity to engage with rewilding efforts. Explore ancient pinewood, experience rewilding in action, discover centuries of Gaelic culture and immerse yourself in nature with fun activities for the whole family. The centre features hands-on activities, such as tree planting and habitat restoration, allowing visitors to contribute to conservation. A must-visit for nature enthusiasts and anyone interested in environmental sustainability and the revival of Scotland’s wild heritage, the Rewilding Centre is free to enter and dog-friendly.",
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
		</Section>
	);
}
