import PropTypes from "prop-types";
import LabelledField from "./LabelledField";
import "../../styles/shared/Fields.css";

export default function Fields({ sectionFields, handleInput }) {
	const fields = sectionFields.map((field, index) => (
		<LabelledField
			key={index}
			type={field.type}
			labelContent={field.labelContent}
			inputName={field.inputName}
			value={sectionFields[field.inputName]}
			handleInput={handleInput}
		/>
	));

	return <ul className="section-fields">{fields}</ul>;
}

Fields.propTypes = {
	sectionFields: PropTypes.arrayOf(
		PropTypes.shape({
			labelContent: PropTypes.string,
			inputName: PropTypes.string,
			type: PropTypes.string,
		})
	),
	handleInput: PropTypes.func,
};
