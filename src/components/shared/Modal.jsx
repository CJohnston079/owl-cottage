import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import closeIcon from "../../assets/icons/close.svg";
import "../../styles/shared/Modal.css";

export default function Modal({
	buttonText,
	heading = buttonText,
	showCloseButton = false,
	children,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const dialogRef = useRef(null);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const stopPropagation = e => {
		e.stopPropagation();
	};

	useEffect(() => {
		const handleKeyDown = e => {
			if (e.key === "Escape") {
				closeModal();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
		} else {
			document.removeEventListener("keydown", handleKeyDown);
		}

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen]);

	return (
		<>
			<Button style="emphasis" onClick={openModal}>
				{buttonText}
			</Button>
			<dialog className="modal-overlay" onClick={closeModal} ref={dialogRef} open={isOpen}>
				<div className="modal-window" onClick={stopPropagation}>
					<header className="modal-header">
						<h3>{heading}</h3>
						<button className="close-modal" onClick={closeModal} title="Close window">
							<img src={closeIcon} alt="Close icon" />
						</button>
					</header>
					{children({ closeModal })}
					{showCloseButton && <Button onClick={closeModal}>Close</Button>}
				</div>
			</dialog>
		</>
	);
}

Modal.propTypes = {
	buttonText: PropTypes.string.isRequired,
	heading: PropTypes.string,
	showCloseButton: PropTypes.bool,
	children: PropTypes.func.isRequired,
};
