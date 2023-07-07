// Variables
const borrowedList = document.getElementById("borrowedList");

// Load borrowed books on page load
document.addEventListener("DOMContentLoaded", loadBorrowedBooks);

// Load borrowed books function
function loadBorrowedBooks() {
  const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
  let output = "";
  if (borrowedBooks.length > 0) {
    borrowedBooks.forEach(book => {
      output += `
        <div class="book-container">
          <h3>${book.title}</h3>
          <p>Author: ${book.author}</p>
          <p>Language: ${book.language}</p>
          <p>Pages: ${book.pages}</p>
          <p>Year: ${book.year}</p>
          <img src="${book.imageLink}" alt="${book.title}" class="book-image">
        </div>
      `;
    });
  } else {
    output = "<p>None</p>";
  }
  borrowedList.innerHTML = output;
}
