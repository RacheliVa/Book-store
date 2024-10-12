function getBook(book) {
    return `    
    <div class="table">
        <div class="product-title">${book.id}</div>
        <div class="product-title">${book.bookName}</div>
        <div class="product-price">${book.price} ₪</div>
        <div class="actions">
            <button onclick="readBook(${book.id})">קרא</button>
            <button onclick="updateBook(${book.id})">עדכן</button>
            <button onclick="deleteBook(${book.id})">מחק</button>
        </div>
    </div>`;
}

function renderBooks(books) {
    const booksContainer = document.getElementById("books-container");
    booksContainer.innerHTML = books.map(getBook).join(""); 
}

function renderPagination(books) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = ""; // נקה את הפגינציה לפני יצירת חדשה
    const totalPages = Math.ceil(books.length / booksPerPage); // חישוב מספר העמודים הכולל

    // כפתור "הקודם"
    const prevButton = document.createElement("button");
    prevButton.innerText = "הקודם";
    prevButton.disabled = currentPage === 1;
    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            paginateBooks(books);
        }
    };
    pagination.appendChild(prevButton);

    // כפתורים לפי מספר העמודים
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.innerText = i;
        pageButton.classList.toggle("active", i === currentPage); // מדגיש את העמוד הנוכחי
        pageButton.onclick = () => {
            currentPage = i;
            paginateBooks(books);
        };
        pagination.appendChild(pageButton);
    }

    // כפתור "הבא"
    const nextButton = document.createElement("button");
    nextButton.innerText = "הבא";
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
        <h2>פרטי הספר</h2>
        <p><strong>שם הספר:</strong> ${book.bookName}</p>
        <p><strong>מחיר:</strong> ${book.price} ₪</p>
        <p><strong>מזהה:</strong> ${book.id}</p>
        <img src="${book.img}" alt="${book.bookName}">
        <p><strong>דירוג:</strong></p>
        <div class="rating">
            ${renderStars(book.id, book.rate)}
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