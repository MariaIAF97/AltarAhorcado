
var topics = ["Elementos", "Colores", "Animales"];
topics[0] = ["Llaves", "Vaso", "Catrina", "Gafas"];
topics[1] = ["Rojo", "Morado", "Naranja", "Azul"];
topics[2] = ["Leon", "Elefante", "Ternero", "Cabra"];
var oculta = [];
var src;
var errors;
var cont;
var buttons = document.getElementsByClassName('letra');


var chosenTopic;
//Select Category
var selectCat = function () {
  if (chosenTopic === topics[0]) {
    alert("La categoría escogida es Elementos");
  } else if (chosenTopic === topics[1]) {
    alert("La categoría escogida es Colores");
  } else if (chosenTopic === topics[2]) {
    alert("La categoría escogida es Animales");
  }
}


var palabras = [["atlantico", "Un océano"], ["ordenador", "Una máquina"], ["laurel", "Un árbol"], ["plaza", "Espacio público"], ["rueda", "Gran invento"], ["cereza", "Una fruta"], ["petanca", "Un juego"], ["higuera", "Un árbol"], ["everest", "Un monte"], ["relampago", "Antecede al trueno"], ["jirafa", "Un animal"], ["luxemburgo", "Un país"], ["uruguay", "Un país"], ["ilustracion", "Representación gráfica"], ["excursion", "Actividad en la naturaleza"], ["empanadilla", "De la panadería"], ["pastel", "De la pastelería"], ["colegio", "Lugar para estudiar"], ["carrera", "Competición"], ["mermelada", "Confitura"]];
var palabra = "";
var rand;


function inicio() {
  generaPalabra();
  errors = 0;
  var palabras = [["atlantico", "Un océano"], ["ordenador", "Una máquina"], ["laurel", "Un árbol"], ["plaza", "Espacio público"], ["rueda", "Gran invento"], ["cereza", "Una fruta"], ["petanca", "Un juego"], ["higuera", "Un árbol"], ["everest", "Un monte"], ["relampago", "Antecede al trueno"], ["jirafa", "Un animal"], ["luxemburgo", "Un país"], ["uruguay", "Un país"], ["ilustracion", "Representación gráfica"], ["excursion", "Actividad en la naturaleza"], ["empanadilla", "De la panadería"], ["pastel", "De la pastelería"], ["colegio", "Lugar para estudiar"], ["carrera", "Competición"], ["mermelada", "Confitura"]];
  var palabra = "";
  var rand;
  var cont = 7;
}

function inicio() {
    generaPalabra();
    cont = 7;
}
function generaPalabra() {
  palabra = "ELEFANTE";
  console.log(palabra);
}

function intento(letra) {
  document.getElementById(letra).hidden = true;
  if(palabra.indexOf(letra) != -1) {
    for(var i=0; i<palabra.length; i++) {
      if(palabra[i]==letra) oculta.push(letra);
    }
    console.log("Acierto");
    console.log(oculta.length);
    var letters=document.getElementsByClassName(letra.toLowerCase());
    for(var i = 0; i < letters.length; i++){
      if(!letters[i].classList.contains('animation')){
        letters[i].style.display="block";
        letters[i].classList.add('animation');
      }
    } 
  } else {
    cont--;
    console.log(cont);
    console.log("Fallo");
    errors++;
    if (cont == 6) {
       document.getElementById("fail1").style.visibility = "visible";
     }
     if (cont == 5) {
       document.getElementById("fail2").style.visibility = "visible";
     }
     if (cont == 4) {
       document.getElementById("fail3").style.visibility = "visible";
     }
     if (cont == 3) {
       document.getElementById("fail4").style.visibility = "visible";
     }
     if (cont == 2) {
       document.getElementById("fail5").style.visibility = "visible";
     }
     if (cont == 1) {
       document.getElementById("fail6").style.visibility = "visible";
     }
     if (cont == 0) {
       document.getElementById("fail7").style.visibility = "visible";
     }
  }
  compruebaFin();
}

