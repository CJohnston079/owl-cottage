import AccordionContainer from "./AccordionContainer";
import Amenity from "./Amenity";
import "../../styles/shared/Amenities.css";

export default function Amenities() {
	return (
		<AccordionContainer>
			{{
				heading: "Scenic",
				content: (
					<>
						<Amenity icon="landscape" content="Mountain view" />
					</>
				),
			}}
			{{
				heading: "Bathroom",
				content: (
					<>
						<Amenity icon="hair-dryer" content="Hair dryer" />
						<Amenity icon="housekeeping" content="Cleaning produects" />
						<Amenity icon="dispenser" content="Soap and shower gel" />
						<Amenity icon="shower" content="Hot water" />
					</>
				),
			}}
			{{
				heading: "Bedroom and laundry",
				content: (
					<>
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
						<Amenity icon="iron" content="Iron" />{" "}
					</>
				),
			}}
			{{
				heading: "Entertainment",
				content: (
					<>
						<Amenity icon="tv" content="55-inch HDTV" />
						<Amenity icon="cd" content="DVD player" />
						<Amenity icon="book" content="Books and reading material" />
					</>
				),
			}}
			{{
				heading: "Children and family",
				content: (
					<>
						<Amenity icon="rocking-horse" content="Children's books and toys" />
						<Amenity
							icon="high-chair"
							content="Standalone high chair with straps/harness and food tray"
						/>
						<Amenity icon="chess-board" content="Board games" />
						<Amenity icon="fire" content="Fireplace guards" />{" "}
					</>
				),
			}}
			{{
				heading: "Heating and cooling",
				content: (
					<>
						<Amenity icon="burner" content="Indoor fireplace: wood burning" />
					</>
				),
			}}
			{{
				heading: "Safety",
				content: (
					<>
						<Amenity icon="smoke-detector" content="Smoke alarm" />
						<Amenity
							icon="fire-alarm"
							content="Carbon monoxide alarm, located near the living room wood burner"
						/>
						<Amenity icon="fire-extinguisher" content="Fire extinguisher" />
					</>
				),
			}}
			{{
				heading: "Kitchen and dining",
				content: (
					<>
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
					</>
				),
			}}
			{{
				heading: "Outdoor",
				content: (
					<>
						<Amenity icon="oak-tree" content="Enclosed garden" />
						<Amenity icon="picnic-table" content="Outdoor dining area with furniture" />
					</>
				),
			}}
			{{
				heading: "Services",
				content: (
					<>
						<Amenity icon="door-handle" content="Private entrance" />
						<Amenity icon="parking" content="Free parking on premesis - 1 space" />
						<Amenity icon="dog" content="Pets allowed" />
						<Amenity icon="calendar-plus" content="Long-term stays allowed" />
						<Amenity icon="key" content="Self check-in" />
						<Amenity icon="safe" content="Lockbox" />{" "}
					</>
				),
			}}
		</AccordionContainer>
	);
}
