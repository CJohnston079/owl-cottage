import { Link } from "react-router-dom";

import Button from "../shared/Button";
import Card from "../shared/Card";
import Section from "../shared/Section";
import Tariff from "../shared/Tariff";
import "../../styles/sections/Booking.css";

export default function Booking() {
	return (
		<Section sectionId={"booking"}>
			<div className="booking-main">
				<Card>
					<h3>Tariffs</h3>
					<Tariff />
					<Link to="/terms-and-conditions">
						<Button style="normal">Terms and conditions</Button>
					</Link>
					<p>
						For all booking enquiries, please email{" "}
						<a className="email-link" href="mailto:jane@owlcottages.co.uk">
							jane@owlcottages.co.uk
						</a>
						.
					</p>
				</Card>
			</div>
		</Section>
	);
}
