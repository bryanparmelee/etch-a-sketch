const grid = document.querySelector('.grid-container');

const gridMaker = (num) => {
    let html = '';
    const cell = '<div class="cell"></div>';
    html += cell.repeat(num * num);
    grid.innerHTML = html;
}

gridMaker(16);