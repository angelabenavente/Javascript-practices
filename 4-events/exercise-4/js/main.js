'use strict';
const myDiv = document.querySelector('.myDiv');

window.onscroll = function() {
  if (window.pageYOffset > 250) {
    myDiv.classList.add('redBackgound');
  } else {
    myDiv.classList.remove('redBackgound');
  }
}

