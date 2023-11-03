let counter = document.querySelector('#counter');
let currentValue = parseInt(counter.innerText);

function Increment(){   
currentValue++;
counter.innerText = currentValue;
}
function Decrement(){
currentValue--; 
counter.innerText = currentValue;
}