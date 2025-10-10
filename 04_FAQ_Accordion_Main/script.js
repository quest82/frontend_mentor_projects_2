const openBtn = document.querySelectorAll(".faq__img--open");
const closeBtn = document.querySelectorAll(".faq__img--close");
const answers = document.querySelectorAll(".faq__answer");

openBtn.forEach((x, index) => {
	x.addEventListener("click", () => {
		answers[index].classList.toggle("show");
		x.style.display = "none";
		closeBtn[index].style.display = "block";
	});
});

closeBtn.forEach((x, index) => {
	x.addEventListener("click", () => {
		answers[index].classList.toggle("close");
		x.style.display = "none";
		openBtn[index].style.display = "block";
	});
});
