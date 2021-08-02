var input = document.querySelector("#txt-h1");
var upper = document.querySelector("#uppercase");
var lower = document.querySelector("#lowercase");
var output = document.querySelector("#output");

upper.addEventListener("click",() =>{
   var str = input.value;
   var result = str.toUpperCase();
   output.innerHTML = result;
});

lower.addEventListener("click",() =>{
    var str = input.value;
    var result = str.toLowerCase();
    output.innerHTML = result;
 });