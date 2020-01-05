'use strict';

function calcIfPair (number) {
  const calcDiv = (number % 2);
  if (calcDiv===0) {
    return true;
  }
  else if (calcDiv !== 0) {
    return false;
  }
}

const aNumber = calcIfPair (34);

console.log(aNumber);
