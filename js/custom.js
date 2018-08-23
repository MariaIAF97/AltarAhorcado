window.onload= init;
var instructions, body;
var visible=false;

function init(){
    instructions=document.getElementById("instructions-text");
    body=document.getElementById("screen");

    body.addEventListener('click', showText);

}

function showText(){
    if(visible==false){
        instructions.classList.add('show');
    }
}