window.onload = init;
var instructions, body, unloaded_candles, loaded_candles, loading_screen, themes, menu;
var btnInstructions, instructions_section, toMenu, puntuacion, btnPuntuacion, btnInicio, btnThemes;
var btnCatrinas, catrinas_screen, game_screen, themeToCatrina, btnPlay, gameToMenu, credits, btnCredits;
var infoCatrinas,infoTemas;
var btnGanaste,btnPerdiste,btnPuntos;
var inputs;
var sc1, sc2, sc3, sc4;
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
    infoCatrinas=document.getElementById("infoCatrinas");
    infoTemas=document.getElementById("infoTemas");
    inputs=document.getElementsByTagName('input');
    instructions_section.addEventListener('click', showText);
    loading_screen = document.getElementById('loading');
    themes = document.getElementById('themes');
    puntuacion = document.getElementById('puntuacion');
    btnPuntuacion = document.getElementById('btnPuntuacion');
    btnCredits = document.getElementById('btnCreditos');
    credits = document.getElementById('credits');
    btnCatrinas = document.getElementById('btnCatrinas');
    game_screen = document.getElementById('game');
    gameToMenu = document.getElementById('gameToMenu');
    btnThemes = document.getElementById('btnTemas');
    btnInicio = document.getElementById('btnInicioJuego');
    catrinas_screen = document.getElementById('catrinas');
    menu = document.getElementById('principal');
    unloaded_candles = document.getElementById("unloaded");
    loaded_candles = document.getElementById("loaded");
    btnInfoCatrinas=document.getElementById("btnCatrinas");
    btnInfoTemas=document.getElementById("btnTemas");
    btnInstructions.addEventListener('click', changeScreen);
    btnPuntuacion.addEventListener('click', changeScreen);
    btnInicio.addEventListener('click', changeScreen);
    btnThemes.addEventListener('click', changeScreen);
    btnCredits.addEventListener('click', changeScreen);
    btnCatrinas.addEventListener('click', changeScreen);
    loaded_candles.addEventListener('animationend', principalMenu);
    menu.addEventListener('animationend', dissapear);
    instructions_section.addEventListener('animationend', dissapear);
    game_screen.addEventListener('animationend', dissapear);
    themes.addEventListener('animationend', dissapear);
    credits.addEventListener('animationend', dissapear);
    infoCatrinas.addEventListener('animationend', dissapear);
    infoTemas.addEventListener('animationend', dissapear);
    catrinas_screen.addEventListener('animationend', dissapear);
    puntuacion.addEventListener('animationend', dissapear);
    loading_screen.addEventListener('animationend', loadingScreentoInitScreen);
    loading_screen.addEventListener('animationstart', loadingScreentoInitScreenFade);
    loading();

    //Catrina
    document.getElementById("fail7A").style.visibility="hidden";
    document.getElementById("fail7B").style.visibility="hidden";
    document.getElementById("fail7C").style.visibility="hidden";
    document.getElementById("fail6").style.visibility="hidden";
    document.getElementById("fail5").style.visibility="hidden";
    document.getElementById("fail4").style.visibility="hidden";
    document.getElementById("fail3").style.visibility="hidden";
    document.getElementById("fail2").style.visibility="hidden";
    document.getElementById("fail1").style.visibility="hidden";

    //Puntaje
    sc1=document.getElementById('score1');
    sc2=document.getElementById('score2');
    sc3=document.getElementById('score3');
    sc4=document.getElementById('score4');

    //Ganaste o perdiste
    document.getElementById("ganaste").style.visibility="hidden";
    document.getElementById("perdiste").style.visibility="hidden";
    document.getElementById("puntos").style.visibility="hidden";

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
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled=false;
    }
}

function changeScreen(){
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled=true;
    }
    if(this.classList.contains('toInstructions')){
        menu.classList.remove('animationIn');
        menu.classList.add('animationOut');
        instructions_section.style.display = "block";
        instructions_section.classList.add('animationIn');
    }
    if(this.classList.contains('toThemes')){
        menu.classList.remove('animationIn');
        menu.classList.add('animationOut');
        themes.style.display = "block";
        themes.classList.add('animationIn');
    }
    if(this.classList.contains('toCredits')){
        menu.classList.remove('animationIn');
        menu.classList.add('animationOut');
        credits.style.display = "block";
        credits.classList.add('animationIn');
    }
    if(this.classList.contains('toCatrinas')){
        if (this.id == "btnCatrinas") {
            menu.classList.remove('animationIn');
            menu.classList.add('animationOut');
        } else {
            themes.classList.remove('animationIn');
            themes.classList.add('animationOut');
        }
        catrinas_screen.style.display = "block";
        catrinas_screen.classList.add('animationIn');
    }
    if(this.classList.contains('toScore')){
        menu.classList.remove('animationIn');
        menu.classList.add('animationOut');
        puntuacion.style.display = "block";
        puntuacion.classList.add('animationIn');
        var puntajeMayor=localStorage.getItem('puntajeMayor')!=null?localStorage.getItem('puntajeMayor'):0;
        var puntajeMedio1=localStorage.getItem('puntajeMedio1')!=null?localStorage.getItem('puntajeMedio1'):0;
        var puntajeMedio2=localStorage.getItem('puntajeMedio2')!=null?localStorage.getItem('puntajeMedio2'):0;
        var puntajeMenor=localStorage.getItem('puntajeMenor')!=null?localStorage.getItem('puntajeMenor'):0;
        sc1.innerHTML=puntajeMayor;
        sc2.innerHTML=puntajeMedio1;
        sc3.innerHTML=puntajeMedio2;
        sc4.innerHTML=puntajeMenor;
    }
    if(this.classList.contains('toGame')){
        catrinas_screen.classList.remove('animationIn');
        catrinas_screen.classList.add('animationOut');
        game_screen.style.display = "block";
        game_screen.classList.add('animationIn');
        document.getElementById("temaSeleccionado").innerHTML="Tema seleccionado: "+chosenCategory;
    }
    
    if(this.classList.contains('toInfoCatrinas')){
        menu.classList.remove('animationIn');
        menu.classList.add('animationOut');
        infoCatrinas.style.display = "block";
        infoCatrinas.classList.add('animationIn');
    }
    if(this.classList.contains('toInfoThemes')){
        menu.classList.remove('animationIn');
        menu.classList.add('animationOut');
        infoTemas.style.display = "block";
        infoTemas .classList.add('animationIn');
    }
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