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
