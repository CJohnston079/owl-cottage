import { useState, useRef } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "../styles/Dialog.css";

export default function Dialog({ heading, children }) {
	const [isOpen, setIsOpen] = useState(false);
	const dialogRef = useRef(null);

	const openDialog = () => {
		setIsOpen(true);
	};

	const closeDialog = () => {
		setIsOpen(false);
	};

	const stopPropagation = e => {
		e.stopPropagation();
	};

	return (
		<>
			<Button style="emphasis" onClick={openDialog}>
				{heading}
			</Button>
			<dialog className="dialog-window" onClick={closeDialog} ref={dialogRef} open={isOpen}>
				<div className="dialog-content" onClick={stopPropagation}>
					<h3>{heading}</h3>
					{children}
					<Button onClick={closeDialog}>Close</Button>
				</div>
			</dialog>
		</>
	);
}

Dialog.propTypes = {
	children: PropTypes.node,
	heading: PropTypes.string.isRequired,
};
