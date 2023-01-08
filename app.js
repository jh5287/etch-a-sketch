const box = document.querySelector('.box');


let count = 256;
while (count != 0){
    let square = document.createElement('div');
    square.classList.add('square');
    box.appendChild(square);
    count--;   
}