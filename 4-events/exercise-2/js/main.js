'use strict';

const button = document.querySelector('.button');
let name = document.querySelector('.name').value;

function nameConsole () {
  name = document.querySelector('.name').value;
  console.log(`Hola, ${name}`);
}
button.addEventListener('click', nameConsole);

