const grid = document.querySelector('.grid-container');
const btn = document.querySelector('.btn');
const slider = document.querySelector('#range');
const sValue = document.querySelector('#s-value');
// let num = slider.getAttribute('value');

const gridMaker = (num) => {
    grid.setAttribute('style', `grid: repeat(${num}, 1fr) / repeat(${num}, 1fr);`)
    for (let i = 0; i < num * num; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add('hover');
        })
    })
}

const erase = () => {
        let cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            grid.removeChild(cell);
        })
        gridMaker(slider.value);
       
    }

slider.addEventListener('change', (e) => {
    erase();
})

const random = () => {
   let r = Math.floor(Math.random() * 255);
   let g = Math.floor(Math.random() * 255);
   let b = Math.floor(Math.random() * 255);
   return "rgb(" + r + ", " + g + ", " + b + ");";
}

console.log(random());



gridMaker(slider.value);










