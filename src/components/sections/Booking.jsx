import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../shared/Button";
import Fields from "../shared/Fields";
// import Form from "./Form";
import FormSection from "../shared/FormSection";
import Section from "../shared/Section";
import formFields from "../../data/formFields.json";
import "../../styles/sections/Booking.css";

export default function Booking() {
	const fields = formFields.booking;

	const [formData, setFormData] = useState(() =>
		Object.values(fields).reduce((data, fieldSection) => {
			return fieldSection.reduce((subData, field) => ({ ...subData, [field.inputName]: "" }), data);
		}, {})
	);

	const handleInput = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log("Booking submitted:", formData);
		// Send form data to back-end
		// Reset form fields
	};

	return (
		<Section sectionId={"booking"}>
			<form onSubmit={handleSubmit}>
				<FormSection heading="Make a booking enquiry">
					<Fields sectionFields={fields.dates} handleInput={handleInput} />
					<Fields sectionFields={fields.guestDetails} handleInput={handleInput} />
					<Link to="/terms-and-conditions">
						<Button style="normal">Terms and conditions</Button>
					</Link>
					<Button type="submit" style="emphasis">
						Submit booking request
					</Button>
					<hr />
					<p>
						For all other enquiries, please email <span>jane@owlcottages.com</span>.
					</p>
				</FormSection>
			</form>
		</Section>
	);
}
