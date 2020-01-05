'use strict';

function getUser() {
  const userName = document.querySelector('.text').value;
  fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json())
    .then(data => {
      const nameTitle = document.querySelector('.nameTitle');
      nameTitle.innerHTML = 'Nombre:';
      const name = document.querySelector('.name');
      name.innerHTML = data.name;
      const imageTitle = document.querySelector('.imageTitle');
      imageTitle.innerHTML = 'Imagen:';
      const img = document.querySelector('.image');
      img.src = data.avatar_url;
      img.alt = `Foto de perfil de ${data.name}`;
      const repoTitle = document.querySelector('.repoTitle');
      repoTitle.innerHTML = 'Número de repositorios:';
      const repoNumber = document.querySelector('.repoNumber');
      repoNumber.innerHTML = data.public_repos;
    });
}
const inputNode = document.querySelector('.submit');
inputNode.addEventListener('click', getUser);
