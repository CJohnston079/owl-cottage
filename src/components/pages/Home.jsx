import About from "../sections/About.jsx";
import Amenities from "../sections/Amenities.jsx";
import Booking from "../sections/Booking.jsx";
import Faq from "../sections/Faq.jsx";
import Hero from "../sections/Hero.jsx";
import Location from "../sections/Location.jsx";
import LocalAreaMap from "../sections/LocalAreaMap.jsx";
import NavBar from "../nav/NavBar.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import "../../styles/pages/Home.css";

function Home() {
	return (
		<>
			<NavBar />
			<Hero />
			<About />
			<Amenities />
			<Location />
			<LocalAreaMap />
			<Testimonials />
			<Faq />
			<Booking />
		</>
	);
}

export default Home;
