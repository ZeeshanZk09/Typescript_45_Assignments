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
  console.log(Boolean((num2 += num1)));
  
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
  console.log(
    "Is continentName.toLowerCase() === 'United Arab Emirates'? I predict True."
  );
  console.log(continentName.toLowerCase() === "United Arab Emirates");
  
  // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
  
  let student_count_class_01: number = 15;
  let student_count_class_02: number = 20;
  //Test 4
  console.log(
    "Is student_count_class_01 < student_count_class_02? I predict True."
  );
  console.log(student_count_class_01 < student_count_class_02);
  //Test 5
  console.log("Is student_count_class_02 >= 20? I predict True.");
  console.log(student_count_class_02 >= 20);
  //Test 6
  console.log(
    "Is student_count_class_01 + student_count_class_02 === 35? I predict True."
  );
  console.log(student_count_class_01 + student_count_class_02 === 35);
  //Test 8
  console.log(
    "Is student_count_class_01 * student_count_class_02 !== 300? I predict True."
  );
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
  
  console.log(
    'Test "ladyfinger" in the array: ',
    vegNames.includes("ladyfinger")
  );
  
  // • Test whether an item is not in an array
  
  console.log('Testing "tomato" is not in array: ', !vegNames.includes("tomato"));
  
  // Assignment no 25
  // Version 1: Passes the if test (alien_color is 'green')
  let alien_color_pass: string = "green";
  
  if (alien_color_pass === "green") {
    console.log("Congratulations! You just earned 5 points.");
  }
  
  // Version 2: Fails the if test (alien_color is 'yellow')
  let alien_color_fail: string = "yellow";
  
  if (alien_color_fail === "green") {
    console.log("Congratulations! You just earned 5 points.");
  }
  
  // Assignment no 26
  // Version 1: Runs the if block (alien_color is 'green')
  let alien_color_if: string = "green";
  
  if (alien_color_if === "green") {
    console.log(
      "Congratulations! You just earned 5 points for shooting the alien."
    );
  } else {
    console.log("Congratulations! You just earned 10 points.");
  }
  
  // Version 2: Runs the else block (alien_color is 'red')
  let alien_color_else: string = "red";
  
  if (alien_color_else === "green") {
    console.log(
      "Congratulations! You just earned 5 points for shooting the alien."
    );
  } else {
    console.log("Congratulations! You just earned 10 points.");
  }
  
  // Assignment no 27
  // Version 1: Green alien
  let alien_color_1: string = "green";
  
  if (alien_color_1 === "green") {
    console.log("Congratulations! You just earned 5 points.");
  } else if (alien_color_1 === "yellow") {
    console.log("Congratulations! You just earned 10 points.");
  } else if (alien_color_1 === "red") {
    console.log("Congratulations! You just earned 15 points.");
  }
  
  // Version 2: Yellow alien
  let alien_color_2: string = "yellow";
  
  if (alien_color_2 === "green") {
    console.log("Congratulations! You just earned 5 points.");
  } else if (alien_color_2 === "yellow") {
    console.log("Congratulations! You just earned 10 points.");
  } else if (alien_color_2 === "red") {
    console.log("Congratulations! You just earned 15 points.");
  }
  
  // Version 3: Red alien
  let alien_color_3: string = "red";
  
  if (alien_color_3 === "green") {
    console.log("Congratulations! You just earned 5 points.");
  } else if (alien_color_3 === "yellow") {
    console.log("Congratulations! You just earned 10 points.");
  } else if (alien_color_3 === "red") {
    console.log("Congratulations! You just earned 15 points.");
  }
  
  // Assignment no 28
  let myAge: number = 19;
  
  if (myAge < 2) {
    console.log("The person is a baby.");
  } else if (myAge >= 2 && myAge < 4) {
    console.log("The person is a toddler.");
  } else if (myAge >= 4 && myAge < 13) {
    console.log("The person is a kid.");
  } else if (myAge >= 13 && myAge < 20) {
    console.log("The person is a teenager.");
  } else if (myAge >= 20 && myAge < 65) {
    console.log("The person is an adult.");
  } else {
    console.log("The person is an elder.");
  }
  
  // Assignment no 29
  const fruits_i_like: string[] = ["banana", "apple", "grapes"];
  
  // • Write five if statements. Each should check whether a certain kind of fruit is
  // in your array. If the fruit is in your array, the if block should print a statement,
  // such as You really like bananas!
  
  // Check for banana
  if (fruits_i_like.includes("banana")) {
    console.log("You really like bananas!");
  }
  
  // Check for apple
  if (fruits_i_like.includes("apple")) {
    console.log("You really like apples!");
  }
  
  // Check for grapes
  if (fruits_i_like.includes("grapes")) {
    console.log("You really like grapes!");
  }
  
  // Check for orange
  if (fruits_i_like.includes("orange")) {
    console.log("You really like oranges!");
  }
  
  // Check for mango
  if (fruits_i_like.includes("mango")) {
    console.log("You really like mangoes!");
  }
  
  // Assignment no 30
  // Array of usernames
  const usernames: string[] = [
    "zeeshan",
    "Rehan",
    "Mubeen",
    "Fahad",
    "Ayatullah",
  ];
  
  for (const username of usernames) {
    if (username.toLowerCase() === "zeeshan") {
      console.log(
        `Hello ${usernames[0]}, would you like to see a status report?`
      );
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
  
  