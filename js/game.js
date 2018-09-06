var topics = ["Elementos", "Colores", "Animales"];
topics[0] = ["Llaves", "Vaso", "Catrina", "Gafas"];
topics[1] = ["Rojo", "Morado", "Naranja", "Azul"];
topics[2] = ["Leon", "Elefante", "Ternero", "Cabra"];
var categorias = new Array();
var oculta = [];
var src;
var errors;
var cont;
var buttons = document.getElementsByClassName('letra');
var chosenTopic;
var chosenCategory;
var chosenCatrina;
var palabra = "";
var rand;
var seleccionarPalabra;
var btnElemento = document.getElementById("elemento");
var btnColor = document.getElementById("color");
var btnAnimal = document.getElementById("animal");
var btnCatrina1 = document.getElementById("cara1");
var btnCatrina2 = document.getElementById("cara2");
var btnCatrina3 = document.getElementById("cara3");


//Select Category
btnElemento.addEventListener("click", function (e) {
  //alert("La categoría escogida es Elementos");
  chosenCategory = "Elementos";
  chosenTopic = topics[0];
});
btnElemento.addEventListener('click', changeScreen);

btnColor.addEventListener("click", function (e) {
  chosenCategory = "Colores";
  chosenTopic = topics[1];
});
btnColor.addEventListener('click', changeScreen);

btnAnimal.addEventListener("click", function (e) {
  chosenCategory = "Animales";
  chosenTopic = topics[2];
});
btnAnimal.addEventListener('click', changeScreen);


//Select catrina
btnCatrina1.addEventListener("click", function (e) {
  chosenCatrina = 1;
});
btnCatrina1.addEventListener('click', changeScreen);

btnCatrina2.addEventListener("click", function (e) {
  chosenCatrina = 2;

});
btnCatrina2.addEventListener('click', changeScreen);

btnCatrina3.addEventListener("click", function (e) {
  chosenCatrina = 3;
});
btnCatrina3.addEventListener('click', changeScreen);




function inicio() {
  generaPalabra();
  errors = 0;
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
  rand = (Math.random()*3).toFixed(0);
  if(chosenCategory == "Elementos"){
     console.log(topics[0][rand].toUpperCase());
  }
  if(chosenCategory == "Colores"){
    console.log(topics[1][rand].toUpperCase());
 }
 if(chosenCategory == "Animales"){
  console.log(topics[2][rand].toUpperCase());
}
}

function intento(letra) {
  document.getElementById(letra).hidden = true;
  if (palabra.indexOf(letra) != -1) {
    for (var i = 0; i < palabra.length; i++) {
      if (palabra[i] == letra) oculta.push(letra);
    }
    console.log("Acierto");
    console.log(oculta.length);
    var letters = document.getElementsByClassName(letra.toLowerCase());
    for (var i = 0; i < letters.length; i++) {
      if (!letters[i].classList.contains('animation')) {
        letters[i].style.display = "block";
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
    if (cont == 0 && chosenCatrina==1) {
      document.getElementById("fail7A").style.visibility = "visible";
    }
    if (cont == 0 && chosenCatrina==2) {
      document.getElementById("fail7B").style.visibility = "visible";
    }
    if (cont == 0 && chosenCatrina==3) {
      document.getElementById("fail7C").style.visibility = "visible";
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
  if (oculta.length == palabra.length) {
    console.log("Ganó");
    //document.getElementById("msg-final").innerHTML = "GANASTE";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    puntosFinales = oculta.length * 3456;
    var puntajeMayor = localStorage.getItem('puntajeMayor') != null ? localStorage.getItem('puntajeMayor') : 0;
    var puntajeMedio1 = localStorage.getItem('puntajeMedio1') != null ? localStorage.getItem('puntajeMedio1') : 0;
    var puntajeMedio2 = localStorage.getItem('puntajeMedio2') != null ? localStorage.getItem('puntajeMedio2') : 0;
    var puntajeMenor = localStorage.getItem('puntajeMenor') != null ? localStorage.getItem('puntajeMenor') : 0;

    if (puntajeMayor < puntosFinales) {
      localStorage.setItem('puntajeMayor', puntosFinales);
    }
    if (puntajeMedio1 < puntosFinales && puntajeMayor > puntosFinales) {
      localStorage.setItem('puntajeMedio1', puntosFinales);
    }
    if (puntajeMedio2 < puntosFinales && puntajeMedio1 > puntosFinales) {
      localStorage.setItem('puntajeMedio2', puntosFinales);
    }
    if (puntajeMenor < puntosFinales && puntajeMedio2 > puntosFinales) {
      localStorage.setItem('puntajeMenor', puntosFinales);
    }

  } else if (cont == 0) {
    console.log("Perdió");
    //document.getElementById("msg-final").innerHTML = "PERDISTE";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    puntosFinales = oculta.length * 3456;
    var puntajeMayor = localStorage.getItem('puntajeMayor') != null ? localStorage.getItem('puntajeMayor') : 0;
    var puntajeMedio1 = localStorage.getItem('puntajeMedio1') != null ? localStorage.getItem('puntajeMedio1') : 0;
    var puntajeMedio2 = localStorage.getItem('puntajeMedio2') != null ? localStorage.getItem('puntajeMedio2') : 0;
    var puntajeMenor = localStorage.getItem('puntajeMenor') != null ? localStorage.getItem('puntajeMenor') : 0;

    if (puntajeMayor < puntosFinales) {
      localStorage.setItem('puntajeMayor', puntosFinales);
    }
    if (puntajeMedio1 < puntosFinales && puntajeMayor > puntosFinales) {
      localStorage.setItem('puntajeMedio1', puntosFinales);
    }
    if (puntajeMedio2 < puntosFinales && puntajeMedio1 > puntosFinales) {
      localStorage.setItem('puntajeMedio2', puntosFinales);
    }
    if (puntajeMenor < puntosFinales && puntajeMedio2 > puntosFinales) {
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