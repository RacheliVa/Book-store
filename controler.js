let Gbooks = [];
let GindexBook = 0;

function loadData() {
    if (localStorage.getItem("bookList"))
        Gbooks = JSON.parse(localStorage.getItem("bookList"))
    else
        Gbooks = dump;

    paginateBooks(Gbooks);
}

function saveUpdatedBook(event) {
    event.preventDefault();
    const bookId = parseInt(document.getElementById("update-book-form").getAttribute("data-book-id"));
    const bookIndex = Gbooks.findIndex(b => b.id === bookId);

    if (bookIndex !== -1) {
        Gbooks[bookIndex].bookName = document.getElementById("updateBookName").value;
        Gbooks[bookIndex].price = document.getElementById("updatePrice").value;
        Gbooks[bookIndex].img = document.getElementById("updateImage").value; // עדכון התמונה אם רלוונטי

        localStorage.setItem("bookList", JSON.stringify(Gbooks));

        closeUpdateBookForm();

        paginateBooks(Gbooks);
        const bookDetails = document.querySelector('.right-section');
        if (bookDetails && bookDetails.dataset.bookId == bookId) {
            bookDetails.innerHTML = getBookDetails(Gbooks[bookIndex]);
        }
    }
}

function deleteBook(id) {
    Gbooks = Gbooks.filter(book => book.id !== id);
    localStorage.setItem("bookList", JSON.stringify(Gbooks));
    paginateBooks(Gbooks);
    //Checking whether the book shown in the enlarged view is the same book that was deleted
    const rightSection = document.querySelector('.right-section');
    const displayedBookId = parseInt(rightSection.getAttribute('data-book-id'));
    if (displayedBookId === id) {
        rightSection.innerHTML = `<p>There is no book to show</p>`;
        rightSection.removeAttribute('data-book-id'); 
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
    const img = document.getElementById("image-url").value;
    if (localStorage.getItem("indexBook"))
        GindexBook = JSON.parse(localStorage.getItem("indexBook"))
    else
        GindexBook = dump.length;

    const newBook = {
        id: GindexBook,
        bookName: bookName,
        price: price,
        img: img,
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
    rightSection.setAttribute('data-book-id', id); 
}

function rateBook(bookId, rating) {
    const bookIndex = Gbooks.findIndex(b => b.id === bookId);
    if (bookIndex !== -1) {
        Gbooks[bookIndex].rate = rating;
        localStorage.setItem("bookList", JSON.stringify(Gbooks));
        readBook(bookId);
        paginateBooks(Gbooks);
    }
}

function handleStarClick(bookId, starIndex) {
    const book = Gbooks.find(book => book.id === bookId);
    if (book) {
        book.rate = starIndex + 1; 
        localStorage.setItem("bookList", JSON.stringify(Gbooks));
        
        console.log(`Book ${bookId} updated with rating ${book.rate}`);
        
        paginateBooks(Gbooks); 
        
        const rightSection = document.querySelector('.right-section');
        if (rightSection && rightSection.getAttribute('data-book-id') == bookId) {
            rightSection.innerHTML = getBookDetails(book);
            console.log(`Updated details view for book ${bookId}`);
        }
    }
}
