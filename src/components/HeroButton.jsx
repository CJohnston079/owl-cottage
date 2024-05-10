import PropTypes from "prop-types";
import Button from "./Button";
import "../styles/HeroButton.css";

export default function HeroButton({ content, href, type }) {
	return <Button content={content} href={href} type={type} classNames={"hero-button"} />;
}

HeroButton.propTypes = {
	content: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	type: PropTypes.string,
};
