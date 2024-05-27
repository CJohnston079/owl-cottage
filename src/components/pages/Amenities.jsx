import FeaturedAmenity from "../shared/FeaturedAmenity";
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
				<FeaturedAmenity
					iconSrc={bedIcon}
					heading="Two bedrooms, sleeps up to four guests"
					content="The cottage is furnished with one king-sized bed and one bunk bed. Please note that the top bunk bed is for those aged six and over and for a maximum of 60kg."
				/>
				<FeaturedAmenity
					iconSrc={mountainsIcon}
					heading="Amazing views of mountains & countryside"
					content="The view from the front looks out over forest to the Corbett Meall Dubh (Black Hill), the highest point of the moors between Glen Garry and Glen Moriston."
				/>
				<FeaturedAmenity
					iconSrc={dogIcon}
					heading="Dog-friendly furniture and enclosed garden"
					content="Dogs are very welcome here and can enjoy the enclosed garden and dog-friendly furniture while you relax in the spacious open-plan living area with log-burner."
				/>
			</div>
			<Modal buttonText="Full list of amenities ➞" heading="Amenities" showCloseButton={true}>
				{() => <AmenitiesList id="wee" />}
			</Modal>
		</Section>
	);
}
