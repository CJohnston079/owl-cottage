import AccordionContainer from "../shared/AccordionContainer";
import FaqAnswer from "../shared/FaqAnswer";
import Section from "../shared/Section";
import faqData from "../../data/faq.json";

export default function Faq() {
	const faqElements = faqData.map(data => {
		return { heading: data.q, content: <FaqAnswer answer={data.a} /> };
	});

	return (
		<Section sectionId="faq" heading="Frequently asked questions">
			<AccordionContainer items={faqElements}></AccordionContainer>
		</Section>
	);
}
