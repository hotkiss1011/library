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
const title = document.querySelector()

let myLibrary = [];

function Book() {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook (Book) {

}

const submitButton = document.querySelector(".submit-button");