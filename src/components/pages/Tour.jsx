import { Link } from "react-router-dom";
import Button from "../shared/Button";
import ImgThumb from "../shared/ImgThumb";
import Section from "../shared/Section";
import "../../styles/pages/Tour.css";

import exterior1 from "../../assets/images/cottage/Owl1.jpg";
import kitchen1 from "../../assets/images/cottage/Owl2.jpg";
import living1 from "../../assets/images/cottage/Owl3.jpg";
import bedroom1 from "../../assets/images/cottage/Owl4.jpg";
import exterior2 from "../../assets/images/cottage/Owl5.jpg";
import living2 from "../../assets/images/cottage/Owl6.jpg";
import living3 from "../../assets/images/cottage/Owl7.jpg";
import bedroom2 from "../../assets/images/cottage/Owl9.jpg";
import living4 from "../../assets/images/cottage/Owl10.jpg";
import kitchen2 from "../../assets/images/cottage/Owl11.jpg";
import kitchen3 from "../../assets/images/cottage/Owl12.jpg";
import kitchen4 from "../../assets/images/cottage/Owl13.jpg";
import kitchen5 from "../../assets/images/cottage/Owl14.jpg";
import kitchen6 from "../../assets/images/cottage/Owl15.jpg";
import kitchen7 from "../../assets/images/cottage/Owl16.jpg";
import kitchen8 from "../../assets/images/cottage/Owl17.jpg";
import kitchen9 from "../../assets/images/cottage/Owl19.jpg";
import kitchen10 from "../../assets/images/cottage/Owl20.jpg";
import bedroom3 from "../../assets/images/cottage/Owl21.jpg";
import bedroom4 from "../../assets/images/cottage/Owl22.jpg";
import bedroom5 from "../../assets/images/cottage/Owl23.jpg";
import bedroom6 from "../../assets/images/cottage/Owl24.jpg";
import bedroom7 from "../../assets/images/cottage/Owl25.jpg";
import bedroom8 from "../../assets/images/cottage/Owl26.jpg";
import bedroom9 from "../../assets/images/cottage/Owl27.jpg";
import bedroom10 from "../../assets/images/cottage/Owl28.jpg";
import bedroom11 from "../../assets/images/cottage/Owl29.jpg";
import bedroom12 from "../../assets/images/cottage/Owl30.jpg";
import bedroom13 from "../../assets/images/cottage/Owl31.jpg";
import bathroom1 from "../../assets/images/cottage/Owl32.jpg";
import bathroom2 from "../../assets/images/cottage/Owl33.jpg";
import exterior3 from "../../assets/images/cottage/Owl35.jpg";
import exterior4 from "../../assets/images/cottage/Owl39.jpg";
import exterior5 from "../../assets/images/cottage/Owl40.jpg";

const livingRoomImages = [living1, living3, living2, living4];
const kitchenImages = [
	kitchen4,
	kitchen1,
	kitchen3,
	kitchen2,
	kitchen5,
	kitchen6,
	kitchen8,
	kitchen9,
	kitchen7,
	kitchen10,
];
const bedroomImages = [
	bedroom1,
	bedroom3,
	bedroom4,
	bedroom5,
	bedroom9,
	bedroom7,
	bedroom6,
	bedroom8,
	bedroom11,
	bedroom10,
	bedroom12,
	bedroom13,
	bedroom2,
];
const bathroomImages = [bathroom1, bathroom2];
const exteriorImages = [exterior4, exterior1, exterior2, exterior5, exterior3];

export default function Tour() {
	const livingRoomPhotos = livingRoomImages.map((image, i) => (
		<ImgThumb key={i} imgSrc={image} alt={"Image"} />
	));
	const kitchenPhotos = kitchenImages.map((image, i) => (
		<ImgThumb key={i} imgSrc={image} alt={"Image"} />
	));
	const BedroomPhotos = bedroomImages.map((image, i) => (
		<ImgThumb key={i} imgSrc={image} alt={"Image"} />
	));
	const BathroomPhotos = bathroomImages.map((image, i) => (
		<ImgThumb key={i} imgSrc={image} alt={"Image"} />
	));
	const exteriorPhotos = exteriorImages.map((image, i) => (
		<ImgThumb key={i} imgSrc={image} alt={"Image"} />
	));

	return (
		<Section sectionId="">
			<Link className="back" to="/">
				<Button style="emphasis">⭠ Back</Button>
			</Link>
			<h2>Living room</h2>
			<div className="photos">{livingRoomPhotos}</div>
			<h2>Kitchen & dining area</h2>
			<div className="photos">{kitchenPhotos}</div>
			<h2>Bedrooms</h2>
			<div className="photos">{BedroomPhotos}</div>
			<h2>Bathrooms</h2>
			<div className="photos">{BathroomPhotos}</div>
			<h2>Extererior</h2>
			<div className="photos">{exteriorPhotos}</div>
		</Section>
	);
}
