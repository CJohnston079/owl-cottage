import PropTypes from "prop-types";
import chevronIcon from "../../assets/icons/chevron.png";
import "../../styles/shared/AccordionItem.css";

export default function AccordionItem({ heading, children, index, isActive, toggleHandler }) {
	return (
		<div className={`accordion-item ${isActive && "active"}`}>
			<header className="accordion-header" onClick={() => toggleHandler(index)}>
				<img
					className="accordion-button"
					src={chevronIcon}
					alt={isActive ? "Close section" : "Open section"}
				/>
				<h4>{heading}</h4>
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
