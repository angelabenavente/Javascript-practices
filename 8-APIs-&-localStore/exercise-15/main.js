'use strict';
const elementMain = document.querySelector('main');
const form = document.querySelector('form');
const input = document.querySelector('#input');
let elementsH2;

function init() {
  fetch('https://beta.adalab.es/Easley-ejercicios-de-fin-de-semana/data/palettes.json')
    .then(response => response.json())
    .then(data => {
      paintPalettes(data)
      elementsH2 = document.querySelectorAll('.palette-title');
      console.log(elementsH2);
    }
  )
}

const paintPalettes = (data) => {
  const dataPalettes = data.palettes;
  for(let singlePalette of dataPalettes) {
    const container = document.createElement('div');
    const h2 = document.createElement('h2');
    const ul = document.createElement('ul');
    const paletteColors = singlePalette.colors;
    for(let color of paletteColors) {
      const li = document.createElement('li');
      li.style.backgroundColor = `#${color}`;
      ul.appendChild(li);
    }
    h2.innerHTML = singlePalette.name;
    h2.classList.add('palette-title');
    container.appendChild(h2);
    container.appendChild(ul);
    elementMain.appendChild(container);
    container.addEventListener('click', selectedColorHandler);
  }
}

function selectedColorHandler(event) {
 event.currentTarget.classList.toggle('selected');
}

window.addEventListener('load', init);

function searchInputHandler(event) {
const inputValue = event.target.value.toLowerCase();
  for(let singleH2 of elementsH2) {
    if(singleH2.innerHTML.toLowerCase().indexOf(inputValue) !== -1) {
      singleH2.closest('main > div').classList.remove('hidden');
    } else {
      singleH2.closest('main > div').classList.add('hidden');
    }
  }
}

input.addEventListener('keyup', searchInputHandler )