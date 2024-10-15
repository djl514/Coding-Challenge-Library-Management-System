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
        }
    }
}

const book1 = new Book(`Dune`, `Frank Herbert`, `009988776655`);
book1.getDetails();


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
            console.log(`${book.title}, ${book._isAvailable}`);
        });
    }
}

const sciFi = new Section('Science Fiction');
sciFi.addBook(book1);
console.log(sciFi);
sciFi.getAvailableBooks();
sciFi.listBooks();