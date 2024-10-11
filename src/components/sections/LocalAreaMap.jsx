import Button from "../shared/Button";
import Card from "../shared/Card";
import CopyWithImg from "../shared/CopyWithImg";
import Section from "../shared/Section";
import "../../styles/sections/LocalAreaMap.css";

import doggies from "../../assets/images/points-of-interest/dog-friendly-restaurants.jpg";
import lochOich from "../../assets/images/points-of-interest/loch-oich.jpg";

export default function LocalAreaMap() {
	return (
		<Section sectionId="points-of-interest" heading="">
			<Card>
				<h3>Local Area Map</h3>
				<iframe
					className="map"
					src="https://snazzymaps.com/embed/611220"
					width="100%"
					height="600px"
					style={{ border: "none", borderRadius: "0.25rem" }}
				></iframe>
			</Card>
			<CopyWithImg imgSrc={doggies} alt="Harbour House pub" emphasis={true} reverse={true}>
				<h3>Dog friendly places to eat</h3>
				<p>
					The Highlands is very dog friendly and many restaurants and cafes allow dogs, either
					inside or out.
				</p>
				<p>
					Even if there is no dogs welcome sign it is often worth asking if you can bring your
					pooches with you. Some of our favourites nearby include:
				</p>
				<ul className="button-list">
					<li>
						<a target="_blank" href="https://www.visitinvernesslochness.com/listings/lock-inn">
							<Button style="emphasis">The Loch Inn, Fort Augustus ➞</Button>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://whitebridgehotel.co.uk/">
							<Button style="emphasis">The Whitebridge Hotel, Whitebridge ➞</Button>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://www.facebook.com/cobbscafe">
							<Button style="emphasis">Cobbs Café at the Canal, Fort Augustus ➞</Button>
						</a>
					</li>
				</ul>
			</CopyWithImg>
			<CopyWithImg imgSrc={lochOich} alt="Harbour House pub" emphasis={true} reverse={true}>
				<h3>Local walks</h3>
				<p>
					Whatever your level of fitness there are many fantastic walks within easy reach of the
					Cottage. Most are very dog friendly with few roads or livestock around.
				</p>
				<p>
					To find walks that suit you, we suggest looking at the{" "}
					<a
						className="external-link"
						style={{ textDecoration: "underline", color: "var(--cl-emphasis)" }}
						href="https://forestryandland.gov.scot"
						target="_blank"
					>
						{" "}
						Forestry and Land Scotland{" "}
					</a>
					and{" "}
					<a
						className="external-link"
						style={{ textDecoration: "underline", color: "var(--cl-emphasis)" }}
						href="https://www.walkhighlands.co.uk/"
						target="_blank"
					>
						Walk Highlands
					</a>{" "}
					websites.
				</p>
				<p>Some of our favourite walks include:</p>
				<ul className="button-list">
					<li>
						<a target="_blank" href="https://out.ac/IW3IHB">
							<Button style="emphasis">Loch Oich - Leitirfearn Trail ➞</Button>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://forestryandland.gov.scot/visit/glengarry">
							<Button style="emphasis">Glengarry - Allt na Cailliche Trail ➞</Button>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://forestryandland.gov.scot/visit/torr-dhuin">
							<Button style="emphasis">Fort Augustus - Torr Dhuin Trail ➞</Button>
						</a>
					</li>
				</ul>
			</CopyWithImg>
		</Section>
	);
}
