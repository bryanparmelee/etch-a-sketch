const grid = document.querySelector('.grid-container');
const btn = document.querySelector('.btn');
const slider = document.querySelector('#range');
const clear = document.querySelector('#clear');
const black = document.querySelector('#black');
const rainbow = document.querySelector('#rainbow')
const output = document.querySelector('#output');
const picker = document.querySelector('#picker');

const radios = document.querySelectorAll('input[name="mode"]')

const selectHandler = () => {
    for (const radio of radios) {
        let currentMode;
        if (radio.checked) {
            currentMode = radio.value;
        } 
        if (currentMode === 'black') {
            blackMode();
        } else if (currentMode === 'rainbow') {
            rainbowMode();
        } else if (currentMode === 'pick') {
           pickerMode(); 
        }
    }
}

for (const radio of radios) {
    radio.addEventListener('change', () => { 
        let currentMode;
        if (radio.checked) {
            currentMode = radio.value;
        }
        if (currentMode === 'black') {
            blackMode();
        } else if (currentMode === 'rainbow') {
            rainbowMode();
        } else if (currentMode === 'pick') {
           pickerMode(); 
        }
        output.textContent = `The current mode is ${currentMode}`;
})
}






const random = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
 }

 const rainbowMode = () => {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = random();
        })
    })
 }

 const blackMode = () => {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        })
    })
 }

 const pickerMode = () => {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = picker.value;
        })
    })
 }

 picker.addEventListener('change', pickerMode);

const gridMaker = () => {
    let num = slider.value;
    grid.setAttribute('style', `grid: repeat(${num}, 1fr) / repeat(${num}, 1fr);`)
    for (let i = 0; i < num * num; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }    
  }



const erase = () => {
        let cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
           grid.removeChild(cell);
        })       
}

slider.addEventListener('change', () => {
    erase();
    gridMaker();
    selectHandler();
})

clear.addEventListener('click', () => {
    erase();
    gridMaker();
    selectHandler();
})

// black.addEventListener('click', () => {
//     erase();
//     gridMaker();
//     blackMode();
  
// })

// rainbow.addEventListener('click', () => {
//     erase();
//     gridMaker();
//     rainbowMode();
// })

gridMaker();
selectHandler();










