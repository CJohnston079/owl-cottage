import { useState } from "react";
import Button from "./Button";
import Fields from "./Fields";
// import Form from "./Form";
import FormSection from "./FormSection";
import Section from "./Section";
import formFields from "../data/formFields.json";
import "../styles/Booking.css";

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

	const { name, email, guests, startDate, endDate } = formData;

	return (
		<Section sectionId={"booking"}>
			<form onSubmit={handleSubmit}>
				<FormSection heading="1. Select dates">
					<Fields sectionFields={fields.dates} handleInput={handleInput} />
				</FormSection>
				<FormSection heading="2. Your details">
					<Fields sectionFields={fields.guestDetails} handleInput={handleInput} />
				</FormSection>
				<FormSection heading="3. Confirmation">
					<p>{`Your stay for Owl Cottage is booked for ${guests || "not specified"} guests from ${
						startDate || "date not specified"
					} to ${endDate || "date not specified"}.`}</p>
					<p>{`Lead booker: ${name || "not specified"}`}</p>
					<p>{`Contact email address: ${email || "not specified"}`}</p>
					<Button type="submit" style="emphasis">
						Confirm booking
					</Button>
				</FormSection>
			</form>
		</Section>
	);
}
