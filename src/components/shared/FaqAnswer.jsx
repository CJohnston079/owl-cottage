import PropTypes from "prop-types";

export default function FaqAnswer({ answer }) {
	return <p className="faq-answer">{answer}</p>;
}

FaqAnswer.propTypes = {
	answer: PropTypes.string.isRequired,
};
