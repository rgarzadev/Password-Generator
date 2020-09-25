// Create HTML button variable

var generateBtn = document.querySelector("#generate");

// Add event listener to HTML button

generateBtn.addEventListener("click", writePassword);

// Create character string variables

var char = "~!@#$%&-+=_";
var number = "0123456789";
var upperLet = "QWERTYUIOPASDFGHJKLZXCVBNM"
var lowerLet = "qwertyuiopasdfghjklzxcvbnm"

// User inputs boolean values

function generatePassword() {
  var confirmChar = confirm("Do you want special characters in your password?");
  var confirmNum = confirm("Do you want numbers in your password?");
  var confirmUpperLet = confirm("Do you want upper case letters in your password?");
  var confirmLowerLet = confirm("Do you want lower case letters in your password?");

  while(confirmChar === false && confirmNum === false && confirmUpperLet === false && confirmLowerLet === false){
    alert("You must choose at least one");
      confirmChar = confirm("Do you want special characters in your password?");
      confirmNum = confirm("Do you want numbers in your password?");
      confirmUpperLet = confirm("Do you want upper case letters in your password?");
      confirmLowerLet = confirm("Do you want lower case letters in your password?");
  }

  //Password length prompt

  confirmLength = parseInt(prompt("How many characters would you like? Between 8 and 128"));
  
    //Password range alert

    while(confirmLength < 8 || confirmLength > 128){
      alert("Password must be between 8-128 characters");
      confirmLength = parseInt(prompt("How many characters would you like? Between 8 and 128"));
    }

  //Create super string by combining user confirmed variables  

  var passwordVar = ""

  if (confirmChar) {
    passwordVar += char
  }

  if (confirmNum) {
    passwordVar += number
  }

  if (confirmUpperLet) {
    passwordVar += upperLet
  }

  if (confirmLowerLet) {
    passwordVar += lowerLet
  }

  var password = ""

    // Run super string through for loop
    
    for (var i = 0; i < confirmLength; i++) {
      password = password + passwordVar[Math.floor(Math.random() * passwordVar.length)];
    }
    return password;
}

// Write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  