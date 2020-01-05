'use strict';

const teachers = document.querySelector('.teachers');

function changeColor(event) {
  if (event.target === event.currentTarget) { // Hemos hecho click en el elemento .teachers (ul)
    return; // No ejecutar el resto de la función
  }

  const isTeacher = event.target.classList.contains('teacher');
  const chosenTeacher = isTeacher ? event.target : event.target.parentElement;

  // event.stopPropagation();

  chosenTeacher.classList.toggle('teacher--selected');

  if (chosenTeacher.classList.contains('teacher--selected')) {
    chosenTeacher.querySelector('.favorite').innerHTML = 'Quitar';  
  } else {
    chosenTeacher.classList.remove('teacher--selected');
    chosenTeacher.querySelector('.favorite').innerHTML = 'Añadir';
  }
}

teachers.addEventListener('click', changeColor);


