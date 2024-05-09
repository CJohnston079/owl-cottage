import NavBar from "./NavBar.jsx";
import Hero from "./Hero.jsx";
import Section from "./Section.jsx";
import copy from "../data/copy.json";
import "../styles/App.css";

function App() {
	return (
		<>
			<NavBar />
			<Hero />
			<Section sectionId="about">
				<div className="p-container">
					<p>
						A traditional stone cottage built in 1868, Owl Cottage features a large, sociable
						kitchen/dining/living area with wood burner, master bedroom with king size bed, second
						bedroom with bunk beds, shower room, enclosed back garden, off-street parking and
						stunning views over the forest and mountains opposite.
					</p>
					<p>
						The well-equipped kitchen features a breakfast bar, dishwasher, electric range cooker,
						fridge, freezer, Nespresso machine and washer/dryer. Plenty of storage space and a wide
						range of kitchen equipment makes this great area if you choose to cook on your holiday.
					</p>
					<p>
						The enclosed garden is dog friendly. Enjoy the peace and quiet and spot the wildlife on
						the hill - including deer, best spotted at dusk or dawn.
					</p>
				</div>
				<h3>Amenities</h3>
				<div className="img-grid">
					<figure className="icon-with-caption">
						<img src="../assets/icons/bed.svg" alt="" />
						<figcaption>2 bedrooms</figcaption>
					</figure>
					<figure className="icon-with-caption">
						<img src="../assets/icons/pets.svg" alt="" />
						<figcaption>Pet friendly</figcaption>
					</figure>
					<figure className="icon-with-caption">
						<img src="../assets/icons/car.svg" alt="" />
						<figcaption>Driveway</figcaption>
					</figure>
					<figure className="icon-with-caption">
						<img src="../assets/icons/view.svg" alt="" />
						<figcaption>Mountain view</figcaption>
					</figure>
					<figure className="icon-with-caption">
						<img src="../assets/icons/wifi.svg" alt="" />
						<figcaption>Free wifi</figcaption>
					</figure>
					<figure className="icon-with-caption">
						<img src="../assets/icons/tv.svg" alt="" />
						<figcaption>55-inch TV with Netflix</figcaption>
					</figure>
				</div>
			</Section>
			<Section sectionId="location">
				<div className="p-container">
					<p>{copy.location[0]}</p>
					<p>{copy.location[1]}</p>
					<p>{copy.location[2]}</p>
					<p>{copy.location[3]}</p>
					<p>{copy.location[4]}</p>
				</div>
				<h2>Points of interest</h2>
				<div className="img-container">
					<figure className="img-with-caption">
						<img src="../assets/images/loch-ness.jpeg" alt="Urquhart Castle, Loch Ness" />
						<figcaption>
							<h3>Loch Ness</h3>
							<p>
								The world-famous Loch Ness is just three miles away. Pictured here is 13th Century
								Castle Urquhart.
							</p>
						</figcaption>
					</figure>
					<figure className="img-with-caption">
						<img src="../assets/images/fort-augustus.webp" alt="Fort Augustus, Inverness-shire" />
						<figcaption>
							<h3>Fort Augustus</h3>
							<p>
								Nearby Fort Augustus has a good range of local shops and attractions, cycle hire and
								boat trips on Loch Ness.
							</p>
						</figcaption>
					</figure>
					<figure className="img-with-caption">
						<img src="../assets/images/loch-oich.webp" alt="Loch Oich shore" />
						<figcaption>
							<h3>Loch Oich</h3>
							<p>
								Beautiful Loch Oich is just a five minute drive away - join the Great Glen Way here
								and enjoy some beautiful walks, an excellent cycle route, or even a wild swim for
								the brave.
							</p>
						</figcaption>
					</figure>
				</div>
			</Section>
			<Section sectionId="gallery"></Section>
			<Section sectionId="reviews"></Section>
			<Section sectionId="booking"></Section>
			<footer>
				<p>Copyright © 2024 Owl Cottage. All rights reserved.</p>
			</footer>
		</>
	);
}

export default App;
