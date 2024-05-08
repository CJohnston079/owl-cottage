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

const sections = document.querySelectorAll("section");

for (let i = 2; i < sections.length; i += 2) {
	sections[i].classList.add("section-contrast-background");
}
