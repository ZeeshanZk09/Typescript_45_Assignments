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

// Assignment no 11
// array
// defines an array of names
let names: string[] = [
  "Abdullah",
  "Nouman",
  "Muzammil",
  "Hammad",
  "Adul Samad",
];
// For loop
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
// for each
names.forEach((name) => {
  console.log(name);
});
// for of loop
for (const friendNames of names) {
  console.log(friendNames);
}

// Assignment no 12
// by for loop
for (let i = 0; i < names.length; i++) {
  console.log(`hello,${names[i]}! How are you today?`);
}
// by foreach loop
names.forEach((name) => {
  console.log(`hello,${name}! How are you today?`);
});
// by forof loop
for (const friendNames of names) {
  console.log(`hello,${friendNames}! How are you today?`);
}

// Assignment no 13
let transportationMode: string[] = ["car", "motorcycle", "bicycle", "bus"];
for (let i = 0; i < transportationMode.length; i++) {
  console.log(`I would like to own a ${transportationMode[i]}`);
}
transportationMode.forEach((mode) => {
  console.log(`I would like to own ${mode}`);
});

// Assignment no 14
// Define array of guest
let guestlist: string[] = ["Adullah", "Zafar", "Muzafir", "Maheen"];
// Invite each guest to dinner
guestlist.forEach((guest) => {
  console.log(`Dear ${guest}, you are cordially invited to dinner`);
});
// map()]
// invite guest
let invitation: string[] = guestlist.map(
  (guest) => `Dear ${guest}, your are cordially invited to dinner `
);
console.log(invitation);
invitation.forEach((invitations) => {
  console.log(invitations);
});

// Assignment no 15
// getting guestlist mentioned in assignment no 14
// print the name who can't make dinner
let unableAttent: string = guestlist.splice(1, 1)[0];
console.log(`${unableAttent} can't make dinner for me `);
// push a new name
guestlist.push("Zeeshan Khan");
console.log(guestlist);
guestlist.forEach((newGuestList) => {
  console.log(`Dear ${newGuestList}, your are cordially invited to dinner `);
});

// Assignment no 16
// getting guestlist mentioned in assignment no 14
console.log(`Great new! we found a bigger table`);
// unshift
guestlist.unshift(`Rehan Khan`);
// splice();
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Nouman");
// push();
guestlist.push("cheetah");
console.log(guestlist);
guestlist.forEach((Guest) => {
  console.log(`Dear ${Guest} you are cordially invited to dinner`);
});

// Assignment no 17
// getting guestlist mentioned in assignment no 14
console.log(
  `Unfortunately! the new table won't arrive so I can invite only two guest because new table has not arrieved yet.`
);

guestlist.unshift("Alice", "Bob");

// print message updated list

console.log(`Updated list of guest:`, guestlist);

// remove guest from the list
while (guestlist.length > 2) {
  let removedGuest: string | undefined = guestlist.pop();
  if (removedGuest !== undefined) {
    console.log(`Sorry, ${removedGuest}, I can't invite you to the dinner `);
  }
}

// • Print a message to each of the two people still on your list, letting them know they’re still invited.
guestlist.forEach((Guest) => {
  console.log(`Dear ${Guest} you are still invited for the dinner`);
});
// remove 2 names from list
guestlist.splice(0, guestlist.length);

// print updatedempty list
console.log(`Updated list of guest: ${guestlist}`);

// Assignment no 18
let placeToVisit: string[] = [
  "Al Makka",
  "Al Madina",
  "Quit",
  "Baghdad",
  "Palestine",
];
// print in orignal order
console.log(placeToVisit);
// • Print your array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", placeToVisit.slice().sort());
// • Showing array is still in its original order by printing it.
console.log(placeToVisit);
// • Print array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Order:", placeToVisit.slice().sort().reverse());
// • Showing that array is still in its original order by printing it again.
console.log(placeToVisit);
// • Reversing the order of list. Print the array to show that its order has changed.
console.log("Reverse Order changed");
placeToVisit.reverse();
console.log(placeToVisit);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Original Order:", placeToVisit.reverse());
console.log(placeToVisit);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Original Order:", placeToVisit.sort());
console.log(placeToVisit);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(
  "Reverse Alphabetical Order changed:",
  placeToVisit.sort().reverse()
);
console.log(placeToVisit);

// Assignment no 19
//continue with exercise_14
//Guest list
let guestList: string[] = ["Zeeshan", "Rehan", "Fahad"];

//continue with exercise_15
//replaced guest
let absentGuest: string = "Rehan";
let newGuest: string = "Mubeen";
guestList[1] = newGuest;

console.log(`${absentGuest} is not coming to the party.\n`);
console.log(guestList);
//continue with exercise_16

console.log(`Good News! we find big table so we are inviting 3 more guests.\n`);

guestList.unshift("Kumail");
console.log(guestList[0]);
guestList.splice(2, 0, "Bilal");
console.log(guestList[2]);
guestList.push("Talha");
console.log(`${guestList[guestList.length - 1]} \n`);
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `Dear ${guestList[i]} It is our pleasure to invite you in our party.\nThank You!\n`
  );
}

