import { useEffect } from "react";
import Card from "../shared/Card";
import Section from "../shared/Section";
import "../../styles/sections/Booking.css";

export default function Booking() {
	useEffect(() => {
		const script = document.createElement("script");

		script.src = "https://www.airbnb.co.uk/embeddable/airbnb_jssdk";
		script.async = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<Section sectionId={"booking"}>
			<div className="booking-main">
				<Card>
					<div className="paragraphs">
						<p>For all bookings and price enquiries, please visit our Airbnb page.</p>
						<p>
							We are proud to be a <strong>Guest Favourite</strong> on Airbnb, with an average
							rating of 4.9 from over 100 reviewers.
						</p>
						<p>Minimum stay 3 nights in Winter Season; 4 nights at all other times.</p>
						<a className="booking-terms" href="/terms-and-conditions">
							Terms and conditions
						</a>
					</div>
					<div
						className="airbnb-embed-frame"
						data-id="50967455"
						data-view="home"
						data-hide-price="true"
						style={{ width: "100%", height: "300px", margin: "auto" }}
					>
						<a href="https://www.airbnb.co.uk/rooms/50967455?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">
							View on Airbnb
						</a>
						<a
							href="https://www.airbnb.co.uk/rooms/50967455?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget"
							rel="nofollow"
						>
							Cottage in Highland Council · ★4.94 · 2 bedrooms · 3 beds · 1 bathroom
						</a>
					</div>
				</Card>
			</div>
		</Section>
	);
}
