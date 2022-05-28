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
  this.title = title.value;
  this.author = author.value;
  this.pages = pages.value;
  this.read = read.value;
}

function addBook () {
  closeForm();
  let newBook = new Book;
  myLibrary.push(newBook);
  console.log(myLibrary);
}

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener('click', addBook)