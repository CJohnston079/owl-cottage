document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

window.addEventListener("scroll", function () {
	const hiddenElement = document.querySelector("#floating-nav");
	const distanceFromTop = hiddenElement.getBoundingClientRect().top;

	if (distanceFromTop <= 0) {
		hiddenElement.classList.remove("hidden");
	} else {
		hiddenElement.classList.add("hidden");
	}
});
