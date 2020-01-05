'use strict';

const breed = document.querySelector('.text');

function getDogBreed() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
      const breedslist = data.message;
      const listNames = Object.keys(breedslist);
      const listLength = listNames.length;
      return fetch(`https://api.rand.fun/number/integer?max=${listLength}`)
        .then(response => response.json())
        .then(data => {
          const randomNumber = data.result;
          const breedName = (listNames[randomNumber]);
          breed.innerHTML = breedName;
          return fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
            .then(response => response.json())
            .then(data => {
              const img = document.querySelector(".img");
              img.src = data.message;
              img.alt = "Un perro";
            })
        })
    });
}
  
getDogBreed()


/*Para hacer enter y que se envíen los datos

function enterKeyHandler(event) {
 event.preventDefault();
 nombre-función-que-ejecuta-el-botón-submit();
}
elementForm.addEventListener('submit', enterKeyHandler)


*/


