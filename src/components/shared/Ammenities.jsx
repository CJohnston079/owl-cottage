import Amenity from "./Amenity";
import "../../styles/shared/Amenities.css";

export default function Amenities() {
	return (
		<div id="amenities">
			<h3>test</h3>
			<Amenity icon="pet" content="Pets allowed" />
			<Amenity icon="calendar-plus" content="Long-term stays allowed" />
			<Amenity icon="key" content="Self check-in" />
			<Amenity icon="safe" content="Lockbox" />
		</div>
	);
}
