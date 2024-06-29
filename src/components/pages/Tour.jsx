import { Link } from "react-router-dom";
import Button from "../shared/Button";
import ImgThumb from "../shared/ImgThumb";
import Section from "../shared/Section";
import "../../styles/pages/Tour.css";

import owl1 from "../../assets/images/cottage/Owl1.jpg";
import owl2 from "../../assets/images/cottage/Owl2.jpg";
import owl3 from "../../assets/images/cottage/Owl3.jpg";
import owl4 from "../../assets/images/cottage/Owl4.jpg";
import owl5 from "../../assets/images/cottage/Owl5.jpg";
import owl6 from "../../assets/images/cottage/Owl6.jpg";
import owl7 from "../../assets/images/cottage/Owl7.jpg";
import owl9 from "../../assets/images/cottage/Owl9.jpg";
import owl10 from "../../assets/images/cottage/Owl10.jpg";
import owl11 from "../../assets/images/cottage/Owl11.jpg";
import owl12 from "../../assets/images/cottage/Owl12.jpg";
import owl13 from "../../assets/images/cottage/Owl13.jpg";
import owl14 from "../../assets/images/cottage/Owl14.jpg";
import owl15 from "../../assets/images/cottage/Owl15.jpg";
import owl16 from "../../assets/images/cottage/Owl16.jpg";
import owl17 from "../../assets/images/cottage/Owl17.jpg";
import owl19 from "../../assets/images/cottage/Owl19.jpg";
import owl20 from "../../assets/images/cottage/Owl20.jpg";
import owl21 from "../../assets/images/cottage/Owl21.jpg";
import owl22 from "../../assets/images/cottage/Owl22.jpg";
import owl23 from "../../assets/images/cottage/Owl23.jpg";
import owl24 from "../../assets/images/cottage/Owl24.jpg";
import owl25 from "../../assets/images/cottage/Owl25.jpg";
import owl26 from "../../assets/images/cottage/Owl26.jpg";
import owl27 from "../../assets/images/cottage/Owl27.jpg";
import owl28 from "../../assets/images/cottage/Owl28.jpg";
import owl29 from "../../assets/images/cottage/Owl29.jpg";
import owl30 from "../../assets/images/cottage/Owl30.jpg";
import owl31 from "../../assets/images/cottage/Owl31.jpg";
import owl32 from "../../assets/images/cottage/Owl32.jpg";
import owl33 from "../../assets/images/cottage/Owl33.jpg";
import owl34 from "../../assets/images/cottage/Owl34.jpg";
import owl35 from "../../assets/images/cottage/Owl35.jpg";
import owl39 from "../../assets/images/cottage/Owl39.jpg";
import owl40 from "../../assets/images/cottage/Owl40.jpg";

const owlImages = [
	owl1,
	owl2,
	owl3,
	owl4,
	owl5,
	owl6,
	owl7,
	owl9,
	owl10,
	owl11,
	owl12,
	owl13,
	owl14,
	owl15,
	owl16,
	owl17,
	owl19,
	owl20,
	owl21,
	owl22,
	owl23,
	owl24,
	owl25,
	owl26,
	owl27,
	owl28,
	owl29,
	owl30,
	owl31,
	owl32,
	owl33,
	owl34,
	owl35,
	owl39,
	owl40,
];

export default function Tour() {
	const photos = owlImages.map((image, i) => <ImgThumb key={i} imgSrc={image} alt={"Image"} />);
	return (
		<Section sectionId="tour">
			<Link to="/">
				<Button style="emphasis">⭠ Back</Button>
			</Link>
			<div id="photos">{photos}</div>
		</Section>
	);
}
