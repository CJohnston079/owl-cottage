import PropTypes from "prop-types";

export default function LabelledField({ type, labelContent, inputName, value, handleInput }) {
	return (
		<li className="field">
			<label className="field-label" htmlFor={inputName}>
				{labelContent + ":"}
			</label>
			<input
				className="field-input"
				type={type}
				id={inputName}
				name={inputName}
				value={value}
				onChange={handleInput}
				required
			/>
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
