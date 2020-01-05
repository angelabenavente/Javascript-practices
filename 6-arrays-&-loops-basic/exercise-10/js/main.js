'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];
let pairNumbers = [];

function bestLostNumber() {
  for(let i=0; i<lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 == 0) {
    pairNumbers.push(lostNumbers[i]);
    }
  }
  console.log(pairNumbers);
}

bestLostNumber();