function play(seletor) {
    document.querySelector(seletor).play();
}

function pause(seletor) {
    document.querySelector(seletor).pause();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let index = 0; index < listaDeTeclas.length; index++) {
    
    const tecla = listaDeTeclas[index];
    const teclap = tecla.classList[1];
    const idAudio = `#musica_${teclap}`;

    tecla.onclick = function () {
        pause(idAudio);
    }

    tecla.onclick = function () {
        play(idAudio);
    }
}


for (let index = 0; index < listaDeTeclasp.length; index++) {
    
    const tecla = listaDeTeclasp[index];
    const teclap = tecla.classList[1];
    const idAudio = `#musica_${teclap}`;

    tecla.onclick = function () {
        pause(idAudio);
    }
}