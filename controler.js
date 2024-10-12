let Gbooks = [];
let GindexBook = 0;

function loadData() {
    if (localStorage.getItem("bookList"))
        Gbooks = JSON.parse(localStorage.getItem("bookList")) 
    else
        Gbooks = dump;

    paginateBooks(Gbooks);
}

function updateBook(id) {
    alert(`מעדכנים את הספר עם מזהה: ${id}`);
}



function deleteBook(id) {
    // מחיקת הספר מהספרים המוצגים
    Gbooks = Gbooks.filter(book => book.id !== id);
    localStorage.setItem("bookList", JSON.stringify(Gbooks)); 
    paginateBooks(Gbooks);

    // בדיקה האם הספר שמוצג בתצוגה המוגדלת הוא אותו ספר שנמחק
    const rightSection = document.querySelector('.right-section');
    const displayedBookId = parseInt(rightSection.getAttribute('data-book-id'));

    if (displayedBookId === id) {
        // ניקוי התצוגה המוגדלת אם הספר שנמחק מוצג שם
        rightSection.innerHTML = `<p>There is no book to show</p>`;
        rightSection.removeAttribute('data-book-id'); // הסרת מזהה הספר מהתצוגה המוגדלת
    }
}

function loadFromDump() {
    Gbooks = dump; 
    localStorage.setItem("bookList", JSON.stringify(Gbooks)); 
    paginateBooks(Gbooks); 
}



function addBook(event) {
    event.preventDefault();
    const bookName = document.getElementById("bookName").value;
    const price = document.getElementById("price").value;

    if (localStorage.getItem("indexBook"))
        GindexBook = JSON.parse(localStorage.getItem("indexBook"))
    else
        GindexBook = dump.length;

    const newBook = {
        id: GindexBook, 
        bookName: bookName,
        price: price
    };

    Gbooks.push(newBook); 
    localStorage.setItem("bookList", JSON.stringify(Gbooks));
    localStorage.setItem("indexBook", GindexBook + 1);
    paginateBooks(Gbooks);
    closeAddBookForm(); 
}

let currentPage = 1;
const booksPerPage = 3;

function paginateBooks(books) {
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = Math.min(startIndex + booksPerPage, books.length);

    const booksToDisplay = books.slice(startIndex, endIndex);
    renderBooks(booksToDisplay);

    renderPagination(books);
}

function readBook(id) {
    const book = Gbooks.find(b => b.id === id);
    const rightSection = document.querySelector('.right-section');
    rightSection.innerHTML = getBookDetails(book);
    rightSection.setAttribute('data-book-id', id); // שמירת מזהה הספר המוצג
}

function rateBook(bookId, rating) {
    const bookIndex = Gbooks.findIndex(b => b.id === bookId);
    if (bookIndex !== -1) {
        Gbooks[bookIndex].rate = rating;
        localStorage.setItem("bookList", JSON.stringify(Gbooks)); 
        readBook(bookId); 
    }
}
