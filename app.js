const box = document.querySelector('.box');


let count = 256;
while (count != 0){
    let square = document.createElement('div');
    square.classList.add('square');
    box.appendChild(square);
    count--;   
}

//let colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];
let squares = document.querySelectorAll('.square');
squares.forEach(function(elem){
    elem.addEventListener('mouseover', () =>{
        elem.style.backgroundColor = 'green'
})
    //= colors[Math.floor(Math.random() * colors.length)];
})