function colorTask(cor) {
    let paleta = document.getElementById('color-palette');
    let corNova = document.createElement('div');
    corNova.className = 'color';
    corNova.style.backgroundColor = cor;
    paleta.appendChild(corNova);
}

colorTask('black');
colorTask('blue');
colorTask('red');
colorTask('green');

function generateColor() {
    const letras = '0123456789ABCDEF';
    let colorzao = '#'

    for (let x = 0; x < 6; x += 1) {
        colorzao += letras[Math.floor(Math.random() * 16)];
    }

    return colorzao;
}

console.log(generateColor());

function randomColor() {
    let cores = document.querySelectorAll('.color');
    let botaoRandom = document.querySelector('#button-random-color');

    botaoRandom.addEventListener('click', function() {
        for(let i = 1; i < cores.length; i += 1) {
            cores[i].style.backgroundColor = generateColor()
        }
    })
    
}

randomColor();
