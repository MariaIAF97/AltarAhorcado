
var topics = ["Elementos","Colores","Animales"];
topics[0]=["Llaves","Vaso","Catrina","Gafas"];
topics[1]=["Rojo","Morado","Naranja","Azul"];
topics[2]=["Leon","Elefante","Ternero","Cabra"];
var oculta = [];
var src;


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

function choseCatrina(e){
  item=e.target;
  if(item.getAttribute('clasif')=="catrina1"){
    src="img/seleccion-catrina-1.jpg";
  }
  if(item.getAttribute('clasif')=="catrina2"){
    src="img/seleccion-catrina-2.jpg";
  }
  if(item.getAttribute('clasif')=="catrina3"){
    src="img/seleccion-catrina-3.jpg";
  }
}

function intento(letra) {
  document.getElementById(letra).disabled = true;
  if(chosenTopic.indexOf(letra) != -1) {
    for(var i=0; i<chosenTopic.length; i++) {
      if(chosenTopic[i]==letra) oculta[i] = letra;
    }
    console.log("Acierto");
  }else{
    console.log("Fallo")
  }
}
