import PropTypes from "prop-types";
import Bento from "./Bento";
import "../../styles/shared/ContentWithBento.css";

export default function ContentWithBento({ children, bentoImages }) {
	return (
		<div className="col-bento-container">
			<div className="content">{children}</div>
			<Bento images={bentoImages} />
		</div>
	);
}

ContentWithBento.propTypes = {
	children: PropTypes.node,
	bentoImages: PropTypes.arrayOf(
		PropTypes.shape({
			src: PropTypes.string,
			alt: PropTypes.string,
		})
	),
};
