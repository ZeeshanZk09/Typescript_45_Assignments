// Assignment no 31
console.log(` Assignment no 31 \n \n`);

const users: string[] = ["zeeshan", "Rehan", "Mubeen", "Fahad", "Ayatullah"];
if (users.length > 0) {
  for (const username of users) {
    if (username.toLowerCase() === "zeeshan") {
      console.log(`Hello ${users[0]}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
} else {
  console.log("We need to find some users!");
}

users.length = 0;

if (users.length === 0) {
  console.log("The list of users is empty now.");
}


// Assignment no 32
console.log(`\n \n Assignment no 32 \n \n`);

// List of current users
const current_users: string[] = ["Asad", "Asgar", "Kinza", "James", "Sara"];

// List of new users
const new_users: string[] = ["Raza", "Kinza", "JAMES", "Sadia", "Amir"];

for (const newUsername of new_users) {
  const isUsernameTaken = current_users.some(
    (currentUsername) =>
      currentUsername.toLowerCase() === newUsername.toLowerCase()
  );

  // Printing a message based on whether the username is taken or available
  if (isUsernameTaken) {
    console.log(
      `The username '${newUsername}' is already taken. Please enter a new username.`
    );
  } else {
    console.log(`The username '${newUsername}' is available.`);
  }
}


// Assignment no 33
console.log(`\n \n Assignment no 33 \n \n`);

const num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of num) {
  if (number === 1) {
    console.log(`${number}st`);
  } else if (number === 2) {
    console.log(`${number}nd`);
  } else if (number === 3) {
    console.log(`${number}rd`);
  } else {
    console.log(`${number}th`);
  }
}


// Assignment no 34
console.log(`\n \n Assignment no 34 \n \n`);

const favoritePizzas: string[] = [
  "Fajeeta",
  "pepperoni",
  "BBQ Chicken",
  "Tikka",
];

for (const pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}

console.log("I some how love pizza but I don't eat it daily!");


// Assignment no 35
console.log(`\n \n Assignment no 35 \n \n`);

const petAnimals: string[] = ["Camel", "Cow", "Goat", "Parrot", "Peacock"];

for (const animals of petAnimals) {
  console.log(`A ${animals} would make a great pet.`);
}

console.log("Any of these animals would make a great pet.");

// Assignment no 36
console.log(`\n \n Assignment no 36 \n \n`);

function make_shirt(size: string, message: string): string {
  return `The shirt is ${size} size and has the message ${message}.`;
}

console.log(make_shirt("Large", "Apna Campus!"));

// Assignment no 37
console.log(`\n \n Assignment no 37 \n \n`);

function updated_shirt(
  size: string = "Large",
  message: string = "I love TypeScript"
): void {
  console.log(`The shirt is ${size} size and has the message: "${message}".`);
}
updated_shirt();
updated_shirt("Medium");
updated_shirt("Small", "Different message");

// Assignment no 38
console.log(`\n \n Assignment no 38 \n \n`);

function describe_city(
  city: string,
  country: string = " Default Country"
): void {
  console.log(`${city} is in${country}.`);
}

describe_city("Islamabad", "Pakistan");
describe_city("Ankara", "Turky");
describe_city("Doha");

// Assignment no 39
console.log(`\n \n Assignment no 39 \n \n`);

function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

const city_country_pair1 = city_country("Lahore", "Pakistan");
const city_country_pair2 = city_country("Makka", "Saudia Arab");
const city_country_pair3 = city_country("Dhaka", "Bangladash");

console.log(city_country_pair1);
console.log(city_country_pair2);
console.log(city_country_pair3);

// Assignment no 40
console.log(`\n \n Assignment no 40 \n \n`);

// makeAlbum naam ka function define kiya, jismein artist ka naam, album ka title, aur optional tracks ka number ha
function makeAlbum(
  artist: string,
  title: string,
  tracks?: number
): { artist: string; title: string; tracks?: number } {
  //aak album object banaya jis mein artist aur title properties hongi
  let album: { artist: string; title: string; tracks?: number } = {
    artist: artist,
    title: title,
  };

  //check kia ka tracks parameter diya gaya hai ya nahi, agar hai to usa album object main add karo
  if (tracks !== undefined) {
    album.tracks = tracks;
  }
  return album;
}

// makeAlbum function ka istemal karke teen alag-alag albums banaye
const album1 = makeAlbum("Arjit Singh", "Album1", 70);
const album2 = makeAlbum("Rahat Fateh Ali Khan", "Album2");
const album3 = makeAlbum("Chahat Fateh Ali Khan", "Album3", 150);

// Now Print the albums
console.log(album1);
console.log(album2);
console.log(album3);

// Assignment no 41
console.log(`\n \n Assignment no 41 \n \n`);

// Array of magician's names
const magicianNames: string[] = [
  "Merlin",
  "David Copperfield",
  "Houdini",
  "Penn & Teller",
];

// Function to show magicians from an array
function showMagicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Call the function to show magicians
showMagicians(magicianNames);

// Assignment no 42
console.log(`\n \n Assignment no 42 \n \n`);

// Function to show magicians from an array
function showMagicians2(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Function to add "the Great" to each magician's name
function makeGreat(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "the Great " + magicians[i];
  }
}

// Array of magician's names
const magicianNames2: string[] = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];

// Call makeGreat function to modify magician names
makeGreat(magicianNames2);

// Call the function to show modified magicians
showMagicians2(magicianNames2);

// Assignment no 43
console.log(`\n \n Assignment no 43 \n \n`);

// Function to show magicians from an array
function showMagiciansAgain(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Function to add "the Great" to each magician's name
function makeGreat2(magicians: string[]): string[] {
  const greatMagicians: string[] = [];

  for (let i = 0; i < magicians.length; i++) {
    greatMagicians[i] = "the Great " + magicians[i];
  }

  return greatMagicians;
}

// Array of magician's names
const magicianNamesUpdated: string[] = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];

// Call makeGreat function with a copy of the original array
const greatMagicians: string[] = makeGreat2([...magicianNamesUpdated]);

// Call the function to show original magicians
showMagiciansAgain(magicianNamesUpdated);

// Call the function to show modified magicians
showMagiciansAgain(greatMagicians);

// Assignment no 44
console.log(`\n \n Assignment no 44 \n \n`);

function makeSandwich(...items: string[]) {
  console.log("Making a sandwich with the following items:");
  items.forEach(item => console.log("- " + item));
}

// Call the function with different numbers of arguments
makeSandwich('chicken', 'cheese', 'butter');
makeSandwich('egg', 'butter', "ketchup", "chicken");
makeSandwich('peanut butter', 'sauce');

// Assignment no 45
console.log(`\n \n Assignment no 45 \n \n`);

function createCar(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { [key: string]: any } {

  let car: { [key: string]: any } = {

    "manyfacturer": manufacturer,
    "model": model
  };

  for (let option of options) {

    for (let key in option) {
      car[key] = option[key];
    }
  }
  return car;
}
let carInfo = createCar('Toyota', 'Carmy', { "color": "blue" }, { "year": 2022 });
console.log(carInfo);