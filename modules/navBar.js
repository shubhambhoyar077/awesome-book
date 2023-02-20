
const bookSection = document.getElementById('book_section');
const formSection = document.getElementById('form-section');
const contactSection = document.getElementById('contact-section');

export const navBar = (event) => {
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
};