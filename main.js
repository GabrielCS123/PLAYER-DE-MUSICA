function play(seletor) {
    document.querySelector(seletor).play();
}

function pause(seletor) {
    document.querySelector(seletor).pause();
}

let proximaMusica = 0;
let tocando = false;


//avancar

const quantidade = document.querySelectorAll('.tecla').length;

function proxima() {

    if (tocando) {

        proximaMusica++;

        if (proximaMusica < quantidade) {

            if (proximaMusica > 0) {
                document.querySelector(`#musica_${proximaMusica - 1}`).pause();
                document.querySelector(`#musica_${proximaMusica - 1}`).currentTime = 0;
                document.querySelector(`#t${proximaMusica - 1}`).classList.remove('ativa');
            }

            play(`#musica_${proximaMusica}`);
            document.querySelector(`#t${proximaMusica}`).classList.add('ativa');

        }

        if (proximaMusica >= quantidade) {

            document.querySelector(`#musica_${proximaMusica - 1}`).pause();
            document.querySelector(`#musica_${proximaMusica - 1}`).currentTime = 0;
            document.querySelector(`#t${proximaMusica - 1}`).classList.remove('ativa');

            proximaMusica = 0;

            play(`#musica_${proximaMusica}`);

            document.querySelector(`#t${proximaMusica}`).classList.add('ativa');
        }
    }

}

document.querySelector('.proxima').onclick = function () {
    proxima();
}

// Voltar

function anterior() {

    if (tocando) {

        if (proximaMusica < 1) {

            document.querySelector(`#musica_${0}`).pause();
            document.querySelector(`#musica_${0}`).currentTime = 0;
            document.querySelector(`#t${0}`).classList.remove('ativa');

            proximaMusica = quantidade;

            play(`#musica_${proximaMusica - 1}`);
            document.querySelector(`#t${proximaMusica - 1}`).classList.add('ativa');
        }

        else {

            document.querySelector(`#musica_${proximaMusica}`).pause();
            document.querySelector(`#musica_${proximaMusica}`).currentTime = 0;
            document.querySelector(`#t${proximaMusica}`).classList.remove('ativa');

            play(`#musica_${proximaMusica-1}`);
            document.querySelector(`#t${proximaMusica-1}`).classList.add('ativa');
        }

        proximaMusica--;

    }
}


document.querySelector('.anterior').onclick = function () {
    anterior();
}

// Play e Pause

function playPause() {

    if (tocando) {
        pause(`#musica_${proximaMusica}`);
        tocando = false;

    } else {
        play(`#musica_${proximaMusica}`);
        document.querySelector(`#t${proximaMusica}`).classList.add('ativa');
        tocando = true;
    }

}

document.querySelector('.play').onclick = function () {
    playPause();
};

// parte que aperta na tela

/*

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

    tocando = true;
}

const listaDeTeclasp = document.querySelectorAll('.teclap');

for (let index = 0; index < listaDeTeclasp.length; index++) {
    
    const tecla = listaDeTeclasp[index];
    const teclap = tecla.classList[1];
    const idAudio = `#musica_${teclap}`;
    
    tecla.onclick = function () {
        pause(idAudio);
    }
}
 */
