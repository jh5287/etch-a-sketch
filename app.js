const box = document.querySelector('.box');


let count = Math.sqrt(256);
count = count * count;
while (count != 0){
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.width = "20px"
    box.appendChild(square);
    count--;   
}

let colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];
let squares = document.querySelectorAll('.square');

box.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }, false); 




//clear button
let clearBtn = document.querySelector('.restart');
clearBtn.addEventListener('click', () =>{
    byeSquare = document.querySelectorAll('.square');
    byeSquare.forEach(element => {
        box.removeChild(element);
    })
})

clearBtn.addEventListener('click', () => {
    let newCount = prompt("Enter number of squares: ");
    newCount = Number(newCount);
    newCount = Math.round(Math.sqrt(newCount));
    console.log(newCount);
    let perfectSquare = newCount * newCount;
    squares.forEach(element => {
        element.style.backgroundColor = 'white';
        while (perfectSquare != 0){
            let squares = document.createElement('div');
            squares.classList.add('square');
            squares.setAttribute('style', `width: ${(320/newCount)}px;`);
            box.appendChild(squares);
            perfectSquare--;
        }
    })  
})

