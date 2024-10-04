import ImgThumb from "../shared/ImgThumb";
import NavBar from "../nav/NavBar.jsx";
import Button from "../shared/Button.jsx";
import Footer from "../sections/Footer.jsx";
import { Link } from "react-router-dom";

import Section from "../shared/Section";
import "../../styles/pages/Tour.css";

import livingRoom1 from "../../assets/images/tour/living-room-1.jpg";
import livingRoom2 from "../../assets/images/tour/living-room-2.jpg";
import livingRoom3 from "../../assets/images/tour/living-room-3.jpg";
import livingRoom4 from "../../assets/images/tour/living-room-4.jpg";
import kitchen1 from "../../assets/images/tour/kitchen-1.jpg";
import kitchen2 from "../../assets/images/tour/kitchen-2.jpg";
import kitchen3 from "../../assets/images/tour/kitchen-3.jpg";
import kitchen4 from "../../assets/images/tour/kitchen-4.jpg";
import kitchen5 from "../../assets/images/tour/kitchen-5.jpg";
import kitchen6 from "../../assets/images/tour/kitchen-6.jpg";
import bedroomOne1 from "../../assets/images/tour/bedroom-one-1.jpg";
import bedroomOne2 from "../../assets/images/tour/bedroom-one-2.jpg";
import bedroomOne3 from "../../assets/images/tour/bedroom-one-3.jpg";
import bedroomOne4 from "../../assets/images/tour/bedroom-one-4.jpg";
import bedroomTwo1 from "../../assets/images/tour/bedroom-two-1.jpg";
import bedroomTwo2 from "../../assets/images/tour/bedroom-two-2.jpg";
import bedroomTwo3 from "../../assets/images/tour/bedroom-two-3.jpg";
import bedroomTwo4 from "../../assets/images/tour/bedroom-two-4.jpg";
import garden1 from "../../assets/images/tour/garden-1.jpg";
import garden2 from "../../assets/images/tour/garden-2.jpg";
import garden3 from "../../assets/images/tour/garden-3.jpg";
import garden4 from "../../assets/images/tour/garden-4.jpg";
import showerRoom1 from "../../assets/images/tour/shower-room-1.jpg";
import showerRoom2 from "../../assets/images/tour/shower-room-2.jpg";
import floorPlan from "../../assets/images/tour/floor-plan.jpg";

const livingRoomImages = [livingRoom1, livingRoom2, livingRoom3, livingRoom4];
const kitchenImages = [kitchen1, kitchen2, kitchen3, kitchen4, kitchen5, kitchen6];
const bedroomOneImages = [bedroomOne1, bedroomOne2, bedroomOne3, bedroomOne4];
const bedroomTwoImages = [bedroomTwo1, bedroomTwo2, bedroomTwo3, bedroomTwo4];
const bathroomImages = [showerRoom1, showerRoom2];
const exteriorImages = [garden1, garden2, garden3, garden4];
const floorPlanImages = [floorPlan];

export default function Tour() {
	const livingRoomPhotos = livingRoomImages.map((image, i) => (
		<ImgThumb key={i} imgSrc={image} alt={"Image"} />
	));
	const kitchenPhotos = kitchenImages.map((image, i) => (
		<ImgThumb key={i} imgSrc={image} alt={"Image"} />
	));
	const bedroomOnePhotos = bedroomOneImages.map((image, i) => (
		<ImgThumb key={i} imgSrc={image} alt={"Image"} />
	));
	const bedroomTwoPhotos = bedroomTwoImages.map((image, i) => (
		<ImgThumb key={i} imgSrc={image} alt={"Image"} />
	));
	const BathroomPhotos = bathroomImages.map((image, i) => (
		<ImgThumb key={i} imgSrc={image} alt={"Image"} />
	));
	const exteriorPhotos = exteriorImages.map((image, i) => (
		<ImgThumb key={i} imgSrc={image} alt={"Image"} />
	));
	const floorPlanPhotos = floorPlanImages.map((image, i) => (
		<ImgThumb key={i} imgSrc={image} alt={"Image"} />
	));

	return (
		<>
			<NavBar links={["living", "kitchen", "bedrooms", "bathrooms", "exterior"]}>
				<Link to="/">
					<Button style="emphasis">
						<span style={{ display: "inline-block", rotate: "180deg" }}>➞</span> Back
					</Button>
				</Link>
			</NavBar>
			<Section sectionId="living" heading="Living room">
				<div className="photos">{livingRoomPhotos}</div>
			</Section>
			<Section sectionId="kitchen" heading="Kitchen and dining area">
				<div className="photos">{kitchenPhotos}</div>
			</Section>
			<Section sectionId="bedrooms" heading="Bedroom One">
				<div className="photos">{bedroomOnePhotos}</div>
			</Section>
			<Section sectionId="bedrooms" heading="Bedroom Two">
				<div className="photos">{bedroomTwoPhotos}</div>
			</Section>
			<Section sectionId="bathrooms" heading="Shower room">
				<div className="photos">{BathroomPhotos}</div>
			</Section>
			<Section sectionId="exterior" heading="External">
				<div className="photos">{exteriorPhotos}</div>
			</Section>
			<Section sectionId="floor-plan" heading="Floor plan">
				<div className="photos">{floorPlanPhotos}</div>
			</Section>
			<Footer />
		</>
	);
}
