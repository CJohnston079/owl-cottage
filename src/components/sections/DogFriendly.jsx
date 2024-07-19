import ContentWithBento from "../shared/ContentWithBento";
import FeaturedAmenity from "./amenities/FeaturedAmenity";
import Section from "../shared/Section";
import "../../styles/sections/Amenities.css";

import bedIcon from "../../assets/icons/bed.png";
import mountainsIcon from "../../assets/icons/mountains.png";
import dogIcon from "../../assets/icons/dog.png";

import bella from "../../assets/images/dogs/bella.jpg";
import tilly from "../../assets/images/dogs/tilly.jpg";
import finn from "../../assets/images/dogs/finn.jpg";
import dogsInHallway from "../../assets/images/dogs/dogs-in-hallway.jpg";
import dogsOnBed from "../../assets/images/dogs/dogs-on-bed.jpg";
import dogsOnSofa from "../../assets/images/dogs/dogs-on-sofa.jpg";

export default function DogFriendly() {
	const images = [
		{ src: bella, alt: "Bella" },
		{ src: tilly, alt: "Tilly" },
		{ src: finn, alt: "Finn" },
		{ src: dogsInHallway, alt: "Dogs in hallway" },
		{ src: dogsOnBed, alt: "Dogs on bed" },
		{ src: dogsOnSofa, alt: "Dogs on sofa" },
	];

	const ftAmeneityData = [
		{
			iconSrc: bedIcon,
			heading: "Two bedrooms, sleeps up to four guests",
			content:
				"The cottage is furnished with one king-sized bed and one bunk bed. Please note that the top bunk bed is for those aged six and over and for a maximum of 60kg.",
		},
		{
			iconSrc: mountainsIcon,
			heading: "Amazing views of mountains & countryside",
			content:
				"The view from the front looks out over forest to the Corbett Meall Dubh (Black Hill), the highest point of the moors between Glen Garry and Glen Moriston.",
		},
		{
			iconSrc: dogIcon,
			heading: "Dog-friendly furniture and enclosed garden",
			content:
				"Dogs are very welcome here and can enjoy the enclosed garden and dog-friendly furniture while you relax in the spacious open-plan living area with log-burner.",
		},
	];

	const ftAmenitiyComponents = ftAmeneityData.map((data, i) => (
		<FeaturedAmenity key={i} iconSrc={data.iconSrc} heading={data.heading} content={data.content} />
	));

	return (
		<Section sectionId="dog-friendly">
			<div className="amenities-container">{ftAmenitiyComponents}</div>
			<ContentWithBento bentoImages={images}>
				<p>
					<b>Doggy heaven for your furry best friends</b>
				</p>
				<p>
					Relax and enjoy your stay in our ultimate dog friendly retreat. We like to think that
					we&apos;re not just dog friendly, we&apos;re dog crazy!! We love dogs and think that they
					should have just as good a holiday as you do.
				</p>
				<p>
					Nowhere is out of bounds for your pooches at Owl Cottage. Your furry friends can snooze on
					the bed or sofa with you on our doggy throws, explore new sights and smells in the
					enclosed garden or spread out in front of the cozy log burner with a complimentary dog
					treat. And just as there&apos;s no limit to our love for dogs, there&apos;s no limit on
					the number of four-footed friends you can bring along. Extra charges? Not at Owl Cottage -
					your pups stay for free.
				</p>
				<ul>
					<li>Access all areas</li>
					<li>Blankets and throws to cover furniture</li>
					<li>Comfy dog bed</li>
					<li>Dog bowls, treats and poo bags</li>
					<li>Large dog crate available if required</li>
					<li>Enclosed garded</li>
					<li>Woodn floors throughout for muddy paws</li>
				</ul>
			</ContentWithBento>
		</Section>
	);
}
