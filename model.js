// const dump = [
//     {
//         id: 1,
//         bookName: "פיצי משמח את אמא",
//         price: 20,
//         img: "https://www.sifreiorhachaim.co.il/wp-content/uploads/2020/11/2570465-300x163.jpg",
//         rate: 0
//     },
//     {
//         id: 2,
//         bookName: "פיצי מדבר אמת",
//         price: 18,
//         img: "https://www.sifreiorhachaim.co.il/wp-content/uploads/2024/01/2570468.jpg",
//         rate: 0
//     },
//     {
//         id: 3,
//         bookName: "פיצי שומר על חפציו",
//         price: 22,
//         img: "https://www.sifreiorhachaim.co.il/wp-content/uploads/2020/11/2080701-1-270x300.jpg",
//         rate: 0
//     },
//     {
//         id: 4,
//         bookName: "מה קרה לפיצי",
//         price: 13,
//         img: "https://www.sifreiorhachaim.co.il/wp-content/uploads/2020/11/2080512-1-267x300.jpg",
//         rate: 0
//     },

// ]


const dump = [
    {
        id: 1,
        bookName: "Harry Potter and the Sorcerer's Stone",
        price: 20,
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR6yfeXFsgsyQYTIvqWbwAEkrHgdxHWhIenfRLWL8T9Pm-AphqPCAQeUfVDazbqnbVNAOpCMtP9K_3q6bZZRhLAHdQAICwA&usqp=CAc",
        rate: 0
    },
    {
        id: 2,
        bookName: "Harry Potter and the Chamber of Secrets",
        price: 18,
        img: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/7de3bd51a14570365ea4a3b182c00065/0/2/026640416-1635799744762966.jpg",
        rate: 0
    },
    {
        id: 3,
        bookName: "Harry Potter and the Prisoner of Azkaban",
        price: 22,
        img: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/7de3bd51a14570365ea4a3b182c00065/0/2/026640417-1635799746708444.jpg",
        rate: 0
    },
    {
        id: 4,
        bookName: "Harry Potter and the Goblet of Fire",
        price: 25,
        img: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/7de3bd51a14570365ea4a3b182c00065/0/2/026640418-1635799747727802.jpg",
        rate: 0
    },
    {
        id: 5,
        bookName: "Harry Potter and the Order of the Phoenix",
        price: 28,
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9P8gKX80KYlOdFCT7sTdtFfK0pARdY6Q4cxFCyhhfNk3sB9WE5zjz5N0qPTTHAMnpKXndJcUG_zvKKJxGKuCUg9RO70GHg16sL0_VUhdw&usqp=CAc",
        rate: 0
    },
    {
        id: 6,
        bookName: "Harry Potter and the Half-Blood Prince",
        price: 24,
        img: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/7de3bd51a14570365ea4a3b182c00065/0/2/026640420-1635799751763343.jpg",
        rate: 0
    },
    {
        id: 7,
        bookName: "Harry Potter and the Deathly Hallows",
        price: 30,
        img: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/7de3bd51a14570365ea4a3b182c00065/0/2/026640421-1635799752651906.jpg",
        rate: 0
    },
    {
        id: 8,
        bookName: "הארי פוטר וחדר הסודות",
        price: 18,
        img: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/7de3bd51a14570365ea4a3b182c00065/0/1/011320535-16357517491340873.jpg",
        rate: 0
    },
    {
        id: 9,
        bookName: "הארי פוטר והאסיר מאזקבאן",
        price: 22,
        img: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/7de3bd51a14570365ea4a3b182c00065/0/1/011320749-16357517941364959.jpg",
        rate: 0
    },
    {
        id: 10,
        bookName: "הארי פוטר וגביע האש",
        price: 25,
        img: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/7de3bd51a14570365ea4a3b182c00065/0/1/011320647-16357517761223213.jpg",
        rate: 0
    },
    {
        id: 11,
        bookName: "הארי פוטר ומסדר עוף החול",
        price: 28,
        img: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/7de3bd51a14570365ea4a3b182c00065/0/1/011321420-1635752021960839.jpg",
        rate: 0
    },
    {
        id: 12,
        bookName: "הארי פוטר והנסיך חצי הדם",
        price: 24,
        img: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/7de3bd51a14570365ea4a3b182c00065/0/1/011321341-1635751991907738.jpg",
        rate: 0
    },
    {
        id: 13,
        bookName: "הארי פוטר ואוצרות המוות",
        price: 30,
        img: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/7de3bd51a14570365ea4a3b182c00065/0/1/011322066-1635752287728950.jpg",
        rate: 0
    }
];

// const translations = {
//     en: {
//         title: "ERP Book",
//         addBook: "Add Book",
//         loadBooks: "Load Books",
//         noBook: "There is no book to show",
//         id: "ID",
//         bookName: "Book Name",
//         price: "Price",
//         rate: "Rate",
//         update: "Update",
//         delete: "Delete",
//         confirm: "Confirm",
//         close: "Close",
//         bookDetails: "Book Details",
//         read: "Read", // תרגום לכפתור 'קרא'
//         previous: "Previous", // תרגום לכפתור 'הקודם'
//         next: "Next", // תרגום לכפתור 'הבא'
//     },
//     he: {
//         title: "מערכת ניהול ספרים",
//         addBook: "הוסף ספר",
//         loadBooks: "טען ספרים",
//         noBook: "אין ספר להציג",
//         id: "מזהה",
//         bookName: "שם הספר",
//         price: "מחיר",
//         rate: "דירוג",
//         update: "עדכן",
//         delete: "מחק",
//         confirm: "אישור",
//         close: "סגור",
//         bookDetails: "פרטי ספר",
//         read: "קרא", // תרגום לכפתור 'קרא'
//         previous: "הקודם", // תרגום לכפתור 'הקודם'
//         next: "הבא", // תרגום לכפתור 'הבא'
//     }
// };

// // פונקציה לשינוי שפה
// function changeLanguage(lang) {
//     currentLang = lang;
//     document.title = translations[lang].title; // שינוי כותרת הדף

//     // עדכון כותרות
//     document.querySelector('header h1').innerText = translations[lang].title;
//     document.querySelector('.load-button:nth-child(1)').innerText = translations[lang].addBook;
//     document.querySelector('.load-button:nth-child(2)').innerText = translations[lang].loadBooks;

//     // עדכון כותרות בעמוד
//     const headers = document.querySelectorAll('.header-title');
//     headers[0].innerText = translations[lang].id;
//     headers[1].innerText = translations[lang].bookName;
//     headers[2].innerText = translations[lang].rate;

//     // עדכון תוכן באזור ה-right
//     const rightSection = document.querySelector('.right-section');
//     rightSection.innerText = translations[lang].noBook;

//     // עדכון טקסטים באלמנטים אחרים
//     const addBookForm = document.getElementById("add-book-form");
//     addBookForm.querySelector("h2").innerText = translations[lang].addBook;
//     addBookForm.querySelector("label[for='bookName']").innerText = translations[lang].bookName;
//     addBookForm.querySelector("label[for='price']").innerText = translations[lang].price;
//     addBookForm.querySelector("button[type='submit']").innerText = translations[lang].confirm;

//     const updateBookForm = document.getElementById("update-book-form");
//     updateBookForm.querySelector("h2").innerText = translations[lang].update;
//     updateBookForm.querySelector("label[for='updateBookName']").innerText = translations[lang].bookName;
//     updateBookForm.querySelector("label[for='updatePrice']").innerText = translations[lang].price;
//     updateBookForm.querySelector("button[type='submit']").innerText = translations[lang].confirm;

//     // עדכון כפתורים נוספים
//     document.querySelectorAll("[id^='delete-button']").forEach(button => {
//         button.innerText = translations[lang].delete;
//     });
//     document.querySelectorAll("[id^='read-button']").forEach(button => {
//         button.innerText = translations[lang].read;
//     });
//     document.querySelectorAll("[id^='update-button']").forEach(button => {
//         button.innerText = translations[lang].update;
//     });

//     // עדכון כפתורי פגינציה
//     document.getElementById("prev-button").innerText = translations[lang].previous;
//     document.getElementById("next-button").innerText = translations[lang].next;
// }
