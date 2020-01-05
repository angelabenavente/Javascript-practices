'use strict';

let li = document.querySelectorAll('.teacher');

function changeColor () {
  event.currentTarget.classList.toggle('teacher--selected');
  const chosenTeacher = event.currentTarget;

  if (chosenTeacher.classList.contains('teacher--selected')) {
    chosenTeacher.querySelector('.favorite').innerHTML = 'Quitar';
    
  } else {
    chosenTeacher.classList.remove('teacher--selected');
    chosenTeacher.querySelector('.favorite').innerHTML = 'Añadir';
  }
}

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener('click', changeColor); }


