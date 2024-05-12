import { useState, useRef } from "react";
import "../styles/Dialog.css";

export default function Dialog() {
	const [isOpen, setIsOpen] = useState(false);
	const dialogRef = useRef(null);

	const openDialog = () => {
		setIsOpen(true);
	};

	const closeDialog = () => {
		setIsOpen(false);
	};

	return (
		<>
			<button className="button" onClick={openDialog}>
				Leave a testimonial
			</button>
			<dialog className="dialog" ref={dialogRef} open={isOpen}>
				<div className="dialog-content">
					<h3>Dialog heading</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum.
					</p>
					<button className="button" onClick={closeDialog}>
						Close
					</button>
				</div>
			</dialog>
		</>
	);
}
