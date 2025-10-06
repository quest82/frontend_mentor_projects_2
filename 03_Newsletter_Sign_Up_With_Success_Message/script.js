const form = document.querySelector(".signUp__copy__form");
const dismissBtn = document.querySelector(".success__btn");
const emailWarning = document.querySelector(".emailWarning");
const emailInput = document.querySelector(".emailInput");
const landingPage = document.querySelector(".signUp");
const successPage = document.querySelector(".success");
const span = document.querySelector(".success__copy__info");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (regex.test(emailInput.value)) {
		span.textContent = emailInput.value;
		landingPage.style.display = "none";
		successPage.style.display = "block";
	} else {
		emailInput.classList.add("inputWarning");
		emailWarning.style.display = "block";
		console.log(emailInput.classList);
	}
});

dismissBtn.addEventListener("click", (e) => {
    successPage.style.display = 'none'
});
