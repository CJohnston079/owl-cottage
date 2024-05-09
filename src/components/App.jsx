import NavBar from "./NavBar.jsx";
import Section from "./Section.jsx";
import "../styles/App.css";

function App() {
	return (
		<>
			<NavBar />
			<section id="home">
				<div className="hero-container">
					<h1>Owl Cottage</h1>
					<p>
						Dog-friendly traditional stone cottage in the heart of the Scottish Highlands, close to
						Loch Ness, the Great Glen Way and Ben Nevis.
					</p>
					<a href="#booking">
						<button className="hero-action">Book your stay</button>
					</a>
				</div>
			</section>
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
					<p>A fantastic central point to explore the Highlands and beyond.</p>
					<p>
						Loch Oich is just five minutes away. Not as well known as Loch Ness but a real hidden
						treasure. The Great Glen Way runs along the loch shore and its flat, level path here
						makes it highly accessible for walking and cycling. Very dog friendly with no nearby
						roads or livestock. Park at Bridge of Oich to access the loch.
					</p>
					<p>
						The Caledonian Canal from Bridge of Oich to Fort Augustus is another flat, accessible
						walk, suitable for walkers, cyclists and dogs. Follow the quiet footpath through
						beautiful forestry to reach the famous Fort Augustus Locks and the start of Loch Ness.
						You can hire cycles here, try a boat trip on the loch, or for the more adventurous,
						several companies offer kayaking, canoeing and white water adventures.
					</p>
					<p>
						Many more wonderful walks are within easy reach - at all levels from short, flat paths
						to challenging Munros. And the ultimate challenge of Ben Nevis is just 40 minutes away.
					</p>
					<p>The Isle of Skye is an hour&apos;s drive west, and Inverness is an hour north.</p>
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
