import Section from "../shared/Section";
import "../../styles/pages/LocalAreaMap.css";

import lochNess from "../../assets/images/loch-ness.jpeg";

export default function LocalAreaMap() {
	return (
		<Section sectionId="points-of-interest">
			<div className="grid-container">
				<div className="poi-container">
					<button className="poi">Loch Oich</button>
					<button className="poi">Loch Ness</button>
					<button className="poi">Fort Augustus</button>
					<button className="poi">Fort William</button>
					<button className="poi">Great Glen</button>
				</div>
				<figure className="img-with-caption">
					<img src={lochNess} alt="Urquhart Castle, Loch Ness" />
					<figcaption>
						<h3>Loch Ness</h3>
						<p>
							The world-famous Loch Ness is just three miles away. Pictured here is 13th Century
							Castle Urquhart.
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
		</Section>
	);
}
