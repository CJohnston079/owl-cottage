import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Form from "./Form";
import formFields from "../data/formFields.json";
import "../styles/Modal.css";

export default function Modal({ heading }) {
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
				{heading}
			</Button>
			<dialog className="modal-overlay" onClick={closeModal} ref={dialogRef} open={isOpen}>
				<div className="modal-window" onClick={stopPropagation}>
					<header className="modal-header">
						<h3>{heading}</h3>
						<button className="close-modal" onClick={closeModal} title="Close window">
							<img src="./src/assets/icons/close.svg" alt="Close icon" />
						</button>
					</header>
					<Form fieldsData={formFields.testimonials} closeForm={closeModal}>
						<Button onClick={closeModal}>Close</Button>
					</Form>
				</div>
			</dialog>
		</>
	);
}

Modal.propTypes = {
	heading: PropTypes.string.isRequired,
};
