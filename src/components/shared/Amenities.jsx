import AmenitiesList from "./AmenitiesList";
import Modal from "../shared/Modal";
import "../../styles/shared/Amenities.css";

export default function Amenities() {
	return (
		<div id="amenities">
			<h3>Amenities</h3>
			<div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
				<figure className="icon-with-caption">
					<img src="./src/assets/bed.png" alt="" />
					<figcaption>
						<h4>2 bedrooms, sleeps up to four guests</h4>
						<p>
							The cottage is furnished with one king-sized bed and one bunk bed. Please note that
							the top bunk bed is for those aged six and over and for a maximum of 60kg.
						</p>
					</figcaption>
				</figure>
				<figure className="icon-with-caption">
					<img src="./src/assets/mountains.png" alt="" />
					<figcaption>
						<h4>Amazing views of mountains & countryside</h4>
						<p>
							The view from the front looks out over forest to the Corbett <i>Meall Dubh</i> (
							<i>Black Hill</i>), the highest point of the moors between Glen Garry and Glen
							Moriston.
						</p>
					</figcaption>
				</figure>
				<figure className="icon-with-caption">
					<img src="./src/assets/dog.png" alt="" />
					<figcaption>
						<h4>Dog-friendly, includng furniture and enclosed garden</h4>
						<p>
							Dogs are very welcome here and can enjoy the enclosed garden and dog-friendly
							furniture while you relax in the spacious open-plan living area with log-burner.
						</p>
					</figcaption>
				</figure>
			</div>
			<Modal buttonText="Full list of amenities ➞" heading="Amenities" showCloseButton={true}>
				{() => <AmenitiesList id="wee" />}
			</Modal>
		</div>
	);
}
