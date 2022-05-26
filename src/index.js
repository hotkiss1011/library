function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read}`
  }
}

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'read');
console.log(hobbit.info())
const donQuixote = new Book('Don Quixote', 'Miguel De Cervantes', 928, 'have not read');
console.log(donQuixote.info())
const taleOfTwoCities = new Book('Tale of Two Cities', 'Charles Dickens', 304, 'read');
console.log(taleOfTwoCities.info())