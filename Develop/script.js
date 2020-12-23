// Assignment code here

var generatePassword = function() {
  // Variables
  var letters = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "0123456789"
  var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}"
  var criteria = []
  var password = ""

  //confirm that user wishes to include/not include character type.
  var confirmation = function(words, returnTrue, returnFalse, x) {
    confirm("Are you sure you want to " + x + "include " + words + "?")
    if (confirm) {
      returnTrue;
      return
    } else {
      returnFalse;
      return
    }
  }

  // ask for length
  var getLength = function() {
    passwordLength = prompt("Please enter a number from 8 - 128 for the length of your generated password.");
    if (!passwordLength) {
      alert("Please enter a valid option.")
      getLength();
    } else if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) { 
      passwordLength = parseInt(passwordLength);
      alert("Your password length is " + passwordLength);
    } else {
      alert("Please enter a valid option.");
      getLength();
    }
  }
  
  // ask if they want lowercase
  var getLower = function() {
    lowerCase = confirm("Do you want to include lowercase letters in your password?");
    if (lowerCase) {
      confirmation("lowercase letters", criteria.push(letters), getLower, "")
    } else {
      confirmation("lowercase letters", true, getLower, "not ")
    }
  }

  // ask if they want uppercase
  var getUpper = function() {
    upperCase = confirm("Do you want to include uppercase letters in your password?");
    if (upperCase) {
      confirmation("uppercase letters", criteria.push(letters.toUpperCase()), getUpper, "")
    } else {
      confirmation("uppercase letters", true, getUpper, "not ")
    }
  }

  // ask if they want numeric
  var getNumeric = function() {
    numeric = confirm("Do you want to include numbers in your password?");
    if (numeric) {
      confirmation("numbers", criteria.push(numbers), getNumeric, "")
    } else {
      confirmation("numbers", true, getNumeric, "not ")
    }
  }

  // ask if they want special characters
  var getSpecial = function() {
    specialCase = confirm("Do you want to include special characters in your password?");
    if (specialCase) {
      confirmation("special characters", criteria.push(special), getSpecial, "")
    } else {
      confirmation("special characters", true, getSpecial, "not ")
    }
  }

  // run functions
  var getCriteria = function() {
    criteria = []
    getLength();
    getLower();
    getUpper();
    getNumeric();
    getSpecial();
    if (!criteria || !criteria.length) {
      alert("You need to choose at least one character type.")
      getCriteria();
    }
  }

  getCriteria();
  for (i = 0; i < criteria.length; i++){
    password = password + criteria[i][Math.floor(Math.random() * criteria[i].length)]
  }
  for (i = 0; i < passwordLength - criteria.length; i++) {
    var randomType = criteria[Math.floor(Math.random() * criteria.length)]
    password = password + randomType[Math.floor(Math.random() * randomType.length)]
  }

  // return password
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
