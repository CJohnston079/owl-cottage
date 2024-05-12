import FlexContainer from "./FlexContainer";
import Paragraphs from "./Paragraphs";
import Section from "./Section";
import copy from "../data/copy.json";
import "../styles/Location.css";

export default function Location() {
	return (
		<Section sectionId="location">
			<Paragraphs paragraphs={copy.location} />
			<h2>Points of interest</h2>
			<FlexContainer>
				<figure className="img-with-caption">
					<img src="./src/assets/images/loch-ness.jpeg" alt="Urquhart Castle, Loch Ness" />
					<figcaption>
						<h3>Loch Ness</h3>
						<p>
							The world-famous Loch Ness is just three miles away. Pictured here is 13th Century
							Castle Urquhart.
						</p>
					</figcaption>
				</figure>
				<figure className="img-with-caption">
					<img src="./src/assets/images/fort-augustus.webp" alt="Fort Augustus, Inverness-shire" />
					<figcaption>
						<h3>Fort Augustus</h3>
						<p>
							Nearby Fort Augustus has a good range of local shops and attractions, cycle hire and
							boat trips on Loch Ness.
						</p>
					</figcaption>
				</figure>
				<figure className="img-with-caption">
					<img src="./src/assets/images/loch-oich.webp" alt="Loch Oich shore" />
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
