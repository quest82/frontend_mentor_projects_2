"use strict";

// Setting up the DOM to interact with HTML elements
const overAllScore = document.querySelector(".result__total__bubble__info__score");
const memoryScore = document.querySelector(".memory");
const reactionScore = document.querySelector(".reaction");
const verbalScore = document.querySelector(".verbal");
const visualScore = document.querySelector(".visual");
const button = document.querySelector(".btn");

// Setting up the JSON data to be used in the UI
const jsonData = `[ 
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
]`;

const convertedData = JSON.parse(jsonData); // Convert JSON string to iterable data type

button.addEventListener("click", (e) => { 
	dataInjector();
	setTimeout(scoreCounter, 400);
}); // Launches the needed functionality once the button is clicked

function dataInjector() {
	for (let a of convertedData) {
		if (a.category === "Memory") {
			memoryScore.textContent = a.score;
		} else if (a.category === "Reaction") {
			reactionScore.textContent = a.score;
		} else if (a.category === "Verbal") {
			verbalScore.textContent = a.score;
		} else if (a.category === "Visual") {
			visualScore.textContent = a.score;
		}
	}
} // This function add the data to the test scores

function scoreCounter() {
	let count = 0;
	let start = 0;
	for (let a of convertedData) {
		let dataNum = parseInt(a.score, 10);
		count += dataNum;
	}
	let avg = Math.floor(count / convertedData.length); // This code block calculates the average score

	
	let countDown = setInterval(() => {
    overAllScore.textContent = start;
		if (start === avg) {
			clearInterval(countDown)
		} else {
			start++;
		}
	}, 100); // This code block creates a count up from 0 to average
}
