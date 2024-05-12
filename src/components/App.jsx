import NavBar from "./NavBar.jsx";
import Hero from "./Hero.jsx";
import Location from "./Location.jsx";
import Section from "./Section.jsx";
import Paragraphs from "./Paragraphs.jsx";
import Testimonials from "./Testimonials.jsx";
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
			<Location />
			<Testimonials />
			<Section sectionId="booking"></Section>
			<footer>
				<p>Copyright © 2024 Owl Cottage. All rights reserved.</p>
			</footer>
		</>
	);
}

export default App;
