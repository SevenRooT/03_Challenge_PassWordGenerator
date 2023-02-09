// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //button

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //where password is diplayed

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// create varible as an empty container to hold generated password (done)
// create function to generate password through collecting data from a series of prompts
  // promt: pw length (8-128 characters; inclusive)
  // prompt: character types (lowercase, uppercase, numeric, and/or special characters)
    // each input is validated
      // at least one character type must be chosen
      // none chosen? error message and start-over/exit popup

