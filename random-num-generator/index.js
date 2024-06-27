

const button = document.getElementById("button");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const myLabel4 = document.getElementById("myLabel4");


const min = 0;
const max = 100;
let randomNum1;
let randomNum2;
let randomNum3;
let randomNum4;

button.onclick = function () {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    randomNum4 = Math.floor(Math.random() * max) + min;

    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
    myLabel4.textContent = randomNum4;

} 