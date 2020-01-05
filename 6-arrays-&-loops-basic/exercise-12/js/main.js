'use strict';

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

// Función checkbox tacha nombre
function validateCheckbox(event) {
  const checkbox = event.currentTarget;
  const label = checkbox.parentElement;

  if (checkbox.checked) {
    label.classList.add('done');
  } else {
    label.classList.remove('done');
  }
}

// Crear lista de tareas
const textTaskNumber = document.querySelector('.taskNumber');
const taskListNode = document.querySelector('.taskList');
textTaskNumber.innerHTML = `Tienes ${tasks.length} tareas`;

for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i];
  const taskNode = document.createElement('li');
  const taskLabel = document.createElement('label');
  const taskHtml = `${task.name} <input type="checkbox" ${task.completed ? 'checked' : ''}>`;
  
  taskLabel.innerHTML = taskHtml;
  taskNode.appendChild(taskLabel);

  if (task.completed) {
    taskLabel.classList.add('done');
  }

  // Enlazar evento click
  const taskCheckboxNode = taskNode.querySelector('input');

  taskCheckboxNode.addEventListener('click', validateCheckbox);

  // Insertamos la tarea en la lista
  taskListNode.appendChild(taskNode);
}