/*function choseTopic(e){
  item=e.target;
  if(item.getAttribute('clasif')=="colors"){
    chosenTopic=topics[1][Math.floor(Math.random()*topics[1].length)];
  }
  if(item.getAttribute('clasif')=="elements"){
    chosenTopic=topics[0][Math.floor(Math.random()*topics[0].length)];
  }
  if(item.getAttribute('clasif')=="animals"){
    chosenTopic=topics[2][Math.floor(Math.random()*topics[2].length)];
  }
}*/

function choseCatrina(e) {
  item = e.target;
  if (item.getAttribute('clasif') == "catrina1") {
    src = "img/seleccion-catrina-1.jpg";
  }
  if (item.getAttribute('clasif') == "catrina2") {
    src = "img/seleccion-catrina-2.jpg";
  }
  if (item.getAttribute('clasif') == "catrina3") {
    src = "img/seleccion-catrina-3.jpg";
  }
}

function compruebaFin() {
  if( oculta.length == palabra.length) {
    console.log("Ganó");
    //document.getElementById("msg-final").innerHTML = "GANASTE";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    puntosFinales=oculta.length*3456;
    var puntajeMayor=localStorage.getItem('puntajeMayor')!=null?localStorage.getItem('puntajeMayor'):0;
    var puntajeMedio1=localStorage.getItem('puntajeMedio1')!=null?localStorage.getItem('puntajeMedio1'):0;
    var puntajeMedio2=localStorage.getItem('puntajeMedio2')!=null?localStorage.getItem('puntajeMedio2'):0;
    var puntajeMenor=localStorage.getItem('puntajeMenor')!=null?localStorage.getItem('puntajeMenor'):0;

    if(puntajeMayor < puntosFinales){
      localStorage.setItem('puntajeMayor', puntosFinales);
    }
    if(puntajeMedio1 < puntosFinales && puntajeMayor > puntosFinales){
      localStorage.setItem('puntajeMedio1', puntosFinales);
    }
    if(puntajeMedio2 < puntosFinales && puntajeMedio1 > puntosFinales){
      localStorage.setItem('puntajeMedio2', puntosFinales);
    }
    if(puntajeMenor < puntosFinales && puntajeMedio2 > puntosFinales){
      localStorage.setItem('puntajeMenor', puntosFinales);
    }
    
  }else if( cont == 0 ) {
    console.log("Perdió");
    //document.getElementById("msg-final").innerHTML = "PERDISTE";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    puntosFinales=oculta.length*3456;
    var puntajeMayor=localStorage.getItem('puntajeMayor')!=null?localStorage.getItem('puntajeMayor'):0;
    var puntajeMedio1=localStorage.getItem('puntajeMedio1')!=null?localStorage.getItem('puntajeMedio1'):0;
    var puntajeMedio2=localStorage.getItem('puntajeMedio2')!=null?localStorage.getItem('puntajeMedio2'):0;
    var puntajeMenor=localStorage.getItem('puntajeMenor')!=null?localStorage.getItem('puntajeMenor'):0;

    if(puntajeMayor < puntosFinales){
      localStorage.setItem('puntajeMayor', puntosFinales);
    }
    if(puntajeMedio1 < puntosFinales && puntajeMayor > puntosFinales){
      localStorage.setItem('puntajeMedio1', puntosFinales);
    }
    if(puntajeMedio2 < puntosFinales && puntajeMedio1 > puntosFinales){
      localStorage.setItem('puntajeMedio2', puntosFinales);
    }
    if(puntajeMenor < puntosFinales && puntajeMedio2 > puntosFinales){
      localStorage.setItem('puntajeMenor', puntosFinales);
    }
  }
  
}

/*function intento(letra) {
  document.getElementById(letra).disabled = true;
  if(chosenTopic.indexOf(letra) != -1) {
    for(var i=0; i<chosenTopic.length; i++) {
      if(chosenTopic[i]==letra) oculta[i] = letra;
    }
    console.log("Acierto");
  }else{
    console.log("Fallo")
  }
}*/