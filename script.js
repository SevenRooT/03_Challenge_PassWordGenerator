// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //button

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //where password is displayed

  passwordText.value = password;

}
// Creates password that will be printed to screen in #password
function generatePassword() {

  //Function to insure the acceptable range of character count was chosen
  let numChoice = 0;
  let pwLength = function () {
    let characterNum = prompt("Please enter a Password length (number between 8-128).");
    if (characterNum < 8 || characterNum > 128) {
      alert("Character count MUST be between 8 and 128, inclusive");
      return pwLength();

    }
    numChoice = characterNum;

  };
  pwLength();

  //Pop-up to confirm character choices
  let lowerCase = confirm("Lower case characters?");
  let upperCase = confirm("Upper case characters?");
  let numericChar = confirm("Numeric characters?");
  let specialChar = confirm("Special characters?");

  //arrays to collect data sets of each character type 
  let numSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let lowerSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let upperSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let specialSet = ['!', "\"", '#', '$', '%', '&', "\'", '()', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '/', ']', '^', '_', "'", '{', '|', '}', '~']

  //decern which arrays were chosen when all character types are chosen

  if (
    lowerCase === true &&
    upperCase === true &&
    numericChar === true &&
    specialChar === true
  ) {
    //concatenate these datasets
    allChars = numSet.concat(lowerSet, upperSet, specialSet);


    //set an empty array to receive random set
    randomChars = [];

    //loop through randomly selected data set the amount entered by user into Password Length field
    for (let i = 1; i <= numChoice; i++) {
      let randomIndex = Math.floor(Math.random() * allChars.length);
      randomChars.push(allChars.splice(randomIndex, 1)[0]);
      password = randomChars.join('');
      console.log(randomChars.join(''))
    }
    return (password);
    // next case when lowerCase not selected
  } else if (
    !lowerCase === true &&
    upperCase === true &&
    numericChar === true &&
    specialChar === true
  ) {
    //concatenate these datasets
    allChars = numSet.concat(upperSet, specialSet);
    console.log(allChars);
    //set an empty array to receive random set
    randomChars = [];

    //loop through randomly selected data set the amount entered by user into Password Length field
    for (let i = 1; i <= numChoice; i++) {
      let randomIndex = Math.floor(Math.random() * allChars.length);
      randomChars.push(allChars.splice(randomIndex, 1)[0]);
      password = randomChars.join('');
      console.log(randomChars.join(''))
    }
    return (password);
    // next case when upperCase not selected
  } else if (
    lowerCase === true &&
    !upperCase === true &&
    numericChar === true &&
    specialChar === true
  ) {
    //concatenate these datasets
    allChars = numSet.concat(lowerSet, specialSet);
    console.log(allChars);
    //set an empty array to receive random set
    randomChars = [];

    //loop through randomly selected data set the amount entered by user into Password Length field
    for (let i = 1; i <= numChoice; i++) {
      let randomIndex = Math.floor(Math.random() * allChars.length);
      randomChars.push(allChars.splice(randomIndex, 1)[0]);
      password = randomChars.join('');
      console.log(randomChars.join(''))
    }
    return (password);
    // next case when specialChar not selected
  } else if (
    lowerCase === true &&
    upperCase === true &&
    numericChar === true &&
    !specialChar === true
  ) {
    //concatenate these datasets
    allChars = numSet.concat(lowerSet, upperSet);
    console.log(allChars);
    //set an empty array to receive random set
    randomChars = [];

    //loop through randomly selected data set the amount entered by user into Password Length field
    for (let i = 1; i <= numChoice; i++) {
      let randomIndex = Math.floor(Math.random() * allChars.length);
      randomChars.push(allChars.splice(randomIndex, 1)[0]);
      password = randomChars.join('');
      console.log(randomChars.join(''))
    }
    return (password);
    // final case when numericChar not selected
  } else {
    //concatenate these datasets
    allChars = specialSet.concat(lowerSet, upperSet);
    console.log(allChars);
    //set an empty array to receive random set
    randomChars = [];

    //loop through randomly selected data set the amount entered by user into Password Length field
    for (let i = 1; i <= numChoice; i++) {
      let randomIndex = Math.floor(Math.random() * allChars.length);
      randomChars.push(allChars.splice(randomIndex, 1)[0]);
      password = randomChars.join('');
      console.log(randomChars.join(''))
    }
    return (password);
  }
}

// Initiates writePassword function
generateBtn.addEventListener("click", writePassword);


