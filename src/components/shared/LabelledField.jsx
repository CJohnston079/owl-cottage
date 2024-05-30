import PropTypes from "prop-types";
import Textarea from "./Textarea";
import "../../styles/shared/LabelledField.css";

export default function LabelledField({ type, labelContent, inputName, value, handleInput }) {
	const attributes = {
		className: "field-input",
		id: inputName,
		name: inputName,
		value: value,
		onChange: handleInput,
	};

	return (
		<li className="field">
			<label className="field-label" htmlFor={inputName}>
				{labelContent + ":"}
			</label>
			{type === "textarea" ? (
				<Textarea attributes={attributes} />
			) : (
				<input {...attributes} type={type} />
			)}
		</li>
	);
}

LabelledField.propTypes = {
	type: PropTypes.string,
	labelContent: PropTypes.string,
	inputName: PropTypes.string,
	value: PropTypes.string,
	handleInput: PropTypes.func,
};
