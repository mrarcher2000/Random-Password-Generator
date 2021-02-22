// Assignment code here
var char = [];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = ['!', '#', '$', '%', '&', '(', ')','*','+','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','`','{','|','}','~'];

var password = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  passwordCriteria();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters) {
  password = "";

  if (includeLowercase == true) {
    char = char.concat(lowerCase);
  };

  if (includeUppercase == true) {
    char = char.concat(upperCase);
  };

  if (includeNumbers == true) {
    char = char.concat(numbers);
  };

  if (includeSpecialCharacters == true) {
    char = char.concat(specialCharacters);
  };

  for (var i=0; i < passwordLength; i++) {
    password = password + char[Math.floor(Math.random() * (char.length))];
  };
  
  console.log(password);
  console.log(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters);
  console.log(char);
  return password;
}

var passwordCriteria = function() {
  var passwordLength = prompt("How long does your password need to be?\n Enter a number between 8 and 128.");
  passwordLength = parseInt(passwordLength);

  if (passwordLength <= 128 && passwordLength >= 8 ) {
    var includeLowercase = confirm("Include lowercase letters?\nClick 'Ok' for Yes.\nClick 'Cancel' for No.");
    var includeUppercase = confirm("Include uppercase letters?\nClick 'Ok' for Yes.\nClick 'Cancel' for No.");
    var includeNumbers = confirm("Include numbers?\nClick 'Ok' for Yes.\nClick 'Cancel' for No.");
    var includeSpecialCharacters = confirm("Include special characters?\nClick 'Ok' for Yes.\nClick 'Cancel' for No.");

    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
      alert("Well you have to choose something! Try again.");
      passwordCriteria();
    } else {
      generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters);
    }
  }
  else {
    alert("Invalid choice. Please try again.")
    passwordCriteria();
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
