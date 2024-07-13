import Button from "../shared/Button";
import "../../styles/sections/Hero.css";

export default function Hero() {
	return (
		<section id="home" className="hero">
			<div className="hero-container">
				<h1 className="hero-heading">Owl Cottage</h1>
				<p className="hero-text">
					Dog-friendly traditional stone cottage in the heart of the Scottish Highlands, close to
					Loch Ness, the Great Glen Way and the picturesque tourist destination of Fort Augustus.
				</p>
				<Button style={"hero"}>
					<a href="#booking">Book your stay</a>
				</Button>
			</div>
		</section>
	);
}
