'use strict';

const yearInCourse = 2019;

const moduleYear = yearInCourse % 4;

if (moduleYear === 0) {
  let nextLeapYear = yearInCourse + 4;
  console.log(`${yearInCourse} es un año bisiesto. ${nextLeapYear} será el próximo año bisiesto.`);
} else if (moduleYear === 1) {
  let nextLeapYear = yearInCourse + 3;
  console.log(`${yearInCourse} no es un año bisiesto. ${nextLeapYear} será el próximo año bisiesto`);
} else if (moduleYear === 2) {
  let nextLeapYear = yearInCourse + 2;
  console.log(`${yearInCourse} no es un año bisiesto. ${nextLeapYear} será el próximo año bisiesto.`);
} else if (moduleYear === 3) {
  let nextLeapYear = yearInCourse + 1;
  console.log(`${yearInCourse} no es un año bisiesto. ${nextLeapYear} será el próximo año bisiesto.`);
} else {
  console.log(`Por favor, introduce un año válido`);
}

