import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./Button";
import LabelledField from "./LabelledField";
import formFields from "../data/formFields.json";
import "../styles/Form.css";

export default function ModalForm({ closeForm }) {
	const [formData, setFormData] = useState({
		name: "",
		message: "",
	});

	const handleInput = event => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log("Form submitted:", formData);
		// Send formData to back-end
	};

	const fields = formFields.testimonials.map((field, index) => (
		<LabelledField
			key={index}
			type={field.type}
			labelContent={field.labelContent}
			inputName={field.inputName}
			value={formData[field.inputName]}
			handleInput={handleInput}
		/>
	));

	return (
		<form onSubmit={handleSubmit}>
			<ul className="section-fields">{fields}</ul>
			<div className="form-buttons">
				<Button type="submit" style="emphasis">
					Submit
				</Button>
				<Button onClick={closeForm}>Close</Button>
			</div>
		</form>
	);
}

ModalForm.propTypes = {
	closeForm: PropTypes.func,
};
