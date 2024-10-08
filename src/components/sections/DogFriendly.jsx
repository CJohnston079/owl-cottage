import CopyWithBento from "../shared/CopyWithBento";
import IconCard from "./amenities/IconCard";
import Section from "../shared/Section";
import "../../styles/sections/Amenities.css";

import dogIcon from "../../assets/icons/dog.png";
import bowlIcon from "../../assets/icons/bowl.png";
import petBedIcon from "../../assets/icons/pet-bed.png";
import blanketIcon from "../../assets/icons/blanket.png";
import fenceIcon from "../../assets/icons/fence.png";
import floorIcon from "../../assets/icons/floor.png";

import a1 from "../../assets/images/dogs/bella.jpg";
import a2 from "../../assets/images/dogs/dogs-on-sofa.jpg";
import b1 from "../../assets/images/dogs/finn.jpg";
import b2 from "../../assets/images/dogs/dogs-in-hallway.jpg";
import c1 from "../../assets/images/dogs/dogs-on-bed.jpg";
import c2 from "../../assets/images/dogs/tilly.jpg";

export default function DogFriendly() {
	const images = [
		{ src: a1, alt: "Bella" },
		{ src: a2, alt: "Tilly" },
		{ src: b1, alt: "Finn" },
		{ src: b2, alt: "Dogs in hallway" },
		{ src: c1, alt: "Dogs on bed" },
		{ src: c2, alt: "Dogs on sofa" },
	];

	const ftAmeneityData = [
		{ iconSrc: dogIcon, heading: "Dogs can access all areas" },
		{ iconSrc: blanketIcon, heading: "Blankets and throws to cover furniture" },
		{ iconSrc: petBedIcon, heading: "Comfy dog bed and large crate available" },
		{ iconSrc: bowlIcon, heading: "Dog bowls, treats and poo bags" },
		{ iconSrc: fenceIcon, heading: "Enclosed garden for doggies to run around" },
		{ iconSrc: floorIcon, heading: "Wooden floors throughout for muddy paws" },
	];

	const cardComponents = ftAmeneityData.map((data, i) => (
		<IconCard key={i} iconSrc={data.iconSrc} heading={data.heading} content={data.content} />
	));

	return (
		<Section sectionId="dogs-welcome">
			<CopyWithBento bentoImages={images}>
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
					the number of four-footed friends you can bring along. Extra charges? Not at Owl Cottage -{" "}
					<b>your pups stay for free</b>.
				</p>
			</CopyWithBento>
			<div className="icard-container">{cardComponents}</div>
		</Section>
	);
}
