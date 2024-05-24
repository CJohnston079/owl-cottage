import "../../styles/shared/Bento.css";

export default function Bento({ images }) {
	const imgElements = images.map(image => {
		return <img key={image.alt} className="bento-img" src={image.src} alt={image.alt} />;
	});

	return (
		<div className="bento-container">
			<div className="bento-column">
				{imgElements[0]}
				{imgElements[1]}
			</div>
			<div className="bento-column">
				{imgElements[2]}
				{imgElements[3]}
			</div>
			<div className="bento-column">
				{imgElements[4]}
				{imgElements[5]}
			</div>
		</div>
	);
}

Bento.propTypes = {
	images: (props, propName, componentName) => {
		if (!Array.isArray(props[propName])) {
			return new Error(
				`Invalid prop ${propName} supplied to ${componentName}. Expected array, received ${typeof props[
					propName
				]}.`
			);
		}

		if (props[propName].length !== 6) {
			return new Error(
				`Not enough images supplied to ${componentName}. Expected 6, received ${props[propName].length}.`
			);
		}

		for (let i = 0; i < props[propName].length; i += 1) {
			const image = props[propName][i];

			if (!image.src || !image.alt) {
				return new Error(
					`Invalid prop ${propName}[${i}] supplied to ${componentName}. Each image must have 'src' and 'alt' properties.`
				);
			}
		}
	},
};
