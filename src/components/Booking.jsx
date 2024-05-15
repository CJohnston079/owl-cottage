import { useState } from "react";
import Button from "./Button";
import LabelledField from "./LabelledField";
import Section from "./Section";
import "../styles/Booking.css";

export default function Booking() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		guests: "",
		startDate: "",
		endDate: "",
	});

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
				<div className="form-section">
					<h3>1. Select dates</h3>
					<ul className="section-fields">
						<LabelledField
							type="date"
							labelContent="Check-in"
							inputName="startDate"
							value={startDate}
							handleInput={handleInput}
						/>
						<LabelledField
							type="date"
							labelContent="Checkout"
							inputName="endDate"
							value={endDate}
							handleInput={handleInput}
						/>
					</ul>
				</div>
				<div className="form-section">
					<h3>2. Your details</h3>
					<ul className="section-fields">
						<LabelledField
							type="text"
							labelContent="Full name"
							inputName="name"
							value={name}
							handleInput={handleInput}
						/>
						<LabelledField
							type="email"
							labelContent="Email address"
							inputName="email"
							value={email}
							handleInput={handleInput}
						/>
						<LabelledField
							type="number"
							labelContent="Number of guests"
							inputName="guests"
							value={guests}
							handleInput={handleInput}
						/>
					</ul>
				</div>
				<div className="form-section">
					<h3>3. Confirmation</h3>
					<p>{`Your booking for Owl Cottage is for ${
						guests || "guests not specified"
					} guests from ${startDate || "date not specified"} to ${
						endDate || "date not specified"
					}.`}</p>
					<p>{`Lead booker: ${name || "not specified"}`}</p>
					<p>{`Contact email address: ${email || "not specified"}`}</p>
					<Button type="submit" style="emphasis">
						Confirm booking
					</Button>
				</div>
			</form>
		</Section>
	);
}
