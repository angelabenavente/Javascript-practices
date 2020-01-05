'use strict';

const ulElement = document.querySelector('.reposList');

function getOrgRepos() {
  const orgName = document.querySelector('.text').value;
  fetch(`https://api.github.com/orgs/${orgName}`)
    .then(response => response.json())
    .then(data => {
      const repositoryUrl = data.repos_url;

      return fetch(repositoryUrl);
    })
    .then(response => response.json())
    .then(repositories => {
      let ulContent = '';

      for(let i = 0; i<repositories.length; i++) {
        const repo = repositories[i].name;
        const repoElement = `<li>${repo}</li>`;
        ulContent += repoElement;
      }
      ulElement.innerHTML = ulContent;
    });
}
const btn = document.querySelector('.submit');
btn.addEventListener('click', getOrgRepos);
