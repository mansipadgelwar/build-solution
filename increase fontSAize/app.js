var input = document.querySelector("#txt-input");
var increase = document.querySelector("#btnInc");
var decrease = document.querySelector("#btnDec");
var output = document.querySelector("#output");

var size = 20;


increase.addEventListener("click",() =>{
    size = size + 2;
    output.style.fontSize = size + "px";
    output.innerHTML = input.value;  
});

decrease.addEventListener("click",() =>{

    size = size - 2;
    output.style.fontSize = size + "px";
    output.innerHTML = input.value;  
});