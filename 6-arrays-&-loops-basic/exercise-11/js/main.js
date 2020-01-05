'use strict';

let arr = [1, 2, 3];

function get100Numbers() {
  for ( let i = 2; i <= 100 ; i++) {
    arr.push(i);
  }
  console.log(arr.reverse());
}

get100Numbers(arr);

console.log(arr);