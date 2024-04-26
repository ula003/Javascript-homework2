let name = "Джон";
let admin = name ;
console.log(admin);

///Второе задание
let balance = 25000;

// Расходы
let car = 4480;
let food = 890;
//Доходы
let invoice = 5500;
let stock = 4200;

/// Итоги
let totalBalance = balance - car - food + invoice + stock;

console.log("Итог " + totalBalance)






// // Показать что-то в консоле 
// console.log('Hello World');

// // Показать предупреждения в консоле
// console.warn('Hello World');

// // Показать ошибку в консоле
// console.error('Hello World');


// console.log(typeof "Hello World"); // string
// console.log(typeof 12); // number
// console.log(typeof true, typeof false); // boolean
// console.log(typeof {
//     name: 'Hello WOrld'
// }); // object
// console.log(typeof undefined); // undefined
// console.log(typeof null) // null 
// console.log(typeof 120381290381920381903812931023) // bigint


// let, const, var

// let a = 'Ozodbek';
// console.log(a);

// a = 'Amir';
// const name = 'Ozodbek';
// name = 'Amir';

// console.log(a);
// console.log(name);

// console.log(a);
// var a = 16;

// let a = 'Hello World';
// let firstNameCase = 'Hello World'; // camelCase
// // let firstname = 'Hello World';
// let first_name = 'Hello World'; // snake_case
// let FirstName = "Hello World"; // PascalCase


let name = 'Ozodbek';
let surname = `Shukurov ${name}`;

console.log(surname + name); // конкатенция 
console.log(`Hello my name is ${name} my surname is ${surname}`); // интерполяция 
console.log('Hello my name is ' + name + ' my surname is ' + surname);


let a = 15;
let b = a + 15;

console.log(b);

