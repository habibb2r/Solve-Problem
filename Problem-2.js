const books = [
  { title: "2024", author: "Lawrence Durrell", year: 2024 },
  { title: "How to be a Level 2 Programmer", author: "Jhankar Mahbub", year: 2025 },
  { title: "Complete web development", author: "Jhankar Bhai", year: 2023 }
];

const getBookTitles = (bookArray) => {
  return bookArray.map(book => book.title);
};

console.log(getBookTitles(books));

