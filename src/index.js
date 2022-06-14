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

// CLEAR FORM
function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
}

// CREATE LIBRARY
let myLibrary = [];

// CREATE BOOK
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

// ADD BOOK TO LIBRARY IF NOT ALREADY IN LIBRARY
function addBook () {
  let newBook = new Book;
  if (myLibrary.some((book) => book.title === newBook.title)) {
    alert("Sorry! This book has already been added. If you would like to edit the entry, please select the book.") 
    closeForm();
  } else {
    myLibrary.push(newBook);
    closeForm();
  }
  displayBooks();
  return myLibrary;
}

// REMOVE BOOK FROM LIBRARY
function removeBook(title) {
  myLibrary.filter((book) => book.title !== title);
  displayBooks();
}

// FIND BOOK
function findBook(bookTitle) {
  let book = myLibrary.find((book) => book.title === bookTitle);
  return book;
}

const submitButton = document.querySelector("[data-submit-button]");
submitButton.addEventListener("click", addBook);

// DISPLAY BOOKS ON BOOKSHELF
const bookshelf = document.querySelector(".bookshelf");

function displayBooks() {
  //reset bookshelf
  bookshelf.innerHTML = `<div class="shelf"></div>`;

  // if number of books in library exceeds 10, add another shelf
  if (myLibrary.length % 11 == 0) {
    let shelf = document.createElement("div");
    shelf.classList.add("shelf");

    myLibrary.forEach(book => {
      let bookDiv = document.createElement("div");
      bookDiv.classList.add(`book`);
      bookDiv.setAttribute("id", `${book.id}`);

      let titleAuth = document.createElement("div");
      titleAuth.classList.add("titleAuth");

      let title = document.createElement("h2");
      title.classList.add("title");
      title.textContent = book.title;

      let author = document.createElement("p");
      author.classList.add("author");
      author.textContent = book.author;

      let star = document.createElement("button");
      star.classList.add("star");
      star.onclick = changeRead;

      let starText = document.querySelector("span")
      starText.classList.add("material-symbols-outlined");
      starText.textContent = book.star;

      titleAuth.appendChild(title);
      titleAuth.appendChild(author);
      bookDiv.appendChild(titleAuth);
      bookDiv.appendChild(star);
      shelf.appendChild(bookDiv);
      bookshelf.appendChild(shelf);
    });
  } else { //else add the book to the bottom shelf
    const bottomShelf = bookshelf.lastElementChild;
    
    myLibrary.forEach(book => {
      let bookDiv = document.createElement("div");
      bookDiv.classList.add(`book`);
      bookDiv.setAttribute("id", `${book.id}`);

      let titleAuth = document.createElement("div");
      titleAuth.classList.add("titleAuth");

      let title = document.createElement("h2");
      title.classList.add("title");
      title.textContent = book.title;

      let author = document.createElement("p");
      author.classList.add("author");
      author.textContent = book.author;

      let star = document.createElement("button");
      star.classList.add("star");
      star.innerHTML = book.star;
      star.onclick = changeRead;

      titleAuth.appendChild(title);
      titleAuth.appendChild(author);
      bookDiv.appendChild(titleAuth);
      bookDiv.appendChild(star);
      bottomShelf.appendChild(bookDiv);
    });
  }
}

// CHANGE READ STATUS
function changeRead(e) {
  let title = e.target.parentNode.parentNode.firstChild.firstChild.textContent.replaceAll('"', '');
  let book = findBook(title);

  book.read = !book.read;
  
  if (book.star === `<span class="material-symbols-outlined">star</span>`) {
    book.star = `<span class="material-symbols-outlined">grade</span>`;
  } else {
    book.star = `<span class="material-symbols-outlined">star</span>`;
  }

  displayBooks();
}