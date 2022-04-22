const grid = document.querySelector('.grid-container');
const btn = document.querySelector('#btn');

const gridMaker = (num) => {
    let html = '';
    const cell = '<div class="cell"></div>';
    html += cell.repeat(num * num);
    grid.innerHTML = html;
}



gridMaker(16);


const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
    cell.classList.add('hover');
    })
    cell.addEventListener('mousedown', () => {
        cell.classList.remove('hover');
    }
    )
});

const erase = () => {
    cells.forEach((cell) => {
        cell.classList.remove('hover');
    })
}

btn.addEventListener('click', erase());