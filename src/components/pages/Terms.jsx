import Button from "../shared/Button.jsx";
import NavBar from "../nav/NavBar.jsx";
import { Link } from "react-router-dom";

import Section from "../shared/Section.jsx";

export default function Terms() {
	return (
		<>
			<NavBar links={[]}>
				<Link to="/">
					<Button style="emphasis">
						<span style={{ display: "inline-block", rotate: "180deg" }}>➞</span> Back
					</Button>
				</Link>
			</NavBar>
			<Section sectionId="terms" heading="Terms and Conditions"></Section>
		</>
	);
}
