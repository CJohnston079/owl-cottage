import About from "../sections/About.jsx";
import DogFriendly from "../sections/DogFriendly.jsx";
import Booking from "../sections/Booking.jsx";
import Faq from "../sections/Faq.jsx";
import Hero from "../sections/Hero.jsx";
import Location from "../sections/Location.jsx";
import LocalAreaMap from "../sections/LocalAreaMap.jsx";
import NavBar from "../nav/NavBar.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import Footer from "../sections/Footer.jsx";

import "../../styles/pages/Home.css";

function Home() {
	return (
		<>
			<NavBar links={["home", "about", "location", "faq", "testimonials", "booking"]} />
			<Hero />
			<About />
			<DogFriendly />
			<Location />
			<LocalAreaMap />
			<Testimonials />
			<Faq />
			<Booking />
			<Footer />
		</>
	);
}

export default Home;
