document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

window.addEventListener("scroll", function () {
	const navElement = document.querySelector("#nav");
	const boundingElement = document.querySelector("#about");
	const distanceFromTop = boundingElement.getBoundingClientRect().top;

	if (distanceFromTop <= 0) {
		navElement.classList.add("floating-nav");
	} else {
		navElement.classList.remove("floating-nav");
	}
});

const navLinks = document.querySelectorAll(".nav-link");

const toggleActiveLink = function () {
	const scrollPosition = window.scrollY;

	document.querySelectorAll("section").forEach(section => {
		const sectionTop = section.offsetTop - 42;
		const sectionHeight = section.clientHeight;

		if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
			const navLink = document.querySelector(`[href="#${section.id}"]`);

			navLinks.forEach(link => link.classList.remove("active"));

			navLink.classList.add("active");
		}
	});
};

window.addEventListener("scroll", toggleActiveLink);
