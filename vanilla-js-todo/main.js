'use strict';

//Variables
const toggleBtnEl = document.querySelector('#toggle-button');
const formEl = document.querySelector('#add-form');

toggleBtnEl.addEventListener('click', () => {
  //Change btn color
  toggleBtnEl.classList.toggle('error');
  formEl.classList.toggle('visible');
});
