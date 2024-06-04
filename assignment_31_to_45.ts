// Assignment no 31
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

// List of current users
const current_users: string[] = ["Asad", "Asgar", "Kinza", "James", "Sara"];

// List of new users
const new_users: string[] = ["Raza", "Kinza", "JAMES", "Sadia", "Amir"];


for (const newUsername of new_users) {
    
    const isUsernameTaken = current_users.some(
        (currentUsername) => currentUsername.toLowerCase() === newUsername.toLowerCase()
    );

    // Printing a message based on whether the username is taken or available
    if (isUsernameTaken) {
        console.log(`The username '${newUsername}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${newUsername}' is available.`);
    }
}