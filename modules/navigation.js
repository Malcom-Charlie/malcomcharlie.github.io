const menuListOption = document.getElementById('menu-list');
const menuAddOption = document.getElementById('menu-add');
const menuContactOption = document.getElementById('menu-contact');

const librarySection = document.querySelector('.library-section');
const addBook = document.querySelector('.add-section');
const contactInformation = document.querySelector('.contact-section');

window.onload = () => {
  menuListOption.classList.add('blue');

  addBook.classList.add('hide');
  contactInformation.classList.add('hide');
};

menuListOption.addEventListener('click', () => {
  menuListOption.classList.add('blue');
  menuAddOption.classList.remove('blue');
  menuContactOption.classList.remove('blue');

  librarySection.classList.remove('hide');
  addBook.classList.add('hide');
  contactInformation.classList.add('hide');
});

menuAddOption.addEventListener('click', () => {
  menuListOption.classList.remove('blue');
  menuAddOption.classList.add('blue');
  menuContactOption.classList.remove('blue');

  librarySection.classList.add('hide');
  addBook.classList.remove('hide');
  contactInformation.classList.add('hide');
});

menuContactOption.addEventListener('click', () => {
  menuListOption.classList.remove('blue');
  menuAddOption.classList.remove('blue');
  menuContactOption.classList.add('blue');

  librarySection.classList.add('hide');
  addBook.classList.add('hide');
  contactInformation.classList.remove('hide');
});
