function getStarsHtml(bookId, rate) {
    console.log(`Rendering stars for bookId ${bookId} with rate ${rate}`);
    return Array.from({ length: 5 }, (_, i) => {
        const starClass = i < rate ? "star" : "star empty";
        return `<span class="${starClass}" onclick="handleStarClick(${bookId}, ${i})">★</span>`;
    }).join("");
}

function getBook(book) {
    return `    
    <div class="table">
        <div class="product-title">${book.id}</div>
        <div class="product-title">${book.bookName}</div>
        <div class="product-rate">
            <span class="rating" style="pointer-events: none;">${getStarsHtml(book.id, book.rate)}</span>
        </div> 
        <div class="actions">
            <button id="read-button-${book.id}" onclick="readBook(${book.id})">read</button>
            <button id="update-button-${book.id}" onclick="updateBook(${book.id})">update</button>
            <button id="delete-button-${book.id}" onclick="deleteBook(${book.id})">delete</button>
        </div>
    </div>`;
}



function renderBooks(books) {
    const booksContainer = document.getElementById("books-container");
    booksContainer.innerHTML = books.map(getBook).join("");
}

function renderPagination(books) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = ""; 
    const totalPages = Math.ceil(books.length / booksPerPage); // חישוב מספר העמודים הכולל

    const prevButton = document.createElement("button");
    prevButton.innerText = "prev";
    prevButton.disabled = currentPage === 1;
    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            paginateBooks(books);
        }
    };
    pagination.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.innerText = i;
        pageButton.classList.toggle("active", i === currentPage); 

        pageButton.onclick = () => {
            currentPage = i;
            paginateBooks(books);
        };

        pagination.appendChild(pageButton);
    }

    const nextButton = document.createElement("button");
    nextButton.innerText = "next";
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            paginateBooks(books);
        }
    };
    pagination.appendChild(nextButton);
}

function getBookDetails(book) {
    return `
        <h3><strong></strong> ${book.bookName}</h3>
        <p><strong>מחיר:</strong>₪ ${book.price} </p>
        <p><strong>מזהה:</strong> ${book.id}</p>
        <img src="${book.img}" class="img" alt="${book.bookName}">
        <p><strong>דירוג:</strong></p>
        <div class="rating">
            ${getStarsHtml(book.id, book.rate)} <!-- הצגת כוכבים -->
        </div>
    `;
}


function renderStars(bookId, currentRating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        starsHtml += `<span class="star" data-book-id="${bookId}" data-rate="${i}" onclick="rateBook(${bookId}, ${i})" style="cursor: pointer; color: ${i <= currentRating ? 'gold' : 'gray'};">&#9733;</span>`;
    }
    return starsHtml;
}

let sortDirection = 1; // משתנה שמגדיר אם המיון הוא בסדר עולה או יורד

function sortBooks(column) {
    Gbooks.sort((a, b) => {
        if (a[column] < b[column]) return -1 * sortDirection;
        if (a[column] > b[column]) return 1 * sortDirection;
        return 0;
    });

    sortDirection *= -1; // הפוך את הכיוון בפעם הבאה
    paginateBooks(Gbooks); // עדכון התצוגה לאחר המיון
}

function showAddBookForm() {
    document.getElementById("add-book-form").style.display = "block";
}

function closeAddBookForm() {
    document.getElementById("add-book-form").style.display = "none";
}

function updateBook(id) {
    const book = Gbooks.find(b => b.id === id);
    if (book) {
        document.getElementById("updateBookName").value = book.bookName;
        document.getElementById("updatePrice").value = book.price;
        document.getElementById("updateImage").value = book.img;
        document.getElementById("update-book-form").setAttribute("data-book-id", id);
        document.getElementById("update-book-form").style.display = "block";
    }
}

function closeUpdateBookForm() {
    document.getElementById("update-book-form").style.display = "none";
}