// get selectors from HTML
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");
var passwordText = document.querySelector("#password");
// var placeholder = document.querySelector("Your Secure Password")

console.log(password);
console.log(passwordText);
// console.log(placeholder);

var length = "";
var characters = "";
var random = "";
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "01234567890123456789";
var special = "!#$%&*+-=?@_~";

// change for loop to make sure at least one of each character.type is chosen.
function passRandom() {
  for (var i = 0; i < length; i++) 
  random += characters.charAt(Math.floor(Math.random() * characters.length));
  return random;
}

function userSelect() {
  // how many characters?
  var setLength = window.prompt("How many characters should your password contain? Please enter a value between 8 and 128.");
  if (!setLength) {
    return;
  } else if (setLength >= 8 && setLength <= 128) {
    length = setLength;
    characters += lowCase;
  } else if (setLength < 8 || setLength > 128) {
    window.alert("Please try again. Number must be no less than 8 and no greater than 128.");
    userSelect();
  } else if (setLength != num) {
    window.alert("Please enter a number.");
    userSelect();
  }
  console.log(setLength);

  // include capital letters?
  var setCase = window.confirm("Your password will be " + length + " characters long.\nWould you like to include capital letters?");
  if (setCase) {
    setCase = "Yes"
    var setNum = window.confirm("Your password will include capital letters.\nShould we add some numbers?");
    characters += upCase;
  } else {
    setCase = "No"
    upCase = " ";
    setNum = window.confirm("Got it, capital letters will be left out.\nShould we add some numbers?");
  }
  console.log(setCase);

  // include numbers?
  if (setNum) {
    setNum = "Yes"
    characters += num;
    var setSpecial = window.confirm("Numbers will now be included.\nHow about some special characters?")
  } else {
    setNum = "No"
    setSpecial = window.confirm("Nix the numbers, no problem.\nHow about some special characters?")
    num = " ";
  }
  console.log(setNum);

  // include special characters?
  if (setSpecial) {
    window.alert("Special characters sound great!\nPress OK to review your choices.");
    setSpecial = "Yes"
    characters += special;
  } else {
    window.alert("No special characters, no problem!\nPress OK to review your choices.");
    setSpecial = "No"
    special = " "
  }
  console.log(setSpecial);

  // confirm selections
  var selection = window.confirm("We're all set! You chose:\nLength: " + length + " characters.\nLower case letters: Yes (default)\nUpper case letters: " + setCase + "\nNumbers: " + setNum + "\nSpecial characters: " + setSpecial + "\nPress OK to generate your new password! To start over, press cancel.");
  if (selection) {
    passRandom()
  } else {
    return;
  }
  console.log(selection);
}
console.log(characters)

// reset passwordText to placeholder


function writePassword() {
  userSelect()
  password = random;
  passwordText.value = random;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





