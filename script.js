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
