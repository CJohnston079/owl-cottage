import AccordionContainer from "../shared/AccordionContainer";
import Section from "../shared/Section";
import faqData from "../../data/faq.json";

export default function Faq() {
	const faqElements = faqData.map(data => {
		return { heading: data.q, content: data.a };
	});
	return (
		<Section sectionId="faq" heading="Frequently asked questions">
			<AccordionContainer items={faqElements}></AccordionContainer>
		</Section>
	);
}
