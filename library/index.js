function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        const readText = (this.read) ? 'already read' : 'not read yet'
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readText}`
    }
}

const book = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
console.log(book.info())

console.log(Object.getPrototypeOf(book) === Book.prototype)
console.log(book.valueOf())