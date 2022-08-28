const quizForm = document.querySelector(".quiz-form");
const submitAnsBtn = document.querySelector("#submit-ans-btn");
const outputEl = document.querySelector("#output");

const correctAns = ["90°", "Right angle"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResult = new FormData(quizForm);
    for (let value of formResult.values()) {
        if (value === correctAns[index]) {
            score = score + 1;
        }
        index = index + 1;

    }
    outputEl.innerText = "Your score is " + score;
}

submitAnsBtn.addEventListener("click", calculateScore);