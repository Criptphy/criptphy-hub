'use strict';

const p = document.querySelector('#message');
const arr = [1, 2, 3];

window.setInterval(function() {
  const nrm = Math.floor(Math.random() * 3);
  if (nrm === 1) {
    p.innerText = 'Hub de links'
  } else if (nrm === 2) {
    p.innerText = 'criptphy@gmail.com'
}, 2500)
