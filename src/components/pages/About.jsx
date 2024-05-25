import Amenities from "../shared/Amenities";
import Introduction from "../shared/Introduction";
import Section from "../shared/Section";
import "../../styles/pages/About.css";

export default function About() {
	return (
		<Section sectionId="about">
			<Introduction />
			<Amenities />
		</Section>
	);
}
