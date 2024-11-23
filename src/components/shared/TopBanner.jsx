import "../../styles/shared/TopBanner.css";

export default function TopBanner() {
	return (
		<div id="top-banner">
			<div className="banner-contents">
				<p>
					<strong>Last minute deal:</strong> Four nights starting 2 December - £375
				</p>
				<p>
					<strong>Christmas in the Highlands:</strong> Five nights starting 22 December - £700
				</p>
			</div>
			<button className="btn" type="button">
				<a href="#booking">Make enquiry</a>
			</button>
		</div>
	);
}
