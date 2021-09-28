//Ripple effect for buttons
const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
	button.addEventListener("click", function (e) {
		const x = e.clientX;
		const y = e.clientY;

		const buttonTop = e.target.offsetTop;
		const buttonLeft = e.target.offsetLeft;

		console.log(`y - ${y}, offTop - ${buttonTop}`);

		const xInside = x - buttonLeft;
		const yInside = y - buttonTop;

		console.log(xInside, yInside);

		const circle = document.createElement("span");
		circle.classList.add("circle");
		circle.style.top = yInside + "px";
		circle.style.left = xInside + "px";

		this.appendChild(circle);

		setTimeout(() => circle.remove(), 500);
	});
});

function hover(icon, src) {
	icon.setAttribute("src", `${src}`);
}

//Mobile navbar
const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".navbar-middle");
	const navLinks = document.querySelectorAll(".navbar-middle li");

	burger.addEventListener("click", () => {
		//Toggle Nav
		nav.classList.toggle("nav-active");

		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.4s ease forwards 
                ${index / 7 + 0.5}s`;
			}
		});
		//Burger Animation
		burger.classList.toggle("toggle");
	});
};

navSlide();
