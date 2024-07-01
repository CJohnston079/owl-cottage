import PropTypes from "prop-types";
import "../../styles/nav/NavLink.css";

export default function NavLink({ href, linkTitle = href, isActive = false }) {
	const cleanedLink = linkTitle.replace("#", "");
	const linkContent = cleanedLink.charAt(0).toUpperCase() + cleanedLink.slice(1);
	const linkTarget = href.charAt(0) !== "#" ? `/${href}` : href;

	const scrollToTarget = e => {
		e.preventDefault();

		const targetElement = document.querySelector(href);

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
		}
	};

	const isInternalLink = href.startsWith("#");

	return (
		<li>
			<a
				onClick={isInternalLink ? scrollToTarget : undefined}
				className={`nav-link ${isActive && "active"}`}
				href={href === "home" ? "/" : linkTarget}
			>
				{linkContent}
			</a>
		</li>
	);
}

NavLink.propTypes = {
	href: PropTypes.string,
	linkTitle: PropTypes.string,
	isActive: PropTypes.bool,
};
