// Assignment code here
var lengthOfpassword = Math.floor(Math.random()*120) + 8;
var lowerCase = true;
var uperCase = true;
var numerIc = true;
var specialCharacters = true;

var random = {  
  "number": "1234567890",
  "low": "qwertyuiopasdfghjklzxcvbnm",
  "up": "QWERTYUIOPASDFGHJKLZXCVBNM",
  "special": "~!@#$%^&*()_+`{}:\"<>?|\\[];',./-=",

}

function selectRandom(stringSelect){ //selects ramdom character within a string 
 var characterSelect = Math.floor(Math.random() * stringSelect.length);

 return stringSelect[characterSelect]
}

function generatePassword (){
  var possibleCharacters = '';

// If true
if (lengthOfpassword && lowerCase) {
  possibleCharacters += random.low
} 

if (lengthOfpassword && uperCase){
  possibleCharacters += random.up
}

if(lengthOfpassword && numerIc){
  possibleCharacters += random.number
}

if (lengthOfpassword && specialCharacters){
  possibleCharacters += random.special
}
  console.log(lengthOfpassword);

 var currentPassword = '';
 while(currentPassword.length < lengthOfpassword){ //loop
  currentPassword += selectRandom(possibleCharacters)
}
  return currentPassword
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
