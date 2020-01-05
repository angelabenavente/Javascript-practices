'use strict';

function getEl (htmlElement) {
  return document.querySelector(htmlElement);
}

const element = getEl('p');
const elementValue = element.innerHTML;
const elementValueNumber = parseInt(elementValue);

function calcIfPair (number) {
  const calcDiv = (number % 2);
  if (calcDiv===0) {
    return true;
  } else {
    return false;
  }
}

const aNumber = calcIfPair (elementValueNumber);

console.log(aNumber);



