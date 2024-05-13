import { useState, useRef } from "react";
import PropTypes from "prop-types";
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
			<button className="button" onClick={openDialog}>
				{heading}
			</button>
			<dialog className="dialog-window" onClick={closeDialog} ref={dialogRef} open={isOpen}>
				<div className="dialog-content" onClick={stopPropagation}>
					<h3>{heading}</h3>
					{children}
					<button className="button" onClick={closeDialog}>
						Close
					</button>
				</div>
			</dialog>
		</>
	);
}

Dialog.propTypes = {
	children: PropTypes.nodeList,
	heading: PropTypes.string.isRequired,
};
