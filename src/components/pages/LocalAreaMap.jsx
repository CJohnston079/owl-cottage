import Section from "../shared/Section";
import "../../styles/pages/LocalAreaMap.css";

import lochOich from "../../assets/images/loch-oich.webp";

export default function LocalAreaMap() {
	return (
		<Section sectionId="points-of-interest">
			<div className="grid-container">
				<figure className="img-with-caption">
					<img src={lochOich} alt="Urquhart Castle, Loch Ness" />
					<figcaption>
						<h3>Bridge of Oich</h3>
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
				<button className="poi active">Bridge of Oich</button>
				<button className="poi">Fort Augustus</button>
				<button className="poi">Loch Ness</button>
				<button className="poi">Alt na Calliche Trail</button>
				<button className="poi">Falls of Foyers</button>
				<button className="poi">Isle of Skye</button>
			</div>
		</Section>
	);
}
