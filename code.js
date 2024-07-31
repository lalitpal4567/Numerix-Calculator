let inputs = document.querySelector(".inputValue");
let output = document.querySelector(".result");
let buttons = document.querySelectorAll(".key");
const themeButton = document.getElementById('themeButton');

const body = document.body;


buttons.forEach((key) => {
    key.addEventListener("click", calculator);
});

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    buttons.forEach(button => {
        button.classList.toggle('key-dark-theme');
    });
});

function calculator() {
    let buttonText = this.innerHTML;
    if (buttonText === "AC") {
        output.innerText = "";
        inputs.innerText = "";
    }
    else if (buttonText === "DEL") {
        inputs.innerText = inputs.innerText.substr(0, inputs.innerText.length - 1);
    }
    else if (buttonText === "=") {
        output.innerText = eval(inputs.innerText);
    }
    else {
        if (inputs.innerText === "0") {
            inputs.innerText = "";
        }
        if (inputs.innerText.length <= 30) {
            inputs.innerText += buttonText;
        }
    }

}