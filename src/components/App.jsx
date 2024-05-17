import NavBar from "./NavBar.jsx";
import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import Location from "./pages/Location.jsx";
import Booking from "./pages/Booking.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import "../styles/App.css";

function App() {
	return (
		<>
			<NavBar />
			<Hero />
			<About />
			<Location />
			<Testimonials />
			<Booking />
			<footer>
				<p>Copyright © 2024 Owl Cottage. All rights reserved.</p>
			</footer>
		</>
	);
}

export default App;
