// Book Constructor ES5

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor 
function UI() {}

//method is added to the UI prototype
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list')
  // Create tr element
  const row = document.createElement('tr')
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`

    list.appendChild(row)
  console.log(book, row)
}

// Show validation alert 
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div') 
  // Add classes
  div.className = `alert ${className}`
  // Add text
  div.appendChild(document.createTextNode(message))
  // Get Parent
  const container = document.querySelector('.container')
  // Get Form
  const form = document.querySelector('#book-form')
  // Insert Alert
  container.insertBefore(div, form)

  // Timeout after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').remove()
  }, 3000)
}

// delete book

UI.prototype.deleteBook = function(target) {
  if(target.className === 'delete') {
    target.parentElement.parentElement.remove()
  }
}
// clear fields

UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listener Add Book

document.getElementById('book-form').addEventListener('submit',
  function(e){
    // Get Form Values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

    // Instantiate Book obj
    const book = new Book(title, author, isbn)

    // Instantiate UI obj
    const ui = new UI()
    console.log(ui)

    // Validate
    if(title === '' || author === '' || isbn === ''){
      // Error alert 
      ui.showAlert('Fill in all fields', 'error')
    } else {
      
    // Add book to list
    ui.addBookToList(book)

    // Show success 
    ui.showAlert('Book Added!', 'success')

    //clear fields
    ui.clearFields()

    console.log(book)
    e.preventDefault();
    }
  })

  // Event Listener for delete
  document.getElementById('book-list').addEventListener('click', function(e){

    //Instantiate UI
    const ui = new UI()

    ui.deleteBook(e.target)

    // Show message
    ui.showAlert('Book Removed', 'success')
    console.log(123)
    e.preventDefault()
  })

