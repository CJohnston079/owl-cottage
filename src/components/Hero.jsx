import Button from "./Button";
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
				<Button style={"btn-hero"}>
					<a href="#booking">Book your stay</a>
				</Button>
			</div>
		</section>
	);
}
