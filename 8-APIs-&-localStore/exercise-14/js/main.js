'use strict';

const body = document.querySelector('body');
const inputBlue = document.querySelector('.inputBlue');
const inputPink = document.querySelector('.inputPink');
const inputs = document.querySelectorAll('input');

function bodyBlue () {
  body.classList.add('bodyBlue');
  body.classList.remove('bodyPink');
  let valor = inputBlue.value;
}

inputBlue.addEventListener('click', bodyBlue);

function bodyPink () {
  body.classList.add('bodyPink');
  body.classList.remove('bodyBlue');
}

inputPink.addEventListener('click', bodyPink);

function check() {
  if(inputPink.checked = true) {
    localStorage.setItem('inputPink', inputPink.checked);
    localStorage.removeItem('inputBlue');
    inputBlue.checked = false;
  } else if(inputBlue.checked = true) {
    localStorage.setItem('inputBlue', inputBlue.checked);	
  } else {
    body.classList.remove('bodyBlue');
    body.classList.remove('bodyPink');
  }

}

check();
