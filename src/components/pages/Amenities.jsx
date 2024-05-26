import AmenitiesList from "../shared/AmenitiesList";
import Modal from "../shared/Modal";
import Section from "../shared/Section";
import "../../styles/shared/Amenities.css";

import bedIcon from "../../assets/bed.png";
import mountainsIcon from "../../assets/mountains.png";
import dogIcon from "../../assets/dog.png";

export default function Amenities() {
	return (
		<Section sectionId="amenities">
			<div className="amenities-container">
				<figure className="ft-amenity">
					<img className="ft-amenity-icon" src={bedIcon} alt="" />
					<hr />
					<figcaption className="ft-amenity-text-wrapper">
						<h4 className="ft-amenity-heading">Two bedrooms, sleeps up to four guests</h4>
						<p className="ft-amenity-description">
							The cottage is furnished with one king-sized bed and one bunk bed. Please note that
							the top bunk bed is for those aged six and over and for a maximum of 60kg.
						</p>
					</figcaption>
				</figure>
				<figure className="ft-amenity">
					<img className="ft-amenity-icon" src={mountainsIcon} alt="" />
					<hr />
					<figcaption className="ft-amenity-text-wrapper">
						<h4 className="ft-amenity-heading">Amazing views of mountains & countryside</h4>
						<p className="ft-amenity-description">
							The view from the front looks out over forest to the Corbett <i>Meall Dubh</i> (
							<i>Black Hill</i>), the highest point of the moors between Glen Garry and Glen
							Moriston.
						</p>
					</figcaption>
				</figure>
				<figure className="ft-amenity">
					<img className="ft-amenity-icon" src={dogIcon} alt="" />
					<hr />
					<figcaption className="ft-amenity-text-wrapper">
						<h4 className="ft-amenity-heading">Dog-friendly furniture and enclosed garden</h4>
						<p className="ft-amenity-description">
							Dogs are very welcome here and can enjoy the enclosed garden and dog-friendly
							furniture while you relax in the spacious open-plan living area with log-burner.
						</p>
					</figcaption>
				</figure>
			</div>
			<Modal buttonText="Full list of amenities ➞" heading="Amenities" showCloseButton={true}>
				{() => <AmenitiesList id="wee" />}
			</Modal>
		</Section>
	);
}
