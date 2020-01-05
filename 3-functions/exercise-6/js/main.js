'use strict';

function getEl (htmlElement) {
  return document.querySelector(htmlElement);
}

const elementLi = getEl('ul');

if (elementLi===0 || elementLi===undefined || elementLi===null) {
  console.log(`No existe ningún elemento con clase, id o tag llamado (arguments [0])`);
} else {
  console.log (elementLi);
}
