let C = document.querySelector("#C");
let backspace = document.querySelector("#backspace");
let dot = document.querySelector("#dot");
let zero = document.querySelector("#zero");
let doublezero = document.querySelector("#doublezero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let multiplication = document.querySelector("#multiplication");
let division = document.querySelector("#division");
let subtraction = document.querySelector("#subtraction");
let addition = document.querySelector("#addition");
let modulo = document.querySelector("#modulo");
let equal = document.querySelector("#equal");
let mydisplay = document.querySelector("#mydisplay");
let a,b,op;

one.addEventListener("click",()=>{
    if(mydisplay.innerText == "0")
    {
        mydisplay.innerText = 1;
    }
    else {
        mydisplay.innerText += 1 ;  
    }
});
two.addEventListener("click",()=>{
    if(mydisplay.innerText == "0") 
    {
        mydisplay.innerText = 2;
    }
    else {
        mydisplay.innerText += 2 ;
    }
});
three.addEventListener("click",()=>{
    if(mydisplay.innerText == "0")
    {
        mydisplay.innerText = 3;
    }
    else {
        mydisplay.innerText += 3 ;
    }
});
four.addEventListener("click",()=>{
    if(mydisplay.innerText == "0")
    {
        mydisplay.innerText = 4;
    }
    else {
        mydisplay.innerText += 4 ;
    }
});
five.addEventListener("click",()=>{
    if(mydisplay.innerText == "0")
    {
        mydisplay.innerText = 5;
    }
    else {
        mydisplay.innerText += 5 ;
    }
});
six.addEventListener("click",()=>{
    if(mydisplay.innerText == "0")
    {
        mydisplay.innerText = 6;
    }
    else {
        mydisplay.innerText += 6 ;
    }
});
seven.addEventListener("click",()=>{
    if(mydisplay.innerText == "0")
    {
        mydisplay.innerText = 7;
    }
    else {
        mydisplay.innerText += 7 ;
    }
});
eight.addEventListener("click",()=>{
    if(mydisplay.innerText == "0")
    {
        mydisplay.innerText = 8;
    }
    else {
        mydisplay.innerText += 8 ;
    }
});
nine.addEventListener("click",()=>{
    if(mydisplay.innerText == "0")
    {
        mydisplay.innerText = 9;
    }
    else {
        mydisplay.innerText += 9 ;
    }
});
zero.addEventListener("click",()=>{
    mydisplay.innerText += 0 ;
});
doublezero.addEventListener("click",()=>{
    mydisplay.innerText += 0 ;
    mydisplay.innerText += 0 ;
});
dot.addEventListener("click",()=>{
    mydisplay.innerText += "." ;
});
multiplication.addEventListener("click",()=>{
    op = "*";
    a = parseFloat(mydisplay.innerText);
    console.log(a);
    mydisplay.innerText = 0 ;
});
division.addEventListener("click",()=>{
    op = "/";
    a = parseFloat(mydisplay.innerText);
    console.log(a);
    mydisplay.innerText = 0 ;
});
subtraction.addEventListener("click",()=>{
    op = "-";
    a = parseFloat(mydisplay.innerText);
    console.log(a);
    mydisplay.innerText = 0 ;
});
addition.addEventListener("click",()=>{
    op = "+";
    a = parseFloat(mydisplay.innerText);
    console.log(a);
    mydisplay.innerText = 0 ;
});
modulo.addEventListener("click",()=>{
    op = "%";
    a = parseFloat(mydisplay.innerText);
    console.log(a);
    mydisplay.innerText = 0 ;
});
// backspace.addEventListener("click",()=>{
    
// });
C.addEventListener("click",()=>{
    a = 0;
    b = 0;
    op = "";
    mydisplay.innerText = "0";
});
equal.addEventListener("click",()=>{
    mydisplay = document.querySelector("#mydisplay");
    b = parseFloat(mydisplay.innerText);
    console.log(b);
    cal(a,b,op)
});



function cal(a,b,op)
{
    if(op === "+")
    {
        mydisplay.innerText = a+b;
        console.log(a+b);
    }
    else if(op === "-")
    {
        mydisplay.innerText = a-b;
        console.log(a-b);
    }
    else if(op === "*")
    {
        mydisplay.innerText = a*b;
        console.log(a*b);
    }
    else if(op === "/")
    {
        mydisplay.innerText = a/b;
        console.log(a/b);
    }
    else if(op === "%")
    {
        mydisplay.innerText = a%b;
        console.log(a%b);
    }
}
