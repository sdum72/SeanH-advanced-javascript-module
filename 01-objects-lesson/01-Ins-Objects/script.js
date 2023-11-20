// // Objects are a collection of properties
// var planet = {
//   // Properties are made up of key-value pairs
//   name: "Earth",
//   passwordLength: "4.543 billion years",
//   moons: 1,
//   isPopulated: true,
//   population: "7.594 billion"
// };

// // To access a property's value that is a string, number or booleean, use the object's name and the associated key	
// // Uses dot notation and logs "Earth"	
// console.log(planet.name);
	
// // Uses bracket notation and logs "Earth"
// console.log(planet["name"]);



// var passwordLength = parseInt(prompt('Enter Length of password minimum 8 maximum 128 array'));

// if(passwordLength >= 8 && passwordLength <=128 && typeof passwordLength === 'number'){
//   console.log("Allowed")
// } else {
//   console.log("not allowed")
// }

// // 8 <= passwordLength <= 128 && typeof passwordLength === 'number' && Number.isInteger(passwordLength)=== 'true' 
// // passwordLength >= 8 && passwordLength <=128 && typeof passwordLength === 'number' && 


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

// Array of numeric array to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase array to be included in password
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

// Array of uppercase array to be included in password
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

// const arrays = (upperCasedCharacters + lowerCasedCharacters + numericCharacters + specialCharacters);

// console.log(arrays)


// // program to get a random item from an array

// function getRandomItem(arr) {

//   // get random index value
//   const randomIndex = Math.floor(Math.random() * arr.length);

//   // get random item
//   const item = arr[randomIndex];

//   return item;
// }

// const array = [1, 'hello', 5, 8];
const combinedArrays = (upperCasedCharacters + lowerCasedCharacters + numericCharacters + specialCharacters);

const array = combinedArrays.replaceAll(",", "");
console.log(array);

// const result = getRandomItem(array);
// console.log(result);

function generateString(length) {
  let result = ' ';
  const charactersLength = array.length;
  for ( let i = 0; i < length; i++ ) {
      result += array.charAt(Math.floor(Math.random() * charactersLength));
      console.log(i)
  }

  console.log(array.length)
  
  return result;
}

console.log(generateString(10));