'use strict';

const list = document.querySelector('ul');
const numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i ++) {
  const li = document.createElement('li');
  const liContent = document.createTextNode(numbers[i]);
  li.appendChild(liContent);
  list.appendChild(li);
}

