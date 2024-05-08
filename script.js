const sections = document.querySelectorAll("section");

for (let i = 2; i < sections.length; i += 2) {
	sections[i].classList.add("section-contrast-background");
}
