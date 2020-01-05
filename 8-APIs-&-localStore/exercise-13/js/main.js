'use strict';

const text = document.querySelector(".text");
const input = document.querySelector(".person");

function prinText() {
  let inputText = input.value;
  text.innerHTML = inputText;
  let name = text.innerHTML;
  localStorage.setItem('name', JSON.stringify(name));  
}

input.addEventListener('keyup', prinText);

function saveThings() {
  const savedName = JSON.parse(localStorage.getItem('name'));
  text.innerHTML = savedName;
  input.value = savedName;
}

window.addEventListener('load', saveThings);

