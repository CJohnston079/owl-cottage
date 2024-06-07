import FlexContainer from "../shared/FlexContainer";
import Section from "../shared/Section";
import "../../styles/pages/LocalAreaMap.css";

import lochOich from "../../assets/images/loch-oich.webp";
import fortAugustus from "../../assets/images/fort-augustus.webp";
import lochNess from "../../assets/images/loch-ness.jpeg";

export default function LocalAreaMap() {
	return (
		<Section sectionId="local-area-map">
			<iframe
				className="map"
				src="https://snazzymaps.com/embed/611220"
				width="100%"
				height="600px"
				style={{ border: "none" }}
			></iframe>
			<FlexContainer>
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
				<figure className="img-with-caption">
					<img src={fortAugustus} alt="Fort Augustus, Inverness-shire" />
					<figcaption>
						<h3>Fort Augustus</h3>
						<p>
							Nearby Fort Augustus has a good range of local shops and attractions, cycle hire and
							boat trips on Loch Ness.
						</p>
					</figcaption>
				</figure>
				<figure className="img-with-caption">
					<img src={lochOich} alt="Loch Oich shore" />
					<figcaption>
						<h3>Loch Oich</h3>
						<p>
							Beautiful Loch Oich is just a five minute drive away - join the Great Glen Way here
							and enjoy some beautiful walks, an excellent cycle route, or even a wild swim for the
							brave.
						</p>
					</figcaption>
				</figure>
			</FlexContainer>
		</Section>
	);
}
