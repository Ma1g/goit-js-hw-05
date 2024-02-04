// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(makePizza)
// console.log(makePizza("AbraKad"))

//--------------------------------------------------------------------------------

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest("Mango", greet); // "Registering Mango!"
// 															 // "Welcome Mango!"

// registerGuest("Mango", notify); // "Registering Mango!"
// 																// "Dear Mango, your room will be ready in 30 minutes"

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest("Mango", function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest("Poly", function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291]));   // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// function filterArray(numbers, value) {
//     const resultArray = [];

//     numbers.forEach(item => {
//         if (item > value) {
//             resultArray.push(item);
//         }
//     })
//     return resultArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // Returns [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // Returns [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // Returns []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // Returns [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // Returns [24, 41, 76]
// // Additional call with random but valid arguments
// console.log(filterArray([8, 15, 22, 30, 18], 20)); // Returns [22, 30]

// const numbers = [5, 10, 15, 20, 25];

// // Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// // Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Inex ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }
