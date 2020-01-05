'use strict';

const adalaber1 = {};
adalaber1.name = 'Susana',
adalaber1.age = 34,
adalaber1.profession = 'periodista';

const adalaber2 = {};
adalaber2.name = 'Rocío',
adalaber2.age = 25,
adalaber2.profession = 'actriz',

function showAdalaber(adalaber) {
  return `Mi nombre es ${adalaber.name}, tengo ${adalaber.age} años y soy ${adalaber.profession}.`;
};

const textElement = document.querySelector('.text');

textElement.innerHTML = `
  <p>${showAdalaber(adalaber1)}</p>
  <p>${showAdalaber(adalaber2)}</p>
`;