//OOP prototypes in ES5


class Book{
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
};

class UI{
    addBookToList(book){
        const list = document.getElementById('book-list');

        //Create tr element
        const row = document.createElement('tr');

        //Insert value to columns
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a hrer="#" class="delete">X</a></td>
        `

        list.appendChild(row);
    };

    showAlert(message, className){
        //add element
        const div = document.createElement('div');
        // create class name
        div.className = `alert ${className}`;
        //Add text 
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector('.container');
        //Get Form
        const form = document.getElementById('book-form');
        //Insert alert
        container.insertBefore(div, form) //('what we want to insert', 'where we want to insert before');

        //Timeout
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 2000);
    };

    clearField(){
        document.getElementById('title').value = '';
        document.getElementById('author').value ='';
        document.getElementById('isbn'). value = '';
    }

    deleteBook(target){
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    };

};

//Store to localStorage
class Store {
    static getBook(){

    }

    static displayBook(){
        
    }

    static addBook(){

    }

    static removeBook(){

    }

    
}

//Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function (e) {
    const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;

//Show Alert
UI.prototype.showAlert = function(message, className) {
    //add element
    const div = document.createElement('div');
    // create class name
    div.className = `alert ${className}`;
    //Add text 
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    //Get Form
    const form = document.getElementById('book-form');
    //Insert alert
    container.insertBefore(div, form) //('what we want to insert', 'where we want to insert before');

    //Timeout
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 2000);
};

    //Clear Fields
    UI.prototype.clearField = function () {
        document.getElementById('title').value = '';
        document.getElementById('author').value ='';
        document.getElementById('isbn'). value = '';
    };

    //Delete Book
    UI.prototype.deleteBook = function(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    };

    // console.log(title, author, isbn);

    //Instantiate book(title, author, isbn)
    const book = new Book (title, author, isbn);

    //Instantiate UI
    const ui = new UI();

    //Validate submit
    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in the fields', 'error');
        
    } else {
        //Add book
        ui.addBookToList(book);

        //Add book to ls
        Store.addBook(book);

        //Success Alert
        ui.showAlert('Book added successfully', 'success');

        //Clear Field
        ui.clearField();
    };


    e.preventDefault();
});

//Event Listener for delete a book list
document.getElementById('book-list').addEventListener('click', function(e){

    //Instantiate UI
    const ui = new UI();

    ui.deleteBook(e.target);

    //Show Alert
    ui.showAlert('Book remove successfully!', 'success');

    e.preventDefault();
});
