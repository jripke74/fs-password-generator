// Build a Password Generator App
// In this lab, you'll practice using functions by building
// a random password generator.

// Objective: Fulfill the user stories below and get all the
// tests to pass to complete the lab.

// User Stories:

// 1. You should create a function called generatePassword
// that takes a parameter, indicating the length of generated
// password. You can name the parameter whatever you like.
// 2. Your function should return a string which represents a
// randomly generated password. You should use the following
// string and different Math methods to help you return a new
// string with random characters in
// it: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().

function generatePassword(passLength) {
  let value = "";
  let characterString =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let characterArray = characterString.split("");

  for (let i = 0; i < passLength; i++) {
    let randomNum = Math.floor(Math.random() * characterArray.length);
    value += characterArray[randomNum];
  }
  return value;
}

function generatePassword2(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const randomNumber = Math.floor(Math.random() * chars.length);
  const password = chars[randomNumber].repeat(length, chars[randomNumber]);
  return password;
}
const password = generatePassword(4);
console.log(`Generated password: ${password}`);
