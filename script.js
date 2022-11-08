// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
//   var password = generatePassword();
  function generatePassword(length) {
    var password           = " ";
    // var characters       = "ABCDEFGHIJKLM?NOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890123456789!#$%&*+-=?@_~";
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var num = "01234567890123456789";
    var special = "!#$%&*+-=?@_~";
    var characters = (alpha.concat(num + special));

    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result (password);
  }


    var passwordtext = document.querySelector("#password");

    passwordText.value = password;
  
  }



// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



  
//     // console.log(characters),
//     // console.log(characters.alpha.length);
//     // console.log(characters.num.length);
//     // console.log(characters.special.length);
  

  
//   console.log(makeid(8));

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