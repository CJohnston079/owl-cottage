import AccordionItem from "./AccordionItem";
import PropTypes from "prop-types";
import { useState } from "react";

export default function AccordionContainer({ children }) {
	const [activeItem, setActiveItem] = useState(null);

	const toggleHandler = index => {
		setActiveItem(prevIndex => (prevIndex === index ? null : index));
	};

	const accordionItems = children.map((child, index) => (
		<AccordionItem
			key={index}
			index={index}
			isActive={activeItem === index}
			toggleHandler={toggleHandler}
			heading={child.heading}
		>
			{child.content}
		</AccordionItem>
	));

	return <div className="accordion-container">{accordionItems}</div>;
}

AccordionContainer.propTypes = {
	children: PropTypes.array,
};
