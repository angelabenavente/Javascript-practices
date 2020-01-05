'use strict';

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
  if (counter  12) {
    clearInterval(incrementAndShowCounter);
  }
};

setInterval(incrementAndShowCounter, 1000, 12);
