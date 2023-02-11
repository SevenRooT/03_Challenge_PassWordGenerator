// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //button

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //where password is diplayed

  passwordText.value = password;

}

function generatePassword() {


  let numChoice = function () {
    let characterNum = prompt("Please enter a Password length (number between 8-128).");
    if (characterNum < 8 || characterNum > 128) {
      alert("Character count MUST be between 8 and 128, inclusive");

    }
    return;
  }
  numChoice();
  //(proves that typing number in prompt and clicking "okay", your choice is stored in characterNum)
  //return characterNum;
  let lowerCase = confirm("Lower case characters?");
  let upperCase = confirm("Upper case characters?");
  let numericChar = confirm("Numeric characters?");
  let specialChar = confirm("Special characters?");

  //a way to collect data sets of each character type (into an array)
  let numSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let lowerSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let upperSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let specialSet = ['!', 'x22', '#', '$', '%', '&', 'x27', '()', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '/', ']', '^', '_', "'", '{', '|', '}', '~']

  //concatenate these datasets
  const allSets = numSet.concat(lowerSet, upperSet, specialSet);

  //identify which of those characters were selected in <confirm>
  //characterNum needs to be retrieved to build the proper length pw


  //identify how many characters were chosen (build password one character at a time using for loop)
  //randomly select that amount of characters from the data sets (math.random)
  //use RETURN state to automatically push 'password' into view area  
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

