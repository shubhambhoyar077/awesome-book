export class Storage{
  getLocalStorage() {
    const bookStore = JSON.parse(localStorage.getItem('book_list'));
    const bookCount = JSON.parse(localStorage.getItem('book_count'));
    const bookObj = [bookStore, bookCount];
    return bookObj;
    
  }

  updateLocalStorage(bookStore, bookCount) {
    localStorage.setItem('book_list', JSON.stringify(bookStore));
    localStorage.setItem('book_count', JSON.stringify(bookCount));
  }
  

}