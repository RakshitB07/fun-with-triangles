const checkHypoBtn = document.querySelector("#check-hypo-btn");
const outputEl = document.querySelector("#output");
const sides = document.querySelectorAll(".side-input");

function calculateSumOfSquare(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
}

function calculateHypo() {
    const sumOfSquares = calculateSumOfSquare(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypo = Math.sqrt(sumOfSquares);
    outputEl.innerText = "Length of hypotenuse is: " + lengthOfHypo




}

checkHypoBtn.addEventListener("click", calculateHypo);