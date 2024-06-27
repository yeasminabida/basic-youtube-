
const increaseB = document.getElementById("increaseB");
const resetB = document.getElementById("resetB");
const decreaseB = document.getElementById("decreaseB");

const label = document.getElementById("label");

let count = 0;
increaseB.onclick = function(){
    count++;
    label.textContent = count;
}

decreaseB.onclick = function(){
    count--;
    label.textContent = count;
}

resetB.onclick = function(){
    count = 0;
    label.textContent = count;
}


