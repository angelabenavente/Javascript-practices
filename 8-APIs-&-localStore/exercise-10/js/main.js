'use strict';

function getEmoji() {
  fetch("https://api.rand.fun/number/integer?max=100")
    .then(response => response.json())
    .then(data => {
      document.body.innerHTML = data.result
    });
}
document.body.addEventListener("click", getEmoji);

