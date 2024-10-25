import PropTypes from "prop-types";
import parse from "html-react-parser";
import "../../styles/shared/FaqAnswer.css";

export default function FaqAnswer({ answer }) {
	const parsedAnswer = parse(answer);
	return <p className="faq-answer">{parsedAnswer}</p>;
}

FaqAnswer.propTypes = {
	answer: PropTypes.string.isRequired,
};
