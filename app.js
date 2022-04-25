const grid = document.querySelector('.grid-container');
const btn = document.querySelector('.btn');
const slider = document.querySelector('#range');
const sValue = document.querySelector('#s-value');
const clear = document.querySelector('#clear');
const black = document.querySelector('#black');
const rainbow = document.querySelector('#rainbow')

const random = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + ", " + g + ", " + b + ");";
 }

const gridMaker = (mode) => {
    let num = slider.value;
    grid.setAttribute('style', `grid: repeat(${num}, 1fr) / repeat(${num}, 1fr);`)
    for (let i = 0; i < num * num; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = mode;
        })
    })
   
  }

const erase = () => {
        let cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
           grid.removeChild(cell);
        })       
    }

slider.addEventListener('change', (e) => {
    erase();
    gridMaker('black');
})

clear.addEventListener('click', () => {
    erase();
    gridMaker('black');
})

black.addEventListener('click', () => {
    erase();
    gridMaker('black');
})

rainbow.addEventListener('click', () => {
    erase();
    gridMaker(random());
})





gridMaker('black');










