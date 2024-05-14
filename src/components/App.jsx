import NavBar from "./NavBar.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Location from "./Location.jsx";
import Booking from "./Booking.jsx";
import Testimonials from "./Testimonials.jsx";
import "../styles/App.css";

function App() {
	return (
		<>
			<NavBar />
			<Hero />
			<About />
			<Location />
			<Testimonials />
			{/* <Section sectionId="booking"></Section> */}
			<Booking />
			<footer>
				<p>Copyright © 2024 Owl Cottage. All rights reserved.</p>
			</footer>
		</>
	);
}

export default App;
