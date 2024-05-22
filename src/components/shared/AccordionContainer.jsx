import AccordionItem from "./AccordionItem";
import PropTypes from "prop-types";
import { useState } from "react";

export default function AccordionContainer({ id = "", items }) {
	const [activeItem, setActiveItem] = useState(null);

	const toggleHandler = index => {
		setActiveItem(prevIndex => (prevIndex === index ? null : index));
	};

	const accordionItems = items.map((item, index) => (
		<AccordionItem
			key={index}
			index={index}
			isActive={activeItem === index}
			toggleHandler={toggleHandler}
			heading={item.heading}
		>
			{item.content}
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
	items: PropTypes.arrayOf(
		PropTypes.shape({
			heading: PropTypes.string.isRequired,
			content: PropTypes.node.isRequired,
		})
	).isRequired,
};
