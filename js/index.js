import Book from '../modules/book.js';
import showTime from '../modules/showTime.js';
import navBar from '../modules/navBar.js';

const bookList = document.querySelector('.books');
const bookName = document.getElementById('book_name');
const autName = document.getElementById('auther_name');
const addBtn = document.getElementById('addButton');

const newBook = new Book(bookList);

addBtn.addEventListener('click', () => {
  newBook.addBook(bookName.value, autName.value);
  bookName.value = '';
  autName.value = '';
});

bookList.addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    newBook.removeBook(e);
  }
});

const navList = document.querySelector('.nav-list');
navList.addEventListener('click', (event) => {
  navBar(event);
});

newBook.restoreBook();
showTime();