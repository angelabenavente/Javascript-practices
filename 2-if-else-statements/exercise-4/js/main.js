'use strict';

const dogAge = 4;

const firstYear = 15;

const secondYear = firstYear + 9;

const thirdOrMoreYears = ((dogAge - 2) * 5) + secondYear;


if (dogAge === 1) {
  console.log(`El perrito tiene ${firstYear} años humanos. Trátalo bien, la adolescencia es una edad difícil.`);
} else if (dogAge > 1 && dogAge < 3) {
  console.log(`El perrito tiene ${secondYear} años humanos. Dale chuches.`);
} else if (dogAge >= 3){
  console.log(`El perrito tiene ${thirdOrMoreYears} años humanos. Quiérele mucho.`);
} else {
  console.log(`Dime los años de tu perro`);
}

