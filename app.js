const grid = document.querySelector('.grid-container');
const btn = document.querySelector('.btn');
const num = 30;

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
        gridMaker(num);
    }

gridMaker(num);








