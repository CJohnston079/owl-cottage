import PropTypes from "prop-types";

export default function LabelledField({ type, labelContent, inputName, handleInput }) {
	return (
		<li className="field">
			<label className="field-label" htmlFor={inputName}>
				{labelContent}
			</label>
			<input
				className="field-input"
				type={type}
				id={inputName}
				name={inputName}
				value={inputName}
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
	handleInput: PropTypes.func,
};
