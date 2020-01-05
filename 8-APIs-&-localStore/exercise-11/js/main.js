'use strict';

const input = document.querySelector(".person");
const sumbitNode = document.querySelector(".submit");
const UlNode = document.querySelector("ul");

function getPersonage() {
  let inputValue = input.value;
  fetch(`https://swapi.co/api/people/?search=${inputValue}`)
    .then(response => response.json())
    .then(data => {
      const persons = data.results;

      for(const person of persons) {
        let name = person.name;
        let gender = person.gender;
        const li = document.createElement('li')
        li.innerHTML = `Nombre: ${name}. Género: ${gender}.`;
        UlNode.appendChild(li);
        console.log(name);
      }
    });
}

sumbitNode.addEventListener("click", getPersonage);


