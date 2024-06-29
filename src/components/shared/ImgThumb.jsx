import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import closeIcon from "../../assets/icons/close.svg";
import "../../styles/shared/ImgThumb.css";

export default function ImgThumb({ imgSrc, alt }) {
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
			<img className="img-thumb" src={imgSrc} alt={alt} onClick={openModal} />
			<dialog className="modal-overlay" onClick={closeModal} ref={dialogRef} open={isOpen}>
				<div className="modal-window" onClick={stopPropagation}>
					<header className="modal-header">
						<h3>{alt}</h3>
						<button className="close-modal" onClick={closeModal} title="Close window">
							<img src={closeIcon} alt="Close icon" />
						</button>
					</header>
					<img src={imgSrc} alt="" />
				</div>
			</dialog>
		</>
	);
}

ImgThumb.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	alt: PropTypes.string,
};
