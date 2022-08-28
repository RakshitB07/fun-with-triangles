const inputs = document.querySelectorAll(".angle-input");
const checkTriangleBtn = document.querySelector("#check-triangle-btn");
const outputEl = document.querySelector("#output");

function sumOfAllAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles
}

function checkTriangle() {
    const sumOfAngles = sumOfAllAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))
    if (sumOfAngles === 180) {
        outputEl.innerText = ("The angles form a triangle!")

    } else {
        outputEl.innerText = ("The angles do not form a triangle!")
    }

}

checkTriangleBtn.addEventListener("click", checkTriangle)