// Assignment code here
var rangeOfpassword = Math.floor(Math.random()*120) + 8;
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
  rangeOfpassword = passLength();

// If true
if (rangeOfpassword && confirm("Would you like lowercase letters?")) { //popup
  possibleCharacters += random.low
} 

if (rangeOfpassword && confirm("Would you like uppercase letters?")){ //popup
  possibleCharacters += random.up
}

if(rangeOfpassword && confirm("Would you like numbers?")){//popup
  possibleCharacters += random.number
}

if (rangeOfpassword && confirm("Would you like special characters?")){ //popup
  possibleCharacters += random.special
}
  console.log(rangeOfpassword);

 var currentPassword = '';
 while(currentPassword.length < rangeOfpassword){ //loop
  currentPassword += selectRandom(possibleCharacters)
}
  return currentPassword
}

function passLength (){ //helper function
  let User = prompt("From 8 - 128, how many characters would you like?", "");
  let range = parseInt(User);
  
  if (range >= 8 && range <= 128){
    return range
  } else {
     alert ("Error invalid character amount")
    return null
  }
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
