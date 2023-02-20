

export class Book {
  constructor(bookList) {
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

    this.bookStore.push(objBook);
    this.displayBook(objBook);
    this.updateLocalStorage();
  }

  removeBook(event) {
    const parentli = event.target.parentElement;
    this.bookStore = this.bookStore.filter((book) => book.id !== parentli.id);
    bookList.removeChild(e.target.parentElement);
    this.updateLocalStorage();
  }

  restoreLocalStorage() {
    this.bookStore = JSON.parse(localStorage.getItem('book_list'));
    this.bookCount = JSON.parse(localStorage.getItem('book_count'));
    for (let i = 0; i < this.bookStore.length; i += 1) {
      this.displayBook(this.bookStore[i]);
    }
  }

  updateLocalStorage() {
    localStorage.setItem('book_list', JSON.stringify(this.bookStore));
    localStorage.setItem('book_count', JSON.stringify(this.bookCount));
  }
}