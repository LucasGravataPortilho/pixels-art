function colorTask(cor) {
    let paleta = document.getElementById('color-palette');
    let corNova = document.createElement('div');
    corNova.className = 'color';
    corNova.style.backgroundColor = cor;
    paleta.appendChild(corNova);
}

const buscandoCores = localStorage.getItem('colorPalette');
const trazendoCores = JSON.parse(buscandoCores);

colorTask('black');
colorTask(buscandoCores !== null ? trazendoCores['corAleatoria'] : 'blue');
colorTask(buscandoCores !== null ? trazendoCores['corAleatoria2'] : 'red');
colorTask(buscandoCores !== null ? trazendoCores['corAleatoria3'] : 'green');

function generateColor() {
    const letras = '0123456789ABCDEF';
    let colorzao = '#';

    for (let x = 0; x < 6; x += 1) {
        colorzao += letras[Math.floor(Math.random() * 16)];
    }

    return colorzao;
}

function generateRandomColor() {
    let cores = document.querySelectorAll('.color');
    let botaoRandom = document.querySelector('#button-random-color');

    if(localStorage.getItem('colorPalette') === null) {
        localStorage.setItem('colorPalette', JSON.stringify({corAleatoria: 'blue', corAleatoria2: 'red', corAleatoria3: 'green'}));
    }

    botaoRandom.addEventListener('click', function() {
        let cores1 = [];
        for (let i = 1; i < cores.length; i += 1) {
            const randomColor = generateColor();
            cores[i].style.backgroundColor = randomColor;
            cores1.push(randomColor);
        }

        localStorage.setItem('colorPalette', JSON.stringify({corAleatoria: cores1[0], corAleatoria2: cores1[1], corAleatoria3:cores1[2]}));

    })
    
}

generateRandomColor();


function selectedColor() {
    let corSelecionada = document.querySelector('.color');
    corSelecionada.classList.add('selected');
}

selectedColor();

function activeColor() {
    let cores = document.querySelectorAll('.color');
    cores[0].className = 'color selected'

    cores.forEach((cor)=> {
        cor.addEventListener('click', ({target}) => {
            let selecionada = document.querySelector('.selected');
            selecionada.className = 'color';
            target.className = 'color selected';
        })
    })
}

activeColor();

function corNoQuadro() {
    let cores = document.querySelectorAll('.color');
    let pixels = document.querySelectorAll('.pixel');
    const getColors = localStorage.getItem('pixelBoard');
    const coresSalvasQuadro = JSON.parse(getColors);

    pixels.forEach((pixel, index)=> {
        pixel.style.backgroundColor = coresSalvasQuadro?.colors[index] || 'white';
        pixel.addEventListener('click', function(event) {
            for(let i = 0; i < cores.length; i += 1) {
                if(cores[i].classList.contains('selected')) {
                    event.target.style.backgroundColor = cores[i].style.backgroundColor;
                }
            }
            saveDrawing();
        })
    })
}

corNoQuadro();

function clearPixel() {
    let pixels = document.querySelectorAll('.pixel');
    let botaoLimpar = document.getElementById('clear-board');

    botaoLimpar.addEventListener('click', function() {
        for(let i = 0; i < pixels.length; i += 1) {
            pixels[i].style.backgroundColor = 'white';
        }
        saveDrawing();
    })
}

clearPixel();

function saveDrawing() {
    let pixels = document.querySelectorAll('.pixel');
    let pixelsArray = [...pixels];
    let colors = [];
    let colorsWhite = [];
    colors = pixelsArray.map(pixel => {
        return pixel.style.backgroundColor;
    })
    localStorage.setItem('pixelBoard', JSON.stringify({colors:colors}));

    if(clearPixel()) {
        colorsWhite = pixelsArray.map(pixel => {
            return pixel.style.backgroundColor = 'white';
        })
        localStorage.setItem('pixelBoard', JSON.stringify({colors:colorsWhite}));
    }
}

saveDrawing();

// -----------------------------------------------
// function generateMatriz() {
//     let botaoGerar = document.getElementById('generate-board');
//     let input = document.getElementById('board-size')
//     let pixelBoard = document.querySelector('#pixel-board');
//     let valor = input.value;

//     botaoGerar.addEventListener('click', function() {

//     })
// }

// colorTask(trazendoCores?.corAleatoria || 'blue');
// colorTask(trazendoCores?.corAleatoria2 || 'red');
// colorTask(trazendoCores?.corAleatoria3 || 'green');
// colorTask(buscandoCores !== null ? trazendoCores.corAleatoria : 'blue');
// colorTask(buscandoCores !== null ? trazendoCores.corAleatoria2 : 'red');
// colorTask(buscandoCores !== null ? trazendoCores.corAleatoria3 : 'green');