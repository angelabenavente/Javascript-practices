'use strict';

let textSelected = document.getElementById('city');
const firstImage = document.querySelector('.firstImage');
const secondImage = document.querySelector('.secondImage');
const thirdImage = document.querySelector('.thirdImage');

function ShowSelected()
{
/* Para obtener el valor */
let valueSelected = textSelected.value;
console.log(valueSelected);

  if(valueSelected === 'madrid') {
    firstImage.setAttribute('src','./images/madriduno.jpeg');
    secondImage.setAttribute('src','./images/madriddos.jpg');
    thirdImage.setAttribute('src','./images/madridtres.jpeg');
  } else if(valueSelected === 'paris') {
    firstImage.setAttribute('src','./images/parisuno.jpeg');
    secondImage.setAttribute('src','./images/parisdos.jpeg');
    thirdImage.setAttribute('src','./images/paristres.jpeg');
  }  else if(valueSelected === 'nuevaYork') {
    firstImage.setAttribute('src','./images/nuevayorkuno.jpeg');
    secondImage.setAttribute('src','./images/nuevayorkdos.png');
    thirdImage.setAttribute('src','./images/nuevayorktres.jpeg');
  }

}

textSelected.addEventListener('change', ShowSelected);

