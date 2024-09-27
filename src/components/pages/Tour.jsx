import ImgThumb from "../shared/ImgThumb";
import NavBar from "../nav/NavBar.jsx";
import Button from "../shared/Button.jsx";
import Footer from "../sections/Footer.jsx";
import { Link } from "react-router-dom";

import Section from "../shared/Section";
import "../../styles/pages/Tour.css";

import livingRoomFireplace from "../../assets/images/cottage/living-fireplace.jpg";
import livingRoomLookingAtKitchen from "../../assets/images/cottage/living-room-looking-at-kitchen.jpg";
import livingRoomTelevision from "../../assets/images/cottage/living-room-television.jpg";
import livingRoom from "../../assets/images/cottage/living-room.jpg";
import kitchen from "../../assets/images/cottage/kitchen.jpg";
import kitchenCabinets from "../../assets/images/cottage/kitchen-cabinets.jpg";
import kitchenCookingArea from "../../assets/images/cottage/kitchen-cooking-area.jpg";
import kitchenDiningArea from "../../assets/images/cottage/kitchen-dining-area.jpg";
import diningKitchen from "../../assets/images/cottage/dining-kitchen.jpg";
import diningLivingArea from "../../assets/images/cottage/dining-living-area.jpg";
import diningTable from "../../assets/images/cottage/dining-table.jpg";
import kitchenPots from "../../assets/images/cottage/kitchen-pots.jpg";
import kitchenCoffee from "../../assets/images/cottage/kitchen-coffee.jpg";
import kitchenDogBowls from "../../assets/images/cottage/kitchen-dog-bowls.jpg";
import bedroomOne from "../../assets/images/cottage/bedroom-one.jpg";
import bedroomOneBed from "../../assets/images/cottage/bedroom-one-bed.jpg";
import bedroomOneTowelsOnBed from "../../assets/images/cottage/bedroom-one-towels-on-bed.jpg";
import bedroomOnePillows from "../../assets/images/cottage/bedroom-one-pillows.jpg";
import bedroomOnePillowCushions from "../../assets/images/cottage/bedroom-one-pillow-cushions.jpg";
import bedroomOneDrawers from "../../assets/images/cottage/bedroom-one-drawers.jpg";
import bedroomOneDrawersAndMirror from "../../assets/images/cottage/bedroom-one-drawers-and-mirror.jpg";
import bedroomTwo from "../../assets/images/cottage/bedroom-two.jpg";
import bedroomTwoShelves from "../../assets/images/cottage/bedroom-two-shelves.jpg";
import bedroomTwoBunkBed from "../../assets/images/cottage/bedroom-two-bunk-bed.jpg";
import bedroomTwoBedWarningSign from "../../assets/images/cottage/bedroom-two-bed-warning-sign.jpg";
import bedroomWindow from "../../assets/images/cottage/bedroom-window.jpg";
import bathroom from "../../assets/images/cottage/bathroom.jpg";
import bathroomShower from "../../assets/images/cottage/bathroom-shower.jpg";
import exteriorSign from "../../assets/images/cottage/exterior-sign.jpg";
import exteriorFront from "../../assets/images/cottage/exterior-front.jpg";
import exteriorFrontView from "../../assets/images/cottage/exterior-front-view.jpg";
import exteriorDrivewayView from "../../assets/images/cottage/exterior-driveway-view.jpg";
import exteriorDogInGarden from "../../assets/images/cottage/exterior-dog-in-garden.webp";

const livingRoomImages = [
	livingRoomFireplace,
	livingRoomTelevision,
	livingRoomLookingAtKitchen,
	livingRoom,
];
const kitchenImages = [
	kitchenDiningArea,
	kitchen,
	kitchenCookingArea,
	kitchenCabinets,
	diningKitchen,
	diningLivingArea,
	kitchenPots,
	kitchenCoffee,
	diningTable,
	kitchenDogBowls,
];
const bedroomImages = [
	bedroomOneBed,
	bedroomOneDrawers,
	bedroomOnePillowCushions,
	bedroomOnePillows,
	bedroomTwoBunkBed,
	bedroomTwoBedWarningSign,
	bedroomOne,
	bedroomTwo,
	bedroomWindow,
	bedroomTwoShelves,
	bedroomOneTowelsOnBed,
	bedroomOneDrawersAndMirror,
];
const bathroomImages = [bathroom, bathroomShower];
const exteriorImages = [
	exteriorSign,
	exteriorFront,
	exteriorFrontView,
	exteriorDrivewayView,
	exteriorDogInGarden,
];

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
			<Section sectionId="bedrooms" heading="Bedrooms">
				<div className="photos">{BedroomPhotos}</div>
			</Section>
			<Section sectionId="bathrooms" heading="Bathrooms">
				<div className="photos">{BathroomPhotos}</div>
			</Section>
			<Section sectionId="exterior" heading="Exterior">
				<div className="photos">{exteriorPhotos}</div>
			</Section>
			<Footer />
		</>
	);
}
