// Assignment code here

// When button is pressed, ask users a series of prompts

// Two prompts, one for length of password and one for character types
//Prompt #1: Please enter a number from 8 - 128 for the length of your generated password.
//Prompt #2: Please choose which character types to include for your generated password. Enter '1' for lowercase, 
// '2' for uppercase, '3' for numeric, and '4' for special characters. 

var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";


var writePassword = function() {
  window.alert("Welcome to Password Generator! Please answer the following prompts for password criteria.");

  var length = window.prompt("Please enter a number from 8 - 128 for the length of your generated password.")

  window.alert("Please choose which character types to include for your generated password. Enter '1' for lowercase,'2' for uppercase, '3' for numeric, and '4' for special characters.")

  
  

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
