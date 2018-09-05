window.onload = init;
var instructions, body, unloaded_candles, loaded_candles, loading_screen, themes, menu;
var btnInstructions, instructions_section, toMenu, puntuacion, btnPuntuacion, btnInicio, btnThemes;
var btnCatrinas, catrinas_screen, game_screen, themeToCatrina, btnPlay, gameToMenu, credits, btnCredits;
var isDone = false;
var visible = false;
var lblCategoria;


function init() {

    allTopics = document.getElementsByClassName("theme-selection");

    // for (var i = 0; i < allTopics.length; i++) {
    //     allTopics[i].addEventListener('click', function (e) {
    //         choseTopic(e);
    //     });
    // }

    lblCategoria=document.getElementById("temaSeleccionado");
    instructions = document.getElementById("instructions-text");
    btnInstructions = document.getElementById("btnInstrucciones");
    instructions_section = document.getElementById("instructions");
    toMenu = document.getElementsByClassName("btnToMenu");

    for (var i = 0; i < toMenu.length; i++) {
        toMenu[i].addEventListener('click', backToMenu);
    }

    instructions_section.addEventListener('click', showText);
    loading_screen = document.getElementById('loading');
    themes = document.getElementById('themes');
    puntuacion = document.getElementById('puntuacion');
    btnPuntuacion = document.getElementById('btnPuntuacion');
    btnCredits = document.getElementById('btnCreditos');
    credits = document.getElementById('credits');
    btnCatrinas = document.getElementById('btnCatrinas');
    themeToCatrina = document.getElementById('toCatrina');
    game_screen = document.getElementById('game');
    gameToMenu = document.getElementById('gameToMenu');
    btnPlay = document.getElementById('play');
    btnThemes = document.getElementById('btnTemas');
    btnInicio = document.getElementById('btnInicioJuego');
    catrinas_screen = document.getElementById('catrinas');
    menu = document.getElementById('principal');
    unloaded_candles = document.getElementById("unloaded");
    loaded_candles = document.getElementById("loaded");
    btnInstructions.addEventListener('click', toInstructions);
    themeToCatrina.addEventListener('click', toCatrinas);
    btnPlay.addEventListener('click', toGame);
    btnPuntuacion.addEventListener('click', toPuntuacion);
    btnInicio.addEventListener('click', toThemes);
    btnThemes.addEventListener('click', toThemes);
    btnCredits.addEventListener('click', toCredits);
    btnCatrinas.addEventListener('click', toCatrinas);
    loaded_candles.addEventListener('animationend', principalMenu);
    menu.addEventListener('animationend', dissapear);
    instructions_section.addEventListener('animationend', dissapear);
    game_screen.addEventListener('animationend', dissapear);
    themes.addEventListener('animationend', dissapear);
    credits.addEventListener('animationend', dissapear);
    catrinas_screen.addEventListener('animationend', dissapear);
    puntuacion.addEventListener('animationend', dissapear);
    loading_screen.addEventListener('animationend', loadingScreentoInitScreen);
    loading_screen.addEventListener('animationstart', loadingScreentoInitScreenFade);
    loading();

    //Catrina
    document.getElementById("fail7").style.visibility="hidden";
    document.getElementById("fail6").style.visibility="hidden";
    document.getElementById("fail5").style.visibility="hidden";
    document.getElementById("fail4").style.visibility="hidden";
    document.getElementById("fail3").style.visibility="hidden";
    document.getElementById("fail2").style.visibility="hidden";
    document.getElementById("fail1").style.visibility="hidden";

}

function showText() {
    if (!false) {
        instructions.classList.add('show');
    }
}

function loading() {
    unloaded_candles.classList.add('animation');
    loaded_candles.classList.add('animation');
}

function loadingScreentoInitScreen(event) {
    var element = event.target;
    if (element.id == 'loading') {
        loading_screen.style.display = "none";
    }
}


function loadingScreentoInitScreenFade(event) {
    var element = event.target;
    if (element.id == 'loading') {
        menu.style.display = "block";
        menu.classList.add('animationIn');
    }

}

function principalMenu() {
    loading_screen.classList.add('animation');
}

function dissapear(event) {
    var element = event.target;
    if (element.classList.contains('animationOut')) {
        element.style.display = "none";
        element.classList.remove('animationOut');
        element.classList.remove('animationIn');
    }
}

function toInstructions(event) {
    console.log("prueba");
    menu.classList.remove('animationIn');
    menu.classList.add('animationOut');
    instructions_section.style.display = "block";
    instructions_section.classList.add('animationIn');
}

function toCredits(event) {
    menu.classList.remove('animationIn');
    menu.classList.add('animationOut');
    credits.style.display = "block";
    credits.classList.add('animationIn');
}

function toGame() {
    catrinas_screen.classList.remove('animationIn');
    catrinas_screen.classList.add('animationOut');
    game_screen.style.display = "block";
    game_screen.classList.add('animationIn');
    lblCategoria.innerHTML="Tema seleccionado: "+chosenCategory;
}

function toCatrinas(event) {
    var element = event.target;
    if (element.id == "btnCatrinas") {
        menu.classList.remove('animationIn');
        menu.classList.add('animationOut');
    } else {
        themes.classList.remove('animationIn');
        themes.classList.add('animationOut');
    }
    catrinas_screen.style.display = "block";
    catrinas_screen.classList.add('animationIn');
}

function toPuntuacion() {
    menu.classList.remove('animationIn');
    menu.classList.add('animationOut');
    puntuacion.style.display = "block";
    puntuacion.classList.add('animationIn');
    var puntajeMayor=localStorage.getItem('puntajeMayor')!=null?localStorage.getItem('puntajeMayor'):0;
    var puntajeMedio1=localStorage.getItem('puntajeMedio1')!=null?localStorage.getItem('puntajeMedio1'):0;
    var puntajeMedio2=localStorage.getItem('puntajeMedio2')!=null?localStorage.getItem('puntajeMedio2'):0;
    var puntajeMenor=localStorage.getItem('puntajeMenor')!=null?localStorage.getItem('puntajeMenor'):0;
    document.getElementById('score1').innerHTML=puntajeMayor;
    document.getElementById('score2').innerHTML=puntajeMedio1;
    document.getElementById('score3').innerHTML=puntajeMedio2;
    document.getElementById('score4').innerHTML=puntajeMenor;
}

function toThemes() {
    menu.classList.remove('animationIn');
    menu.classList.add('animationOut');
    themes.style.display = "block";
    themes.classList.add('animationIn');
}

function backToMenu(event) {
    var element = event.target;
    if (element.classList.contains('second')) {
        element.parentElement.parentElement.classList.add('animationOut');
    } else {
        element.parentElement.parentElement.classList.add('animationOut');
    }
    menu.style.display = "block";
    menu.classList.add('animationIn');
}