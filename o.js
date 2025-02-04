let name_book = prompt()
let author = prompt()
let year_of_public = +prompt() 
let book = {name_book, author, year_of_public,}
console.log("Название книги: " + book.name_book + "\n" +
    "Автор книги: " + book.author + "\n" +
    "Год издания книги: " + book.year_of_public 
)