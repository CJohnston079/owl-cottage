import Amenity from "./Amenity";
import "../../styles/shared/Amenities.css";

export default function Amenities() {
	return (
		<div id="amenities">
			<div>
				<h3>Scenic views</h3>
				<Amenity icon="landscape" content="Mountain view" />
			</div>
			<div>
				<h3>Bathroom</h3>
				<Amenity icon="hair-dryer" content="Hair dryer" />
				<Amenity icon="housekeeping" content="Cleaning produects" />
				<Amenity icon="dispenser" content="Soap and shower gel" />
				<Amenity icon="shower" content="Hot water" />
			</div>
			<div>
				<h3>Bedroom and laundry</h3>
				<Amenity icon="bed" content="1x king-sized bed" />
				<Amenity icon="bunk-bed" content="1x bunk bed" />
				<Amenity icon="washing-machine" content="Free washer - in unit" />
				<Amenity icon="tumble-dryer" content="Free dryer - in unit" />
				<Amenity icon="drawers" content="Bedroom storage" />
				<Amenity icon="towel" content="Towels" />
				<Amenity icon="toilet-paper" content="Toilet paper" />
				<Amenity icon="sheets" content="Bed linin" />
				<Amenity icon="hanger" content="Hangers" />
				<Amenity icon="pillow" content="Extra pillows" />
				<Amenity icon="iron" content="Iron" />
			</div>
			<div>
				<h3>Entertainment</h3>
				<Amenity icon="tv" content="55-inch HDTV" />
				<Amenity icon="cd" content="DVD player" />
				<Amenity icon="book" content="Books and reading material" />
			</div>
			<div>
				<h3>Entertainment</h3>
				<Amenity icon="rocking-horse" content="Children's books and toys" />
				<Amenity
					icon="high-chair"
					content="Standalone high chair with straps/harness and food tray"
				/>
				<Amenity icon="chess-board" content="Board games" />
				<Amenity icon="fire" content="Fireplace guards" />
			</div>
			<div>
				<h3>Heating and cooling</h3>
				<Amenity icon="burner" content="Indoor fireplace: wood burning" />
			</div>
			<div>
				<h3>Safety</h3>
				<Amenity icon="smoke-detector" content="Smoke alarm" />
				<Amenity
					icon="fire-alarm"
					content="Carbon monoxide alarm, located near the living room wood burner"
				/>
				<Amenity icon="fire-extinguisher" content="Fire extinguisher" />
			</div>
			<div>
				<h3>Kitchen and dining</h3>
				<Amenity icon="kitchen" content="Kitchen" />
				<Amenity icon="fridge" content="Fridge" />
				<Amenity icon="microwave" content="Microwave" />
				<Amenity icon="cooking-pot" content="Cooking basics" />
				<Amenity icon="tableware" content="Dishes and cutlery" />
				<Amenity icon="freezer" content="Freezer" />
				<Amenity icon="dishwasher" content="Dishwasher" />
				<Amenity icon="cooker" content="Oven with lectric hob" />
				<Amenity icon="kettle" content="Kettle" />
				<Amenity icon="coffee-machine" content="Nespresso coffee machine" />
				<Amenity icon="wine-glass" content="Wine glasses" />
				<Amenity icon="toaster" content="Toaster" />
				<Amenity icon="bread" content="Baking sheet" />
				<Amenity icon="table" content="Dining table" />
				<Amenity icon="coffee-beans" content="Coffee" />
			</div>
			<div>
				<h3>Outdoor</h3>
				<Amenity icon="oak-tree" content="Enclosed garden" />
				<Amenity icon="picnic-table" content="Outdoor dining area with furniture" />
			</div>
			<div>
				<h3>Services</h3>
				<Amenity icon="door-handle" content="Private entrance" />
				<Amenity icon="parking" content="Free parking on premesis - 1 space" />
				<Amenity icon="dog" content="Pets allowed" />
				<Amenity icon="calendar-plus" content="Long-term stays allowed" />
				<Amenity icon="key" content="Self check-in" />
				<Amenity icon="safe" content="Lockbox" />
			</div>
		</div>
	);
}
