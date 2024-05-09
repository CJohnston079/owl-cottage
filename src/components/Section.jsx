import PropTypes from "prop-types";

export default function Section({ sectionId, children }) {
	const sectionHeading = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);

	return (
		<section id={sectionId}>
			<h1>{sectionHeading}</h1>
			{children}
		</section>
	);
}

Section.propTypes = {
	sectionId: PropTypes.string,
	children: PropTypes.node,
};
