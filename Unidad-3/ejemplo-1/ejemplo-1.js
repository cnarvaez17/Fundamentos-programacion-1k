/*
Declaración de la variable
*/
var title = document.querySelector('h1');
title.addEventListener('click', updateName);

//Esto es una función
function updateName() {
    var name = prompt('Nombre del jugador');
    title.textContent = 'Jugador 1: ' + name;
}