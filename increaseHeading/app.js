var txtInput = document.querySelector("#input-txt");
var btnH1 = document.querySelector("#btn-h1");
var btnH2 = document.querySelector("#btn-h2");
var btnH3 = document.querySelector("#btn-h3");
var output = document.querySelector("#output");


btnH1.addEventListener("click", () => {
    output.innerHTML = "<h1>" + txtInput.value + "</h1>";

});

btnH2.addEventListener("click", () => {
    output.innerHTML = "<h2>" + txtInput.value + "</h2>";
});

btnH3.addEventListener("click", () => {
    output.innerHTML = "<h3>" + txtInput.value + "</h3>";
});