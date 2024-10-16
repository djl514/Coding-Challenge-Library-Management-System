//1. Create a (Book) class

class Book {
    constructor(title, author, ISBN){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    }
    getDetails(){
        console.log(
`Title: ${this.title}
Author: ${this.author}
ISBN: ${this.ISBN}`);
    }
    get isAvailable(){
        return this._isAvailable;
    }
    set isAvailable(status){
        if (typeof status === 'boolean'){
            this._isAvailable = status;
        } else {
            console.log(`Status can only be True or False`)
        }
    }
}

//2. Create a (Section) class

class Section{
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }
    getAvailableBooks(){
        let sectionSize = this.books.length;
        console.log(`Total Number of Books in the ${this.name} section: ${sectionSize}`);
    }
    listBooks(){
        this.books.forEach(book => {
            console.log(
                `Book Title: ${book.title}
Availability: ${book._isAvailable}`);
        });
    }

    //5. Handle Books Borrowing and Returning
    calculateTotalBooksAvailable(){
        let booksAvailable = this.books.filter(book => book.isAvailable === true);
        console.log(`There are ${booksAvailable.length} books available in the ${this.name} section`);
    }
}


//3. Create a (Patron) Class

class Patron{
    constructor(name){
        this.name = name;
        this.borrowedBooks = [];
    }
    borrowBook(book){
        if (book.isAvailable){
            this.borrowedBooks.push(book);
            book.isAvailable = false;
        } else {
            console.log("Book is still outgoing")
        }
    }
    returnBook(book){
        if (book.isAvailable === false){
            book.isAvailable = true;
            this.borrowedBooks = this.borrowedBooks.filter(bbooks => bbooks.isAvailable === false);
        } else {
            console.log("Book has already been returned");
        }
    }

}

//4. Create a (VIPPatron) Class that Inherits from (Patron)
class VIPPatron extends Patron{
    constructor(name){
        super(name);
        this.priority = true;
    }
    borrowBook(){

    }
}


//6. Create and manage Sections with Patrons // Output

const dune = new Book(`Dune`, `Frank Herbert`, `009988776655`);
const fellowship = new Book('The Lord of the Rings: The Fellowship of the Ring', 'J.R.R. Tolkein', '0987654321');
const towers = new Book('The Lord of the Rings: The Two Towers','J.R.R. Tolkein', '1357924680');
const king = new Book('The Lord of the Rings: The Return of the King', 'J.R.R. Tolkein', '6789054321');
const hobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '9078563412');
const starship = new Book('Starship Troopers', 'Robert A. Heinlein', '9078654321');
const martian = new Book('The Martian', 'Andy Weir', '8079463512');
//Create multiple Book instances
dune.getDetails();

const sciFi = new Section('Science Fiction');
const fantasy = new Section('Fantasy');
//Create multiple Section instances

sciFi.addBook(dune);
sciFi.addBook(starship);
sciFi.addBook(martian);
//Add books to sciFi section
fantasy.addBook(hobbit);
fantasy.addBook(fellowship);
fantasy.addBook(towers);
fantasy.addBook(king);
//Add books to fantasy section

sciFi.getAvailableBooks();
//return the number books avaiable after borrowing / returning
sciFi.listBooks();
//list all the books in a given section

const james = new Patron("James");
const lily  = new Patron("Lily");
const victor = new Patron("Victor")
//Create Patron instances

james.borrowBook(dune);
james.borrowBook(starship);
victor.borrowBook(hobbit);
victor.borrowBook(fellowship);
lily.borrowBook(towers);
lily.borrowBook(king);
victor.borrowBook(towers);
//patrons borrowing books

james.returnBook(dune);
james.returnBook(dune);
victor.returnBook(hobbit);
//patron returning books

fantasy.calculateTotalBooksAvailable();