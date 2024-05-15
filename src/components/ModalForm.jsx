import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./Button";
import LabelledField from "./LabelledField";
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

	return (
		<form onSubmit={handleSubmit}>
			<ul className="section-fields">
				<LabelledField
					type="text"
					labelContent="Full name"
					inputName="name"
					value={name}
					handleInput={handleInput}
				/>
				<li className="form-field">
					<label className="field-label" htmlFor="message">
						Message:
					</label>
					<textarea
						className="field-input"
						id="message"
						name="message"
						value={formData.message}
						onChange={handleInput}
						required
					></textarea>
				</li>
			</ul>
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
