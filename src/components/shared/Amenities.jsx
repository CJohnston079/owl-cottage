import AccordionContainer from "./AccordionContainer";
import Amenity from "./Amenity";
import amenitiesData from "../../data/amenities.json";
import "../../styles/shared/Amenities.css";

const amenitiesComponents = amenitiesData.map(amenityData => {
	return {
		heading: amenityData.heading,
		content: amenityData.content.map(amenity => {
			return <Amenity key={amenity.icon} icon={amenity.icon} content={amenity.description} />;
		}),
	};
});

export default function Amenities() {
	return <AccordionContainer id="amenities" items={amenitiesComponents} />;
}
