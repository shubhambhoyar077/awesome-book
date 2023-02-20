import {Book} from "../modules/book.js"

const bookList = document.querySelector('.books');
const bookName = document.getElementById('book_name');
const autName = document.getElementById('auther_name');
const addBtn = document.getElementById('addButton');


const newBook = new Book(bookList);

if (!localStorage.getItem('book_list')) {
  newBook.updateLocalStorage();
  newBook.restoreLocalStorage();
} else {
  newBook.restoreLocalStorage();
}

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


// NavBar js
const navList = document.querySelector('.nav-list');
const bookSection = document.getElementById('book_section');
const formSection = document.getElementById('form-section');
const contactSection = document.getElementById('contact-section');

navList.addEventListener('click', (event) => {
  if (event.target.id === 'book-list') {
    bookSection.classList.remove('disable-section');
    formSection.classList.add('disable-section');
    contactSection.classList.add('disable-section');
  } else if (event.target.id === 'add-book') {
    bookSection.classList.add('disable-section');
    formSection.classList.remove('disable-section');
    contactSection.classList.add('disable-section');
  } else if (event.target.id === 'contact') {
    bookSection.classList.add('disable-section');
    formSection.classList.add('disable-section');
    contactSection.classList.remove('disable-section');
  }
});