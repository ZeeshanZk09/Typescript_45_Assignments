"use strict";
// Assignment no 11
console.log(`\n \n Assignment no 11 \n \n`);
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
console.log(`\n \n Assignment no 12 \n \n`);
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
console.log(`\n \n Assignment no 13 \n \n`);
let transportationMode = ["car", "motorcycle", "bicycle", "bus"];
for (let i = 0; i < transportationMode.length; i++) {
    console.log(`I would like to own a ${transportationMode[i]}`);
}
transportationMode.forEach((mode) => {
    console.log(`I would like to own ${mode}`);
});
// Assignment no 14
console.log(`\n \n Assignment no 14 \n \n`);
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
console.log(`\n \n Assignment no 15 \n \n`);
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
console.log(`\n \n Assignment no 16 \n \n`);
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
console.log(`\n \n Assignment no 17 \n \n`);
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
console.log(`\n \n Assignment no 18 \n \n`);
let placeToVisit = [
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
console.log("Reverse Alphabetical Order changed:", placeToVisit.sort().reverse());
console.log(placeToVisit);
// Assignment no 19
console.log(`\n \n Assignment no 19 \n \n`);
//continue with Assignment_14
//Guest list
let guestList = ["Zeeshan", "Rehan", "Fahad"];
//continue with Assignment_15
//replaced guest
let absentGuest = "Rehan";
let newGuest = "Mubeen";
guestList[1] = newGuest;
console.log(`${absentGuest} is not coming to the party.\n`);
console.log(guestList);
//continue with Assignment_16
console.log(`Good News! we find big table so we are inviting 3 more guests.\n`);
guestList.unshift("Kumail");
console.log(guestList[0]);
guestList.splice(2, 0, "Bilal");
console.log(guestList[2]);
guestList.push("Talha");
console.log(`${guestList[guestList.length - 1]} \n`);
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]} It is our pleasure to invite you in our party.\nThank You!\n`);
}
//continue with Assignment_17
console.log("Sorry we can not arrange big table, only two peoples will be invited.");
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
// ==> assignment_19
console.log(`\nTotal number of guest is: ${guestList.length}`);
// Assignment no 20
console.log(`\n \n Assignment no 20 \n \n`);
let computerAccesories = [
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
