import Paragraphs from "../shared/Paragraphs";
import Section from "../shared/Section";
import copy from "../../data/copy.json";
import "../../styles/pages/Location.css";

export default function Location() {
	return (
		<Section sectionId="location">
			<Paragraphs paragraphs={copy.location} />
		</Section>
	);
}
