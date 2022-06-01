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
}

function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
}

function addBook () {
  closeForm();
  let newBook = new Book;
  myLibrary.push(newBook);
  clearForm();
  console.log(myLibrary);
  displayBook(newBook);
  return myLibrary;
}


// DISPLAY BOOKS ON BOOKSHELF
const bookshelf = document.querySelector(".bookshelf");

function displayBook(book) {
  const bottomShelf = bookshelf.lastElementChild;
  const totShelfBooks = bottomShelf.childElementCount;

  if (totShelfBooks >= 10) {
    console.log(totShelfBooks);
    let shelf = document.createElement("div");
    shelf.classList.add("shelf");

    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    let bookTitle = document.createElement("h2");
    bookTitle.textContent = `${book.title}`;
    bookTitle.classList.add("title");

    let bookAuthor = document.createElement("p");
    bookAuthor.textContent = `${book.author}`;
    bookAuthor.classList.add("author");

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    shelf.appendChild(bookDiv);
    bookshelf.appendChild(shelf);
  } else {
    console.log(totShelfBooks);

    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    let bookTitle = document.createElement("h2");
    bookTitle.textContent = `${book.title}`;
    bookTitle.classList.add("title");

    let bookAuthor = document.createElement("p");
    bookAuthor.textContent = `${book.author}`;
    bookAuthor.classList.add("author");

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bottomShelf.appendChild(bookDiv);
  }
}