//continue with exercise_17

console.log(
  "Sorry we can not arrange big table, only two peoples will be invited."
);

while (guestList.length > 2) {
  let remove_guest = guestList.pop();
  console.log(`Sorry ${remove_guest}, You can not be invited for Dinner.\n`);
}
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]} ,You are still invited.\nThank You!\n`);
}
console.log(guestList);

guestList.splice(0, 2);
console.log(guestList);

//exercise_19

console.log(`\nTotal number of guest is: ${guestList.length}`);

// Assignment no 20
let computerAccesories: string[] = [
  "LED",
  "Keyboard",
  "Mouse",
  "CPU",
  "Speaker",
  "SSD",
  "VG cable",
  "Laptop",
];

//print the Message of list
console.log("\n List of Computer Accesories:");

//print the value of Array in the form of list
computerAccesories.forEach((Accesories) => console.log(Accesories));

// Assignment no 21
interface course_we_study {
  courseName: string;
  location: string;
  onSiteStudent: number;
}

let course_we_study: course_we_study = {
  courseName: "Cloud Applied GenAI Engineering",
  location: "Governor House Sindh",
  onSiteStudent: 50000,
};

console.log(course_we_study);

// Assignment no 22

let errorArray: string[] = ["Apple", "Banana", "Carrot", "Dewberry"];

//producing Error ! by Accessing invald index of array
console.log(errorArray[10]);

//Error removed
console.log(errorArray[1]);

// Assignment no 23
let car = "subaru";

console.log("Is car == 'subaru'? I predict True.");

console.log(car == "subaru");

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

//Making a variables
let num1: number = 4;
let num2: number = 7;

//Test 1
console.log("Test 1: num1 is equal to 4?");
console.log(num1 == 4);

//Test 2
console.log("\nTest 2: num2 is equal to 7?");
console.log(num2 == 7);

//Test 3
console.log("\nTest 3: num1 is not equal to 7?");
console.log(num1 != num2);

//Test 4
console.log("\nTest 4: num2 is greater then num1?");
console.log(num2 > num1);

//Test 5
console.log("\nTest 5: num1 is smaller than num2?");
console.log(num1 < num2);

//Test 6
console.log("\nTest 6: Is the sum of num1 and num2 is equal to 11?");
console.log(Boolean(num2 += num1));

//Test 7
console.log("\nTest 7: 4 is equal to 7?");
console.log(num1 == num2);

//Test 8
console.log("\nTest 8: 7 is not equal to 7?");
console.log(num2 != 7);

//Test 9
console.log("\nTest 9: 5 is greater than 7");
console.log(4 < num2);

//Test 10
console.log("\nTest 10: 70 is smaller than 40");
console.log(70 < 40);

// Assignment no 24

// • Tests for equality and inequality with strings
let fruit: string = "banana";

//Test 1
console.log("Is fruit equal to 'carrot'? I predict false.");
console.log(fruit === "carrot");
//Test 2
console.log("Is fruit !== 'apple'? I predict True.");
console.log(fruit !== "apple");

//  •Tests using the lower case function

let continentName: string = "United Arab Emirates";
//Test 3
console.log("Is continentName.toLowerCase() === 'United Arab Emirates'? I predict True.");
console.log(continentName.toLowerCase() === "United Arab Emirates");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let student_count_class_01: number = 15;
let student_count_class_02: number = 20;
//Test 4
console.log("Is student_count_class_01 < student_count_class_02? I predict True.");
console.log(student_count_class_01 < student_count_class_02);
//Test 5
console.log("Is student_count_class_02 >= 20? I predict True.");
console.log(student_count_class_02 >= 20);
//Test 6
console.log("Is student_count_class_01 + student_count_class_02 === 35? I predict True.");
console.log(student_count_class_01 + student_count_class_02 === 35);
//Test 8
console.log("Is student_count_class_01 * student_count_class_02 !== 300? I predict True.");
console.log(student_count_class_01 * student_count_class_02 !== 300);

// • Tests using "and" and "or" operators

let isFollow: boolean = true;
let isUnfollow: boolean = false;
//Test 9
console.log("Is isFollow && isUnfollow? I predict true.");
console.log(isFollow || isUnfollow);
//Test 10
console.log("Is isFollow || isUnfollow? I predict false.");
console.log(isFollow && isUnfollow);

// • Test whether an item is in an array

const vegNames: string[] = ["ladyfinger", "turnip", "potato"];

//Test 11

console.log('Test "ladyfinger" in the array: ', vegNames.includes("ladyfinger"));

// • Test whether an item is not in an array

console.log('Testing "tomato" is not in array: ', !vegNames.includes("tomato"));


// Assignment no 25
// •Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// •Write one version of this program that passes the if test and another that fails.
//  (The version that fails will have no output.)
 


// Version 1: Passes the if test (alien_color is 'green')
let alien_color_pass: string = 'green';

if (alien_color_pass === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

// Version 2: Fails the if test (alien_color is 'yellow')
let alien_color_fail: string = 'yellow';

if (alien_color_fail === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}