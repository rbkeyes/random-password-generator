// // // "generate" button
var generateBtn = document.querySelector("#generate");

var length = " "
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "01234567890123456789";
var special = "!#$%&*+-=?@_~";
var chars = []


// // // Write password to the #password input
generateBtn.addEventListener("click", writePassword);
function writePassword() {

  // how many characters?
  var setLength = window.prompt("How many characters should your password contain? Please enter a value between 8 and 128.");
  if (!setLength) {
    return;
  } else if (setLength >= 8 && setLength <= 128) {
    length = setLength;
  } else if (setLength < 8 || setLength > 128) {
    window.alert("Please try again. Number must be no less than 8 and no greater than 128.");
    writePassword();
  } else if (setLength != num) {
    window.alert("Please enter a number.");
    writePassword();
  }

  // include capital letters?
  var setCase = window.confirm("Your password will be " + length + " characters long.\nWould you like to include capital letters?");
  if (setCase) {
    setCase = "Yes"
    var setNum = window.confirm("Your password will include capital letters.\nShould we add some numbers?");
    chars.push(upCase);
  } else {
    setCase = "No"
    upCase = " ";
    setNum = window.confirm("Got it, capital letters will be left out.\nShould we add some numbers?");
  }

  // include numbers?
  if (setNum) {
    setNum = "Yes"
    chars.push(num);
    var setSpecial = window.confirm("Numbers will now be included.\nHow about some special characters?")
  } else {
    setNum = "No"
    setSpecial = window.confirm("Nix the numbers, no problem.\nHow about some special characters?")
    num = " ";
  }

  // include special characters?
  if (setSpecial) {
    window.alert("Special characters sound great!\nPress OK to review your choices.");
    setSpecial = "Yes"
    chars.push(special)
    return;
  } else {
    window.alert("No special characters, no problem!\nPress OK to review your choices.");
    setSpecial = "No"
    special = " "
    return;
  }
  
}

var confirmChoices = window.confirm("We're all set! You chose:\nLength: " + length + " characters.\nLower case letters: Yes(default)\nUpper case letters: " + setCase + "\nNumbers: " + setNum + "\nSpecial characters: " + setSpecial + "\nPress OK to generate your new password! To start over, press cancel.");

var confirmChoices = window.confirm("We're all set! You chose:\nLength: " + length + " characters.\nLower case letters: Yes(default)\nUpper case letters: " + setCase + "\nNumbers: " + setNum + "\nSpecial characters: " + setSpecial + "\nPress OK to generate your new password! To start over, press cancel.");
// // // Add event listener to generate button
// // 

// writePassword()

// var password=document.getElementById("password");

// var password = generatePassword();
// var passwordText = document.querySelector("#password");
// // generate password to screen
// function genPassword() {

// }
