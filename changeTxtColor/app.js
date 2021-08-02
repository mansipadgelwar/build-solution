var input = document.querySelector("#txt-input");
var btnRed = document.querySelector("#red");
var btnGreen = document.querySelector("#green");
var btnBlue = document.querySelector("#blue");
var output = document.querySelector("#output");

btnRed.addEventListener("click", () => {
 output.innerText = input.value;
 output.style.color = "Red";
});

btnGreen.addEventListener("click", () => {
    output.innerText = input.value;
    output.style.color = "Green";
});

btnBlue.addEventListener("click", () => {
    output.innerText = input.value;
    output.style.color = "Blue";
});
