"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Assignment no 1
console.log("Hello World");
// Assignment no 2
let personName = "Asad";
console.log(`Hello ${personName}, would you like to learn some Python today?`);
// Assignment no 3
let personName2 = "Saqib";
console.log(personName2.toLowerCase(), personName2.toUpperCase(), personName2.replace(/\bw/g, (c) => c.toUpperCase()));
//  Assignment no 4
let famQoute = "“A person who never made a mistake never tried anything new.”";
let author = "Albert Einstein";
console.log(`${author} once said, ${famQoute}`);
// Assignment no 5
let famousPerson = "Albert Einstein";
let message = `${famousPerson} once said, ${famQoute}`;
console.log(message);
// Assignment no 6
let nameWithWhiteSpace = "\t \n Zeeshan Khan \t \n";
console.log("Name with White Spaces:", nameWithWhiteSpace);
let strippedName = nameWithWhiteSpace.trim();
console.log("Stripped Name :", strippedName);
// Assignment no 7
let additionResult = 5 + 3;
console.log(additionResult);
let subtractionResult = 10 - 2;
console.log(subtractionResult);
let multiplicationResult = 2 * 4;
console.log(multiplicationResult);
let divisionResult = 16 / 2;
console.log(divisionResult);
// Assignment no 8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Assignment no 9
let favoriteResult = 8;
let messageResult = `My favorite number is ${favoriteResult}`;
console.log(messageResult);
// Assignment no 10
// this programme adds two number and prints the result
// define two numbers
let number1 = 10;
let number2 = 20;
// add two numbers
let result = number1 + number2;
// print result
console.log(result);
// Assignment no 11
// array
// defines an array of names
let names = [
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
let transportationMode = ["car", "motorcycle", "bicycle", "bus"];
for (let i = 0; i < transportationMode.length; i++) {
    console.log(`I would like to own a ${transportationMode[i]}`);
}
transportationMode.forEach((mode) => {
    console.log(`I would like to own ${mode}`);
});
// Assignment no 14
// Define array of guest
let guestlist = ["Adullah", "Zafar", "Muzafir", "Maheen"];
// Invite each guest to dinner
guestlist.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner`);
});
// map()]
// invite guest
let invitation = guestlist.map((guest) => `Dear ${guest}, your are cordially invited to dinner `);
console.log(invitation);
invitation.forEach((invitations) => {
    console.log(invitations);
});
// Assignment no 15
// getting guestlist mentioned in assignment no 14
// print the name who can't make dinner
let unableAttent = guestlist.splice(1, 1)[0];
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
console.log(`Unfortunately! the new table won't arrive so I can invite only two guest because new table has not arrieved yet.`);
guestlist.unshift("Alice", "Bob");
// print message updated list
console.log(`Updated list of guest:`, guestlist);
// remove guest from the list
while (guestlist.length > 2) {
    let removedGuest = guestlist.pop();
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
let placeToVisit = ["Al Makka", "Al Madina", "Quit", "Baghdad", "Palestine"];
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
