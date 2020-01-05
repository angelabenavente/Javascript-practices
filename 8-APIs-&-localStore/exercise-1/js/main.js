'use strict';

const text = document.querySelector(".text");
const personName = document.querySelector(".person");
const lastName = document.querySelector(".lastName");

let person = [];

function pushToArray() {
  person[0] = personName.value;
  person[1] = lastName.value;
  let values = person[0] + ' ' + person[1];
  text.innerHTML = values;
  localStorage.setItem('person', JSON.stringify(person));
}
lastName.addEventListener('change', pushToArray)


function saveThings() {
  const savedPerson = JSON.parse(localStorage.getItem('person'));
  text.innerHTML = savedPerson[0] + ' ' + savedPerson[1];
}

window.addEventListener('load', saveThings);
