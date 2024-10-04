import PropTypes from "prop-types";
import "../../styles/shared/CopyWithBento.css";

export default function CopyWithBento({
	children,
	imgSrc,
	imgAltText,
	reverse = false,
	emphasis = false,
}) {
	const copy = <div className="copy">{children}</div>;
	const img = <img src={imgSrc} alt={imgAltText} />;

	return (
		<div
			className={`col-content-container copy-img ${emphasis ? "emphasis" : ""} ${
				reverse ? "reverse" : ""
			}`}
		>
			{reverse ? (
				<>
					{img}
					{copy}
				</>
			) : (
				<>
					{copy}
					{img}
				</>
			)}
		</div>
	);
}

CopyWithBento.propTypes = {
	children: PropTypes.node,
	imgSrc: PropTypes.string.isRequired,
	imgAltText: PropTypes.string,
	reverse: PropTypes.bool,
	emphasis: PropTypes.bool,
};
