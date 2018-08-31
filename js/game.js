
var topics = ["Elementos","Colores","Animales"];
topics[0]=["Llaves","Vaso","Catrina","Gafas"];
topics[1]=["Rojo","Morado","Naranja","Azul"];
topics[2]=["Leon","Elefante","Ternero","Cabra"];


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

function choseTopic(e){
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
}

//Cambios checho (Borrar esto)
var palabras = [["atlantico", "Un océano"], ["ordenador", "Una máquina"], ["laurel", "Un árbol"], ["plaza", "Espacio público"], ["rueda", "Gran invento"], ["cereza", "Una fruta"], ["petanca", "Un juego"], ["higuera", "Un árbol"], ["everest", "Un monte"], ["relampago", "Antecede al trueno"], ["jirafa", "Un animal"], ["luxemburgo", "Un país"], ["uruguay", "Un país"], ["ilustracion", "Representación gráfica"], ["excursion", "Actividad en la naturaleza"], ["empanadilla", "De la panadería"], ["pastel", "De la pastelería"], ["colegio", "Lugar para estudiar"], ["carrera", "Competición"], ["mermelada", "Confitura"]];
var palabra = "";
var rand;
var oculta = [];

function inicio() {
    generaPalabra();
  }

  function generaPalabra() {
    rand = (Math.random() * 19).toFixed(0);
    palabra = palabras[rand][0].toUpperCase();
    console.log(palabra);
  }

  function intento(letra) {
    document.getElementById(letra).disabled = true;
    if(palabra.indexOf(letra) != -1) {
      for(var i=0; i<palabra.length; i++) {
        if(palabra[i]==letra) oculta[i] = letra;
      }
      console.log("Acierto");
    }else{
      console.log("Fallo")
    }
  }