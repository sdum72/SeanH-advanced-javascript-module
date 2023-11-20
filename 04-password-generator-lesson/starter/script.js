// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passwordLength = "";

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = parseInt(prompt('Enter required length of password minimum 8 maximum 128 characters'));
  
  if(passwordLength >= 8 && passwordLength <=128 && typeof passwordLength === 'number'){
    console.log("Allowed")
    alert("Your password will be " + passwordLength + " characters long")
  } else {
    console.log("not allowed")
    alert("check that entry is an interger between 8 and 128")
  }
  return passwordLength  
}

getPasswordOptions()
console.log(passwordLength)

// ******************************************************************************************************************************
// Function for getting a random element from an array
let combinedArrays = (lowerCasedCharacters + upperCasedCharacters + numericCharacters + specialCharacters);
let array = combinedArrays.replaceAll(",", "");
// console.log(array);
// console.log(passwordLength)
// console.log(array.length)
// let charactersLength = array.length;
// console.log(charactersLength)

function getRandomItems () {
  // console.log(passwordLength)
  let result = " ";
  let charactersLength = array.length;
  //   return passwordLength [Math.floor(Math.random() * cha)];
  for (let i = 0; i < passwordLength; i++) {
    result += array.charAt(Math.floor(Math.random() * charactersLength));
       
  }
  
  return result;
  }
  
  console.log(getRandomItems())



// getRandomItems(passwordLength)
console.log(getRandomItems (passwordLength))
// console.log(getRandomItems(passwordLength * passwordLength));


function getRandomItem(passwordLength) {
 
  return passwordLength [Math.floor(Math.random() * passwordLength.length)];
  // return Math.floor(MAth.random() * passwordLength.length)
}
console.log(getRandom(passwordLength * passwordLength));
getRandom(passwordLength)

let randomUpperCase = getRandom(upperCasedCharacters);
let randomNumber = getRandom(numericCharacters);
let randomLowerCase = getRandom(lowerCasedCharacters);
let randomSpecialCharacter = getRandom(passwordLength);

console.log({randomLowerCase})
console.log({randomSpecialCharacter})
console.log({randomUpperCase})
console.log({randomNumber})

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
