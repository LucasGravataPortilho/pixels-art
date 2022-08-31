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