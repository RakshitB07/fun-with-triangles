const sides = document.querySelectorAll(".side-input");
const checkHypoBtn = document.querySelector("#check-hypo-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquare(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
}

function calculateHypo() {
    const sumOfSquares = calculateSumOfSquare(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHyypo = Math.sqrt(sumOfSquares);
    outputEl.innerText = "Length of hypotenuse is " + lengthOfHyypo




}

checkHypoBtn.addEventListener("click", calculateHypo);