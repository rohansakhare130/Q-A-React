// Assignment 18 : Prerequisites for React.js

// Q1- Give an array of numbers use the map function with an arrow function to square each element of the array.

const numbers = [1, 2, 3, 4, 5];
const squarenubers = numbers.map((num) => num ** 2);
console.log(squarenubers);
//o/p; [1,4,9,16,25]

// Q2- Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators
function students(score) {
  return score >= 75
    ? "A"
    : score >= 60
    ? "B"
    : score >= 40
    ? "C"
    : score >= 35
    ? "D"
    : score >= 30
    ? "F"
    : "F";
}
console.log(students(65)); // Output: B
console.log(students(27)); // Output: D
console.log(students(81)); // Output: A

//Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

const car = {
  company: "Toyota",
  model: "Camry",
  year: 2018,
};

function updateCarYear(car, newYear) {
  car.year = newYear;
  return car;
}
const updateCar = updateCarYear(car, 2020);

const { model, year } = updateCar;
console.log(`Model: ${model}, Year: ${year}`);

// Output: Model: Camry, Year: 2020

//Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
const isPrimenumber = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i * i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeNumbers = numbers.filter(isPrimenumber);
console.log(primeNumbers); // Output: [2, 3, 5, 7,11]

//Q5 -  State different use cases of map, filter and reduce functions.

// Map:

// 1. Map function is Use map to transform each element in an array to a new value.
// 2. Use map to convert data types, such as converting strings to numbers.
// 3. Use map to extract specific properties from objects in an array.
// 4. Use map to create a new array with the same length as the original array.

// Filter:

// 1. Filter function is Use filter to remove elements that don't meet a certain condition.
// 2. Use filter to find elements that match a specific criteria.
// 3. Use filter to remove invalid or incorrect data.
// 4. Use filter to split an array into two separate arrays based on a condition.

// Reduce:
// 1. The reduce function is used to reduce an array to a single value.
// 2. Accumulating values: Use reduce to accumulate values, such as concatenating strings.
// 3. Grouping data: Use reduce to group data by a common key or property.
// 4. Flattening arrays: Use reduce to flatten a nested array into a single array.

// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
fetchData();

//Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

const person = {
  name: "Ashok Raje",
  address: {
    street: "Suncity Road",
    city: "Mumbai",
    state: "Maharashtra",
    zip: "411051",
  },
  contact: {
    phone: "940-940-8885",
    email: "ashok@example.com",
  },
};
const phoneNumber = person.contact?.phone;
console.log(phoneNumber); // Output: 555-555-5555

// If the contact property is missing, phoneNumber will be undefined
const personWithoutContact = {
  name: "Raviraj Shinde",
  address: {
    street: "xyz",
    city: "Pune",
    state: "Maharashtra",
    zip: "41103",
  },
};
const phoneNumberWithoutContact = personWithoutContact.contact?.phone;
console.log(phoneNumberWithoutContact); // Output: undefined
