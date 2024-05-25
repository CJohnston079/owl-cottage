import AccordionContainer from "./AccordionContainer";
import Amenity from "./Amenity";
import amenitiesData from "../../data/amenities.json";
import "../../styles/shared/AmenitiesList.css";

const amenitiesComponents = amenitiesData.map(amenityData => {
	return {
		heading: amenityData.heading,
		content: amenityData.content.map(amenity => {
			return <Amenity key={amenity.icon} icon={amenity.icon} content={amenity.description} />;
		}),
	};
});

export default function AmenitiesList() {
	return <AccordionContainer id="amenities-list" items={amenitiesComponents} />;
}
