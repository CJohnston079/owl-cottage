import { useState } from "react";
import Button from "./Button";
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
						<li className="field">
							<label className="field-label" htmlFor="startDate">
								Start date:
							</label>
							<input
								className="field-input"
								type="date"
								id="startDate"
								name="startDate"
								value={startDate}
								onChange={handleInput}
								placeholder="dfdf"
								required
							/>
						</li>
						<li className="field">
							<label className="field-label" htmlFor="endDate">
								End date:
							</label>
							<input
								className="field-input"
								type="date"
								id="endDate"
								name="endDate"
								value={endDate}
								onChange={handleInput}
								required
							/>
						</li>
					</ul>
				</div>
				<div className="form-section">
					<h3>2. Your details</h3>
					<ul className="section-fields">
						<li className="field">
							<label className="field-label" htmlFor="name">
								Full name:
							</label>
							<input
								className="field-input"
								type="text"
								id="name"
								name="name"
								value={name}
								onChange={handleInput}
								required
							/>
						</li>
						<li className="field">
							<label className="field-label" htmlFor="email">
								Email:
							</label>
							<input
								className="field-input"
								type="email"
								id="email"
								name="email"
								value={email}
								onChange={handleInput}
								required
							/>
						</li>
						<li className="field">
							<label className="field-label" htmlFor="guests">
								Guests
							</label>
							<input
								className="field-input"
								type="number"
								id="guests"
								name="guests"
								max={4}
								value={guests}
								onChange={handleInput}
								required
							/>
						</li>
					</ul>
				</div>
				<div className="form-section">
					<h3>3. Confirm reservation</h3>
					<ul className="section-fields">
						<li>Name: {name}</li>
						<li>Email: {email}</li>
						<li>Guests: {guests}</li>
						<li>Start date: {startDate}</li>
						<li>End date: {endDate}</li>
					</ul>
					<Button type="submit" style="emphasis">
						Confirm booking
					</Button>
				</div>
			</form>
		</Section>
	);
}
