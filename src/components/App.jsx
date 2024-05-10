import NavBar from "./NavBar.jsx";
import Hero from "./Hero.jsx";
import Section from "./Section.jsx";
import Paragraphs from "./Paragraphs.jsx";
import FlexContainer from "./FlexContainer.jsx";
import Review from "./Review.jsx";
import copy from "../data/copy.json";
import "../styles/App.css";

function App() {
	return (
		<>
			<NavBar />
			<Hero />
			<Section sectionId="about">
				<Paragraphs paragraphs={copy.about} />
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
			<Section sectionId="location">
				<Paragraphs paragraphs={copy.location} />
				<h2>Points of interest</h2>
				<div className="img-container">
					<figure className="img-with-caption">
						<img src="./src/assets/images/loch-ness.jpeg" alt="Urquhart Castle, Loch Ness" />
						<figcaption>
							<h3>Loch Ness</h3>
							<p>
								The world-famous Loch Ness is just three miles away. Pictured here is 13th Century
								Castle Urquhart.
							</p>
						</figcaption>
					</figure>
					<figure className="img-with-caption">
						<img
							src="./src/assets/images/fort-augustus.webp"
							alt="Fort Augustus, Inverness-shire"
						/>
						<figcaption>
							<h3>Fort Augustus</h3>
							<p>
								Nearby Fort Augustus has a good range of local shops and attractions, cycle hire and
								boat trips on Loch Ness.
							</p>
						</figcaption>
					</figure>
					<figure className="img-with-caption">
						<img src="./src/assets/images/loch-oich.webp" alt="Loch Oich shore" />
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
			<Section sectionId="reviews">
				<FlexContainer>
					<Review
						review={{
							content:
								"My second stay at Owl Cottage. Such a lovely property, good base for lots of exploring. Will definitely be back.",
							author: "Kelly",
						}}
					/>
					<Review
						review={{
							content:
								"Beautiful house in a great location. Very spacious and has everything you need for a few days away. Great garden, which is fully enclosed for the dog too.",
							author: "Erin",
						}}
					/>
					<Review
						review={{
							content:
								"Owl Cottage is a very cosy comfortable place to stay and a great base to explore and enjoy the local area. Loads to do and see locally. Highly recommended!",
							author: "Tracy",
						}}
					/>
				</FlexContainer>
			</Section>
			<Section sectionId="booking"></Section>
			<footer>
				<p>Copyright © 2024 Owl Cottage. All rights reserved.</p>
			</footer>
		</>
	);
}

export default App;
