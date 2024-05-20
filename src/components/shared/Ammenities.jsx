import "../../styles/shared/Amenities.css";

export default function Amenities() {
	return (
		<div id="amenities">
			<div className="amenity">
				<img className="amenity-icon" src="./src/assets/icons/amenities/pet.png" alt="Pet icon" />
				<span className="amenity-text">Pets allowed</span>
			</div>
			<div className="amenity">
				<img
					className="amenity-icon"
					src="./src/assets/icons/amenities/calendar-plus.png"
					alt="Long-term stay icon"
				/>
				<span className="amenity-text">Long-term stays allowed</span>
			</div>
			<div className="amenity">
				<img
					className="amenity-icon"
					src="./src/assets/icons/amenities/key.png"
					alt="Self check-in icon"
				/>
				<span className="amenity-text">Self check-in</span>
			</div>
			<div className="amenity">
				<img
					className="amenity-icon"
					src="./src/assets/icons/amenities/safe-in.png"
					alt="Lockbox icon"
				/>
				<span className="amenity-text">Lockbox</span>
			</div>
		</div>
	);
}
