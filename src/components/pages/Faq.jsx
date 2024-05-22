import AccordionContainer from "../shared/AccordionContainer";
import Section from "../shared/Section";

export default function Faq() {
	return (
		<Section sectionId="faq">
			<AccordionContainer items={[{ heading: "question", content: "answer" }]}></AccordionContainer>
		</Section>
	);
}
