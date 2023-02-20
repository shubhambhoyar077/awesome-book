import { Storage } from "./storage.js";

export class Book {
  constructor(bookList) {
    this.storage = new Storage();
    this.bookAddMsg = document.getElementById('book-add-msg');
    this.bookStore = [
      {
        id: 'book_0',
        title: 'object-oriented analysis and design',
        author: 'Martin B',
      },
      {
        id: 'book_1',
        title: 'software design principles',
        author: 'Jose K',
      },
    ];
    this.bookCount = this.bookStore.length - 1;
    this.bookList = bookList;
    this.displayBook = (book) => {
      this.bookList.innerHTML += `
          <li id="${book.id}">
              <div class="content">
                <span class="name">"${book.title}" by</span>
                <span class="auther">${book.author}</span>
              </div>
              <button type="button" class="delete">Remove</button>
          </li>
      `;
    };
  }

  addBook(bookName, autName) {
    this.bookCount += 1;
    const objBook = {
      id: `book_${this.bookCount}`,
      title: bookName,
      author: autName,
    };
    this.bookAddMsg.textContent = '"' + bookName + '" book added';
    this.bookAddMsg.classList.remove('diable-msg');
    this.bookStore.push(objBook);
    this.displayBook(objBook);
    this.updateLocalStorage();
  }

  removeBook(event) {
    const parentli = event.target.parentElement;
    this.bookStore = this.bookStore.filter((book) => book.id !== parentli.id);
    this.bookList.removeChild(event.target.parentElement);
    this.updateLocalStorage();
  }

  restoreBook(){
    if (!localStorage.getItem('book_list')) {
      this.storage.updateLocalStorage(this.bookStore, this.bookCount);
      [this.bookStore, this.bookCount] = this.storage.getLocalStorage();
    } else {
      [this.bookStore, this.bookCount] = this.storage.getLocalStorage();
    }
    for (let i = 0; i < this.bookStore.length; i += 1) {
      this.displayBook(this.bookStore[i]);
    }
  }

  updateLocalStorage(){
    this.storage.updateLocalStorage(this.bookStore, this.bookCount);
  }



  
}