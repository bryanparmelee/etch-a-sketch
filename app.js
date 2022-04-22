const grid = document.querySelector('.grid-container');
const btn = document.querySelector('.btn');

const gridMaker = (num) => {
    grid.setAttribute('style', `grid: repeat(${num}, 1fr) / repeat(${num}, 1fr);`)
    for (let i = 0; i < num * num; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
}



gridMaker(60);
// btn.addEventListener('click', clear());








