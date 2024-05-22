import About from "./pages/About.jsx";
import Booking from "./pages/Booking.jsx";
import Faq from "./pages/Faq.jsx";
import Hero from "./pages/Hero.jsx";
import Location from "./pages/Location.jsx";
import NavBar from "./pages/NavBar.jsx";
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
			<Faq />
			<Booking />
			<footer>
				<p>Copyright © 2024 Owl Cottage. All rights reserved.</p>
			</footer>
		</>
	);
}

export default App;
