// Book Class : represnts a book

class Book {
  constructor(title, author, isbn) {
    this.title= title;
    this.author= author;
    this.isbn= isbn;
  }
}

// UI Class: Handle ui tasks

class UI {
  static displayBooks(){
    const StoredBooks = [
      {
        title: 'Book One',
        author: 'Joe',
        isbn: '384859',
      },
      {
        title: 'Book Two',
        author: 'Brad',
        isbn: '4859',
      },
      {
        title: 'Book Three',
        author: 'Ryan',
        isbn: '38',
      },
    ];
    
    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));

  }
  
  static addBookToList(book){
    const list = document.getElementById('book-list');

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }
  
  static deleteBook(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }
  
  static clearFields(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }

}

//Store Class: handles storage

//Events: display books

document.addEventListener('DOMContentLoaded', UI.displayBooks);



//Event : add a book

document.querySelector('#book-form').addEventListener('submit', (e) => {
  //prevent actual submit
  e.preventDefault();

  // get form values                                                      
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;   
  
  //instantiate book
  const book = new Book(title, author, isbn);
  console.log(book);

  //add book to list
  UI.addBookToList(book);

  //clear fiels
  UI.clearFields();

});

// Event : remove a book

document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
})