// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// create variables for:
// characters to be used (upper case, lower case, numerical, special).

// prompt user enter desired # of characters (>=8, <=128)

// prompt user to select desired variable types for password
// individual prompts? or can there be 
// radio buttons or checkboxes to select?

// if user selection does not meet parameters, alert user.
// once selections are made, run generate password fxn
// run 

  // // applied to text box on screen after running function writePassword


// // characters to choose from 
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var lowerCase = "abcdefghijklmnopqrstuvwxyz";
// var num = "01234567890123456789";
// var special = "!#$%&*+-=?@_~";
// var characters = (lowerCase.concat(upperCase + num + special));


//   passLength = pasword length (a number), entered by user
var setLength = window.prompt("How long should your password be? Please enter a value between 8 and 128.")  
if (!setLength) {
    window.prompt(setLength)
  } else if (setLength < 8 || setLength > 128) {
    window.alert("Please try again. Number must be no less than 8 and no greater than 128.");
    window.prompt (setLength)
  } else {
    var length = window.confirm("You have entered " + setLength + ". Is this correct?");
  }

  // choose capital letters 
  if (length) {
    var chooseCap = window.confirm("OK, your password will be " + setLength + " characters long. Would you like you include capital letters?");
  // no caps
  } else {
    window.prompt(setLength)
  }

  // choose numbers
  if (chooseCap) {
    var chooseNum = window.confirm("Capital letters it is. How about numbers?");
  // no numbers
  } else {
    window.confirm("Alright, no capital letters. How about numbers?")
  }

  // choose special characters
  if (chooseNum) {
    var chooseSpec = window.confirm("Great, numbers will be included. Do you want special characters?")
  // no special characters
  } else {
    window.confirm("No numbers, got it. Do you want special characters?")
  }

  if (chooseSpec || !chooseSpec) {
    window.confirm("Your selections have been made:\nPassword Length: " + setLength + "\nCapital Letters: " + chooseCap + "\nNumbers: " + chooseNum + "\nSpecial Characters: " + chooseSpec + "\nClick OK to generate your random password!")
  }


//   // if none selected (assume lower case is automatically included)
//   if (selectAlpha && selectNum && selectSpecial !== "true") {
//     //  variable for default (lower case) only (boolean)
//     var defaultChar = window.confirm("Your password will contain lowercase letters only, are you sure you want to proceed?");
// } else if (selectAlpha || selectNum || selectSpecial === "true" ) {
//     var allChar = window.confirm("Characters selection complete! Ready to generate your random password?")
// }



//   // else if () {
//     // var includeAll = window.confirm("Looks like you've made your selectionReady to generate your password?")
//   // } 
  



// window.confirm("Ready to generate your password?")

// // will display result of var password (which is the result of generatePassword(fxn))
// passwordtext.value = password;

//   // function generatePassword(length) {
//   //   var password = " ";
//   //   
//   //   for ( var i = 0; i < password.length; i++ ) {
//   //     password += characters.charAt(Math.floor(Math.random() * charactersLength));
//   //   }
//   //   return result;
//   // }
// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// WHEN I click the button to generate a password 

// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



// add to end & return after all conditions.