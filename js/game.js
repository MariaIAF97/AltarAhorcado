
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

function choseCatrina(e){
  
}