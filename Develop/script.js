
// Assignment code 
// variables
var generateBtn = document.querySelector("#generate")
var numCharacters;
var lowerCase;
var upperCase;
var numberChar;
var specialChar;
var availableCharacters;

//arrays
numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];
lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
specialArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];

// start of function to generate the password
//begins with prompt for the number of characters

function generatePassword() {
  numCharacters = (prompt("How many characters in your password? (min 8, max 128)"));

  //if statment to ensure the number of characters is within the range 
  if (numCharacters <= 7 || numCharacters >= 129) {
      alert("Select a number between 8 and 128");
      numCharacters = (prompt("How many characters in your password? (min 8, max 128)"));
      }
  
    // Using confirm method to ask which character types will be included in password
    specialChar = confirm("Will your password include special characters?");
    numberChar = confirm("Will your password include numeric characters?");    
    lowerCase = confirm("Will your password include lowercase characters?");
    upperCase = confirm("Will your password include uppercase characters?");
     
    //while all values are false confirm prompts repeat
      while (upperCase === false && lowerCase === false && numberChar === false && specialChar === false) {
        alert("Your password needs a type of character. Click OK for at least one option");
        specialChar = confirm("Will your password include special characters?");
        numberChar = confirm("Will your password include numeric characters?");    
        lowerCase = confirm("Will your password include lowercase characters?");
        upperCase = confirm("Will your password include uppercase characters?");
      } 
      //variable to hold array of available characters, if character type is true initial arrays are merged into 'availableCharacters' using concat method
    availableCharacters = []
      
    if (specialChar) {
      availableCharacters = availableCharacters.concat(specialArray)
    }
    if (numberChar) {
      availableCharacters = availableCharacters.concat(numArray)
    } 
    if (lowerCase) {
      availableCharacters = availableCharacters.concat(lowerArray)
    }
    if (upperCase) {
      availableCharacters = availableCharacters.concat(upperArray)
    }
    
      // Empty string to be filled based on for loop selecting random characters from the array
      var generatedPassword = ""
      
      for (var i = 0; i < numCharacters; i++) {
        generatedPassword = generatedPassword + availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
        console.log(generatedPassword)
      }
      return generatedPassword; 
}

// Write password to the #password input

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  passwordText.value = password
}

generateBtn.addEventListener("click", writePassword);

