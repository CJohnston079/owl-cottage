import HeroButton from "./HeroButton";
import "../styles/Hero.css";

export default function Hero() {
	return (
		<section id="home" className="hero">
			<div className="hero-container">
				<h1 className="hero-heading">Owl Cottage</h1>
				<p className="hero-text">
					Dog-friendly traditional stone cottage in the heart of the Scottish Highlands, close to
					Loch Ness, the Great Glen Way and Ben Nevis.
				</p>
				<HeroButton content="Book your stay" href="#booking" />
			</div>
		</section>
	);
}
