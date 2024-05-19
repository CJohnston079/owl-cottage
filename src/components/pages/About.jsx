import Section from "../shared/Section";
import "../../styles/pages/About.css";

export default function About() {
	return (
		<Section sectionId="about">
			<div className="headlines">
				<figure className="headline">
					<img
						className="circular-img"
						src="./src/assets/images/owl-signpost.webp"
						alt="Urquhart Castle, Loch Ness"
					/>
					<figcaption>
						<h3>Traditional stone cottage</h3>
						<p>
							Built in 1868, Owl Cottage features a large, sociable kitchen/dining/living area with
							stunning views over the forest and mountains opposite.
						</p>
					</figcaption>
				</figure>
				<figure className="headline">
					<img
						className="circular-img"
						src="./src/assets/images/owl-coffee.webp"
						alt="Urquhart Castle, Loch Ness"
					/>
					<figcaption>
						<h3>Feels Like Home</h3>
						<p>
							The well-equipped kitchen features a breakfast bar, dishwasher, electric range cooker,
							fridge, freezer, Nespresso machine and washer/dryer.
						</p>
					</figcaption>
				</figure>
				<figure className="headline">
					<img
						className="circular-img"
						src="./src/assets/images/owl-furniture.jpeg"
						alt="Urquhart Castle, Loch Ness"
					/>
					<figcaption>
						<h3>Pets welcome</h3>
						<p>
							Dogs are very welcome here and can enjoy the enclosed garden and dog-friendly
							furniture while you relax in the spacious open-plan living area with log-burner.
						</p>
					</figcaption>
				</figure>
				<figure className="headline">
					<img
						className="circular-img"
						src="./src/assets/images/owl-garden.webp"
						alt="Urquhart Castle, Loch Ness"
					/>
					<figcaption>
						<h3>Enclosed garden</h3>
						<p>
							Enjoy the peace and quiet and spot the wildlife on the hill - including deer, best
							spotted at dusk or dawn.
						</p>
					</figcaption>
				</figure>
				<figure className="headline">
					<img
						className="circular-img"
						src="./src/assets/images/owl-bedroom.webp"
						alt="Urquhart Castle, Loch Ness"
					/>
					<figcaption>
						<h3>Spread out</h3>
						<p>
							The main bedroom features a king-size bed with comfortable mattress. Your dogs are
							welcome on the bed with lots of dog blankets provided.
						</p>
					</figcaption>
				</figure>
			</div>
			<h3>Amenities</h3>
			<div className="img-grid">
				<figure className="icon-with-caption">
					<img src="./src/assets/icons/bed.svg" alt="" />
					<figcaption>2 bedrooms</figcaption>
				</figure>
				<figure className="icon-with-caption">
					<img src="./src/assets/icons/pets.svg" alt="" />
					<figcaption>Pet friendly</figcaption>
				</figure>
				<figure className="icon-with-caption">
					<img src="./src/assets/icons/car.svg" alt="" />
					<figcaption>Driveway</figcaption>
				</figure>
				<figure className="icon-with-caption">
					<img src="./src/assets/icons/view.svg" alt="" />
					<figcaption>Mountain view</figcaption>
				</figure>
				<figure className="icon-with-caption">
					<img src="./src/assets/icons/wifi.svg" alt="" />
					<figcaption>Free wifi</figcaption>
				</figure>
				<figure className="icon-with-caption">
					<img src="./src/assets/icons/tv.svg" alt="" />
					<figcaption>55-inch TV with Netflix</figcaption>
				</figure>
			</div>
		</Section>
	);
}
