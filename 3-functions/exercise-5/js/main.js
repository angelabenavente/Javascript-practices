'use strict';

function getEl(htmlElement) {
  return document.querySelector(htmlElement);
}

const btnEl = getEl('.btn')

console.log(btnEl.innerHTML);