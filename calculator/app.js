var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var btnAdd = document.querySelector("#btn-add");
var btnSub = document.querySelector("#btn-sub");
var btnMul = document.querySelector("#btn-mul");
var btnDiv = document.querySelector("#btn-div");
var output = document.querySelector("#output");

btnAdd.addEventListener("click",()=>{
    output.innerText = parseInt(input1.value) + parseInt(input2.value);

});
btnSub.addEventListener("click",()=>{
    output.innerText = parseInt(input1.value) - parseInt(input2.value);
    
});
btnMul.addEventListener("click",()=>{
    output.innerText = parseInt(input1.value) * parseInt(input2.value);
    
});
btnDiv.addEventListener("click",()=>{
    if(input2.value > 0){
        output.innerText = parseInt(input1.value) / parseInt(input2.value);
    }
    else{
        output.innerText = "divide by zero error";
    }
    
    
});