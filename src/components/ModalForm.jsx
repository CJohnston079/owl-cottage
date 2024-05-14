import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./Button";
import "../styles/Form.css";

export default function ModalForm({ closeForm }) {
	const [formData, setFormData] = useState({
		name: "",
		message: "",
	});

	const handleChange = event => {
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
			<ul>
				<li className="form-field">
					<label className="field-label" htmlFor="name">
						Name:
					</label>
					<input
						className="field-input"
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</li>
				<li className="form-field">
					<label className="field-label" htmlFor="message">
						Message:
					</label>
					<textarea
						className="field-input"
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
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
