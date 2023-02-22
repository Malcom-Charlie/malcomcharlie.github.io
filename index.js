import myLibrary from './modules/myLibrary.js';
import './modules/navigation.js';
import { DateTime } from './modules/luxon.js';

const dateTimeNow = document.querySelector('.currentTime');
setInterval(() =>{
  const current = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);
  dateTimeNow.textContent = current;
},1000 );

const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', () => {
  const inputTitle = document.getElementById('input-title').value;
  const inputAuthor = document.getElementById('input-author').value;
  if (inputTitle && inputAuthor) {
    myLibrary.addBook(inputTitle, inputAuthor);
  }
});

myLibrary.displayBooks();