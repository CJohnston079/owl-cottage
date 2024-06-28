import { Link } from "react-router-dom";
import Button from "../shared/Button";

export default function Tour() {
	return (
		<div>
			<h2>Tour</h2>
			<Link to="/">
				<Button>⭠ Back</Button>
			</Link>
		</div>
	);
}
