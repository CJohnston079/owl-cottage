import AccordionItem from "./AccordionItem";
import PropTypes from "prop-types";
import { useState } from "react";

export default function AccordionContainer({ id = "", children }) {
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

	return (
		<div id={id} className="accordion-container">
			{accordionItems}
		</div>
	);
}

AccordionContainer.propTypes = {
	id: PropTypes.string,
	children: PropTypes.array,
};
