'use strict';

const times = [56, 9, 45, 28, 35];
const averageTimes = times.reduce((acc, number) => (acc + number))/ times.length;

/*

Otra manera sería usando el siguiente ejemplo:
var arr = [129, 139, 155, 176];
    
function reducer(acc, value, index, array) {

  var calculatedValue = acc + value;

  if (index === array.length - 1) {
    return calculatedValue / array.length;
  }

  return calculatedValue;
}

var result = arr.reduce(reducer, 0);

console.log(result);

*/

console.log(averageTimes);



