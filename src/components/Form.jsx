import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Fields from "./Fields";
import "../styles/Form.css";

export default function Form({ fieldsData, children }) {
	const [formData, setFormData] = useState(
		fieldsData.reduce((data, field) => ({ ...data, [field.inputName]: "" }), {})
	);

	const handleInput = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// Send formData to back-end
	};

	return (
		<form onSubmit={handleSubmit}>
			<Fields sectionFields={fieldsData} handleInput={handleInput} />
			<div className="form-buttons">
				<Button type="submit" style="emphasis">
					Submit
				</Button>
				{children}
			</div>
		</form>
	);
}

Form.propTypes = {
	fieldsData: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.string,
			labelContent: PropTypes.string,
			inputName: PropTypes.string,
		})
	),
	children: PropTypes.node,
};
