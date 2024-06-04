import { Console, log } from "console";

// Assignment no 1
console.log("Hello World");

// Assignment no 2
let personName: string = "Asad";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// Assignment no 3
let personName2: string = "Saqib";
console.log(
  personName2.toLowerCase(),
  personName2.toUpperCase(),
  personName2.replace(/\bw/g, (c) => c.toUpperCase())
);

//  Assignment no 4
let famQoute: string =
  "“A person who never made a mistake never tried anything new.”";
let author: string = "Albert Einstein";
console.log(`${author} once said, ${famQoute}`);

// Assignment no 5
let famousPerson: string = "Albert Einstein";
let message: string = `${famousPerson} once said, ${famQoute}`;
console.log(message);

// Assignment no 6
let nameWithWhiteSpace: string = "\t \n Zeeshan Khan \t \n";
console.log("Name with White Spaces:", nameWithWhiteSpace);
let strippedName: string = nameWithWhiteSpace.trim();
console.log("Stripped Name :", strippedName);

// Assignment no 7

let additionResult: number = 5 + 3;
console.log(additionResult);

let subtractionResult: number = 10 - 2;
console.log(subtractionResult);

let multiplicationResult: number = 2 * 4;
console.log(multiplicationResult);

let divisionResult: number = 16 / 2;
console.log(divisionResult);

// Assignment no 8

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// Assignment no 9

let favoriteResult: number = 8;
let messageResult: string = `My favorite number is ${favoriteResult}`;
console.log(messageResult);

// Assignment no 10
// this programme adds two number and prints the result
// define two numbers
let number1: number = 10;
let number2: number = 20;
// add two numbers
let result: number = number1 + number2;
// print result
console.log(result);

