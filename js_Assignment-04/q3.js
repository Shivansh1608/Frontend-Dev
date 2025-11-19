class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook = () => this.isIssued = true;
  returnBook = () => this.isIssued = false;
}

const books = [
  new Book("Atomic Habits", "James Clear", "1111"),
  new Book("Rich Dad Poor Dad", "Robert", "2222"),
  new Book("Think & Grow Rich", "Napoleon Hill", "3333", true),
];

function renderBooks() {
  const ul = document.getElementById("bookList");
  ul.innerHTML = "";

  books.filter(b => !b.isIssued)
    .forEach(b => {
      let li = document.createElement("li");
      li.innerText = `${b.title} (${b.isbn})`;
      ul.appendChild(li);
    });
}

renderBooks();

document.getElementById("issueBtn").addEventListener("click", () => {
  let isbn = document.getElementById("isbnInput").value;

  let book = books.find(b => b.isbn === isbn);

  if (!book) return alert("Book not found!");
  if (book.isIssued) return alert("Already issued!");

  book.issueBook();
  renderBooks();
  alert("Book Issued!");
});
