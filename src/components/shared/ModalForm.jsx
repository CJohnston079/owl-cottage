import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Fields from "./Fields";
import "../../styles/shared/ModalForm.css";

export default function ModalForm({ fieldsData, handleClose }) {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [formData, setFormData] = useState(
		fieldsData.reduce((data, field) => ({ ...data, [field.inputName]: "" }), {})
	);

	const handleInput = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		setIsSubmitted(true);
		console.log("Form submitted:", formData);
		// Send formData to back-end
	};

	const fieldElements = (
		<>
			<Fields sectionFields={fieldsData} handleInput={handleInput} />
			<div className="form-buttons">
				<Button type="submit" style="emphasis">
					Submit
				</Button>
				<Button onClick={handleClose}>Close</Button>
			</div>
		</>
	);

	const submitMessage = (
		<>
			<p>Thank you!</p>
			<Button onClick={handleClose}>Close</Button>
		</>
	);

	return <form onSubmit={handleSubmit}>{isSubmitted ? submitMessage : fieldElements}</form>;
}

ModalForm.propTypes = {
	fieldsData: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.string,
			labelContent: PropTypes.string,
			inputName: PropTypes.string,
		})
	),
	handleClose: PropTypes.func,
};
