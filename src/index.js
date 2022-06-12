// DISPLAY FORM //
const form = document.querySelector(".bookForm");
const overlay = document.querySelector("#overlay");

function displayForm() {
  form.classList.add("active");
  overlay.classList.add("active");
}

const addButton = document.getElementById("addBook");
addButton.addEventListener('click', displayForm);

// CLOSE FORM
function closeForm() {
  form.classList.remove("active");
  overlay.classList.remove("active");
  clearForm();
}

const closeButton = document.querySelector("[data-close-button]");
closeButton.addEventListener("click", closeForm);

// SUBMIT FORM
const title = document.getElementById("title-input");
const author = document.getElementById("author-input");
const pages = document.getElementById("pages-input");
const read = document.getElementById("read-input");

let myLibrary = [];

function Book() {
  this.id = myLibrary.length;
  this.title = title.value;
  this.author = author.value;
  this.pages = pages.value;
  this.read = read.checked;
  if (this.read == true) {
    this.star = `<span class="material-symbols-outlined">star</span>`;
  } else {
    this.star = `<span class="material-symbols-outlined">grade</span>`;
  }
}

function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
}

function addBook () {
  let newBook = new Book;
  myLibrary.push(newBook);
  closeForm();
  displayBook(newBook);
  return myLibrary;
}

const submitButton = document.querySelector("[data-submit-button]");
submitButton.addEventListener("click", addBook);

// DISPLAY BOOKS ON BOOKSHELF
const bookshelf = document.querySelector(".bookshelf");

function displayBook(book) {
  const bottomShelf = bookshelf.lastElementChild;

  if (myLibrary.length % 11 == 0) {
    let shelf = document.createElement("div");
    shelf.classList.add("shelf");

    let bookDiv = document.createElement("button");
    bookDiv.classList.add("book");

    let titleAuth = document.createElement("div");
    titleAuth.classList.add("titleAuth");

    let bookTitle = document.createElement("h2");
    bookTitle.textContent = `${book.title}`;
    bookTitle.classList.add("title");

    let bookAuthor = document.createElement("p");
    bookAuthor.textContent = `${book.author}`;
    bookAuthor.classList.add("author");

    let star = document.createElement("div");
    star.textContent = book.star;
    star.classList.add("star");
    star.classList.add(`${book.read}`);
    star.classList.add(`${book.id}`);

    titleAuth.appendChild(bookTitle);
    titleAuth.appendChild(bookAuthor);
    bookDiv.appendChild(titleAuth)
    bookDiv.appendChild(star);
    shelf.appendChild(bookDiv);
    bookshelf.appendChild(shelf);
  } else {
    let bookDiv = document.createElement("button");
    bookDiv.classList.add(`book`);

    let titleAuth = document.createElement("div");
    titleAuth.classList.add("titleAuth");

    let bookTitle = document.createElement("h2");
    bookTitle.textContent = `${book.title}`;
    bookTitle.classList.add("title");

    let bookAuthor = document.createElement("p");
    bookAuthor.textContent = `${book.author}`;
    bookAuthor.classList.add("author");

    let star = document.createElement("div");
    star.innerHTML = book.star;
    star.classList.add("star");
    star.classList.add(`${book.read}`);
    star.classList.add(`${book.id}`);

    titleAuth.appendChild(bookTitle);
    titleAuth.appendChild(bookAuthor);
    bookDiv.appendChild(titleAuth)
    bookDiv.appendChild(star);
    bottomShelf.appendChild(bookDiv);
  }
  return;
}
