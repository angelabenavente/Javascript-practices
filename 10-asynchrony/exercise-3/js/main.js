'use strict';

const nameInput = document.querySelector('.name');
const lastNameInput = document.querySelector('.lastName');
const mobile = document.querySelector('.mobile');
const selectData = document.querySelector('#data');

const array = [
  { name: 'Marta',
    lastName: 'Gómez',
    mobile: 666666666,
  },
  { name: 'Paco',
  lastName: 'Pérez',
  mobile: 666666660,
  },
  { name: 'Patricia',
  lastName: 'Sanz',
  mobile: 666666661,
  },
]

for (let i = 0; i < array.length; i++) {
  const option = document.createElement('option');
  const name = array[i].name;
  option.innerHTML = name;
  selectData.appendChild(option);
}

function inputContent() {
  let personSelected = selectData.value;
  if(personSelected === 'Marta') {
    nameInput.value = array[0].name;
    lastNameInput.value = array[0].lastName;
    mobile.value = array[0].mobile;
  } else if (personSelected === 'Paco') {
    nameInput.value = array[1].name;
    lastNameInput.value = array[1].lastName;
    mobile.value = array[1].mobile;
  } else if (personSelected === 'Patricia') {
    nameInput.value = array[2].name;
    lastNameInput.value = array[2].lastName;
    mobile.value = array[2].mobile;
  } else {
      nameInput.value = '';
      lastNameInput.value = '';
      mobile.value = '';
    }
}

selectData.addEventListener('change', inputContent);