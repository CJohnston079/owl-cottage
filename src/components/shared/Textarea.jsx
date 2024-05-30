import { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/shared/Textarea.css";

export default function Textarea({ attributes }) {
	const [charCount, setCharCount] = useState(0);

	const handleInputChange = event => {
		setCharCount(event.target.value.length);
	};

	return (
		<>
			<textarea onInput={handleInputChange} {...attributes}></textarea>
			<span className={`char-count ${charCount > 250 && "yellow"}`}>{`${charCount} / 250`}</span>
		</>
	);
}

Textarea.propTypes = {
	attributes: PropTypes.shape({
		type: PropTypes.string,
		labelContent: PropTypes.string,
		inputName: PropTypes.string,
		value: PropTypes.string,
		handleInput: PropTypes.func,
	}),
};
