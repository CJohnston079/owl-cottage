import { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/shared/LabelledField.css";

export default function LabelledField({ type, labelContent, inputName, value, handleInput }) {
	const [charCount, setCharCount] = useState(0);

	const handleInputChange = event => {
		setCharCount(event.target.value.length);
	};

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
				<>
					<textarea onInput={handleInputChange} {...attributes}></textarea>
					<span className="char-count">{`${charCount} characters`}</span>
				</>
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
