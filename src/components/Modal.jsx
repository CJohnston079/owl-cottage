import { useState, useRef } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import ModalForm from "./ModalForm";
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

	return (
		<>
			<Button style="emphasis" onClick={openModal}>
				{heading}
			</Button>
			<dialog className="modal-overlay" onClick={closeModal} ref={dialogRef} open={isOpen}>
				<div className="modal-content" onClick={stopPropagation}>
					<div className="modal-header">
						<h3>{heading}</h3>
						<button className="close-modal" onClick={closeModal} title="Close window">
							<img src="./src/assets/icons/close.svg" alt="Close icon" />
						</button>
					</div>
					<ModalForm closeForm={closeModal} />
				</div>
			</dialog>
		</>
	);
}

Modal.propTypes = {
	heading: PropTypes.string.isRequired,
};
