
// set password criteria
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "01234567890123456789";
var special = "!#$%&*+-=?@_~";
var characters = "";
var charactersArray = []

function userSelect() {
  // how many characters?
  var setLength = window.prompt("How many characters should your password contain? Please enter a value between 8 and 128.");
  if (!setLength) {
    return;
  } else if (setLength >= 8 && setLength <= 128) {
    length = +setLength;
    characters += lowCase;
    charactersArray.push(lowCase);

  } else if (setLength < 8 || setLength > 128) {
    window.alert("Please try again. Number must be no less than 8 and no greater than 128.");
    userSelect();
  } else if (setLength !== num) {
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
    charactersArray.push(upCase);
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
    charactersArray.push(num);
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
    charactersArray.push(special);
  } else {
    window.alert("No special characters, no problem!\nPress OK to review your choices.");
    setSpecial = "No"
    special = " "
  }
  console.log(setSpecial);

  // confirm selections
  var selection = window.confirm("We're all set! You chose:\nLength: " + length + " characters.\nLower case letters: Yes (default)\nUpper case letters: " + setCase + "\nNumbers: " + setNum + "\nSpecial characters: " + setSpecial + "\nPress OK to generate your new password! To start over, press cancel.");
  if (selection) {
    randomOneOfEach()
  } else {
    return;
  }
  console.log(selection);
}

// generate random: 1 of each character type
var oneEach = ""
var randomSelectCharacters = "";

function randomOneOfEach() {
  for (var a = 0; a < charactersArray.length; a++) {
    oneEach += charactersArray[a].charAt(Math.floor(Math.random() * charactersArray.length));
  }
  randomSelectCharacters += oneEach;
  return oneEach;
}

// generate random: remaining characters
var remaining = "";
var length;

function randomRemaining() {
  for (var r = 0; r < (length - oneEach.length); r++) {
    remaining += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  randomSelectCharacters += remaining;
  return remaining;
}

// write password

var password = document.getElementById("password");
function writePassword() {
  userSelect()
  randomRemaining();
  
  // shuffle the password to make it more random
  var randomPassword = randomSelectCharacters.split("").sort(function () { return 0.5 - Math.random() }).join("");
  console.log(randomPassword);
  
  var passwordText = document.querySelector("#password");
  passwordText.value = randomPassword;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);





