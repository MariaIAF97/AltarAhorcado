var elementos=document.getElementById("btnJugar");
var colores=document.getElementById("btnPausa");
var animales=document.getElementById("btnMenu");
var topics = ["Elementos","Colores","Animales"];
topics[0]=["Llaves","Vaso","Catrina","Gafas"];
topics[1]=["Rojo","Morado","Naranja","Azul"];
topics[2]=["Leon","Elefante","Ternero","Cabra"];

var chosenTopic=topics[0];
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