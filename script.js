document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		console.log("boom");

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

const mobileNav = document.querySelector(".mobile-nav");
const burger = document.querySelector(".burger-container");
burger.addEventListener("click", () => {
	burger.classList.toggle("open");
	mobileNav.classList.toggle("active");
});
