// import { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/shared/AccordionItem.css";

export default function AccordionItem({ heading, children, index, isActive, toggleHandler }) {
	return (
		<div className={`accordion-item ${isActive && "active"}`}>
			<header className="accordion-header" onClick={() => toggleHandler(index)}>
				<h4>{heading}</h4>
				<img className="accordion-button" src="./src/assets/icons/close.svg" alt="" />
			</header>
			<div className="accordion-content">{children}</div>
		</div>
	);
}

AccordionItem.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.node,
	index: PropTypes.number,
	isActive: PropTypes.bool,
	toggleHandler: PropTypes.func,
};
