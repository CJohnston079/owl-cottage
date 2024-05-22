import PropTypes from "prop-types";
import "../../styles/shared/Section.css";

export default function Section({ sectionId, heading = sectionId, children }) {
	const sectionHeading = heading.replace("#", "").charAt(0).toUpperCase() + heading.slice(1);

	return (
		<section id={sectionId}>
			<h2>{sectionHeading}</h2>
			{children}
		</section>
	);
}

Section.propTypes = {
	sectionId: PropTypes.string,
	heading: PropTypes.string,
	children: PropTypes.node,
};
