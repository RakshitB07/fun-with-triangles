const inputs = document.querySelectorAll('.length-input')
const calculateBtn = document.querySelector('#calculate-btn')
const output = document.querySelector('#output')

function processing(a, b) {
    let calculations = a * b / 2;
    return calculations;
}

function calculateArea() {
    const answer = processing(Number(inputs[0].value), Number(inputs[1].value));
    output.innerText = ("Area is: " + answer);
}

calculateBtn.addEventListener('click', calculateArea);