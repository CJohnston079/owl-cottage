import PropTypes from "prop-types";
import Bento from "./Bento";
import "../../styles/shared/CopyWithBento.css";

export default function CopyWithBento({ children, bentoImages }) {
	return (
		<div className="col-content-container">
			<div className="copy">{children}</div>
			<Bento images={bentoImages} />
		</div>
	);
}

CopyWithBento.propTypes = {
	children: PropTypes.node,
	bentoImages: PropTypes.arrayOf(
		PropTypes.shape({
			src: PropTypes.string,
			alt: PropTypes.string,
		})
	),
};
