function getBook(book) {
    return ` <div class="table">
        <div class="product-title">${book.id}</div>
        <div class="product-title">${book.bookName}</div>
        <div class="product-price">${book.price}</div>
        <button>read</button>
        <button>update</button>
        <button>delete</button>
    </div>`;
}

function renderBooks(books) {
    document.getElementById("book-list").innerHTML = books.map(getBook).join("");
}