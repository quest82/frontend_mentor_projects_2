const openBtn = document.querySelectorAll(".faq__img--open");
const closeBtn = document.querySelectorAll(".faq__img--close");
const answers = document.querySelectorAll(".faq__answer");
const frequentlyAnsweredQuestions = document.querySelectorAll(".faq");

frequentlyAnsweredQuestions.forEach((x, index) => {
	x.addEventListener("click", () => {
		answers[index].classList.toggle("show");
		console.log(answers[index].classList);
		if (answers[index].classList.contains("show")) {
			openBtn[index].style.display = "none";
			closeBtn[index].style.display = "block";
		} else {
			openBtn[index].style.display = "block";
			closeBtn[index].style.display = "none";
		}
	});
});
