import "../styles/Header.css";

export default function Header() {
	return (
		<header id="nav">
			<nav>
				<ul>
					<a className="nav-link active" href="#hero">
						<li>Home</li>
					</a>
					<a className="nav-link" href="#about">
						<li>About</li>
					</a>
					<a className="nav-link" href="#location">
						<li>Location</li>
					</a>
					<a className="nav-link" href="#gallery">
						<li>Gallery</li>
					</a>
					<a className="nav-link" href="#reviews">
						<li>Reviews</li>
					</a>
					<a className="nav-link" href="#booking">
						<li>Booking</li>
					</a>
				</ul>
			</nav>
		</header>
	);
}
