// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 22, gender: "female" },
  { name: "David", age: 35, gender: "male" },
];

const females = people.filter((p) => p.gender == "female");
const femaleNames = females.map((f) => f.name);
console.log(femaleNames);

// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
  },
];
const bookTitle = books.map((b) => b.title);
console.log(bookTitle);

// 3.Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (n) => n * n;
const double = (n) => n * 2;
const add5 = (n) => n + 5;
const compose = (f, g) => (x) => f(g(x));
const squareDoubleAdd5 = compose(square, double, add5);
console.log(squareDoubleAdd5(2));

// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

// 5.Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
