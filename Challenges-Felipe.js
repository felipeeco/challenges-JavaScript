/* ----- Is a string a palindrome? -----
    Write a function that accepts a String as its only parameter, and returns true if the string
    reads the same when reversed, ignoring case.
    
    Sample input and output

    The string “rotator” should return true.
    The string “Rats live on no evil star” should return true.
    The string “Never odd or even” should return false; even though the letters are the
        same in reverse the spaces are in different places.
    The string “Hello, world” should return false because it reads “dlrow ,olleH” backwards.*/

    function challenge1(text) {
        text = text.toLowerCase().trim()
        /*let reversedText = text.split('').reverse().join()
        reversedText = [...text].reverse().join()*/
        const reversedText = [...text].reduceRight((result, character) => `${result}${character}`)
        return text == reversedText
    }

/** ----- Count the characters -----

Write a function that accepts a string, and returns how many times a specific character appears,
taking case into account.

Tip: If you can solve this without using a for-in loop, you can consider it a Tricky challenge.
Sample input and output

• The letter “a” appears twice in “The rain in Spain”.
• The letter “i” appears four times in “Mississippi”.
• The letter “i” appears three times in “Hacking with Swift”.
 */

function countCharacter(word, character) {
  return [...word].filter(char => char === character).length;
}

// Test cases
console.log(countCharacter("The rain in Spain", "a")); // Output: 2
console.log(countCharacter("Mississippi", "i"));      // Output: 4
console.log(countCharacter("Hacking with Swift", "i")); // Output: 3


/* ----- Reverse the words in a string -----

Write a function that returns a string with each of its words reversed but in the original order,
without using a loop.

Sample input and output
The string “Swift Coding Challenges” should return “tfiwS gnidoC segnellahC”.
The string “The quick brown fox” should return “ehT kciuq nworb xof”. */


function reverseWordsInString(str) {
  return str
    .split(' ')
    .map(word => [...word].reverse().join(''))
    .join(' ');
}

// Test cases
console.log(reverseWordsInString("Swift Coding Challenges")); // Output: "tfiwS gnidoC segnellahC"
console.log(reverseWordsInString("The quick brown fox"));     // Output: "ehT kciuq nworb xof"


/* ----- Do two strings contain the same characters? ---

Write a function that accepts two String parameters, and returns true if they contain the same characters in any order taking into account letter case.

Sample input and output

The strings “abca” and “abca” should return true.
The strings “abc” and “cba” should return true.
The strings “ a1 b2 ” and “b1 a2” should return true.
The strings “abc” and “abca” should return false.
The strings “abc” and “Abc” should return false.
The strings “abc” and “cbAa” should return false.*/


function reverseWordsInString(str1, str2) {
  const cleanStr1 = str1.replace(/\s/g, '');
  const cleanStr2 = str2.replace(/\s/g, '');

  return [...cleanStr1].sort().join('') === [...cleanStr2].sort().join('');
}

// Casos de prueba
console.log(reverseWordsInString("abca", "abca"));           // Output: true
console.log(reverseWordsInString("abc", "cba"));            // Output: true
console.log(reverseWordsInString(" a1 b2 ", "b1 a2"));      // Output: true
console.log(reverseWordsInString("abc", "abca"));          // Output: false
console.log(reverseWordsInString("abc", "Abc"));           // Output: false
console.log(reverseWordsInString("abc", "cbAa"));          // Output: false


/* ------ Count the numbers ------

Write an extension for collections of integers that returns the number of times a specific digit
appears in any of its numbers.

Sample input and output
• The code [5, 15, 55, 515].challenge5(count: "5") should return 6.
• The code [5, 15, 55, 515].challenge5(count: "1") should return 2.
• The code [55555].challenge5(count: "5") should return 5.
• The code [55555].challenge5(count: "1") should return 0.
*/
// Extend the Array prototype with a function to count occurrences of a digit
Array.prototype.countOccurrencesOfDigit = function (digitToCount) {

    const digitToCountStr = digitToCount.toString();
    return this.reduce((accumulator, number) => {
      const matchingDigits = [...number.toString()].filter(digit => digit === digitToCountStr);
  
      return accumulator + matchingDigits.length;
    }, 0);
  };
  
  // Test cases
  console.log([5, 15, 55, 515].countOccurrencesOfDigit("5")); // Output: 6
  console.log([5, 15, 55, 515].countOccurrencesOfDigit("1")); // Output: 2
  console.log([55555].countOccurrencesOfDigit("5")); // Output: 5
  console.log([55555].countOccurrencesOfDigit("1")); // Output: 0



/*
Are the letters unique?
Write a function that accepts a String as its only parameter, and returns true if the string has
only unique letters, taking letter case into account.

Sample input and output

The string “No duplicates” should return true.
The string “abcdefghijklmnopqrstuvwxyz” should return true.
The string “AaBbCc” should return true because the challenge is case-sensitive.
The string “Hello, world” should return false because of the double Ls and double Os.
*/

function hasUniqueLetters(str) {
    const chars = [...str.toString()];
    return chars.every((char, index) => chars.indexOf(char) === index);
  }
  
  // Test cases
  console.log(hasUniqueLetters("No duplicates")); // Output: true
  console.log(hasUniqueLetters("abcdefghijklmnopqrstuvwxyz")); // Output: true
  console.log(hasUniqueLetters("AaBbCc")); // Output: true
  console.log(hasUniqueLetters("Hello, world")); // Output: false
 

///////////////////////////////////////////////////////////////
///////////////////////////another way to create arrays
const productos = [...new Array(10)].map((_, index) => ({
    id: index,
    nombre: `Producto-${index}`
}));

const products = [...new Array(10)];

console.log(products)
console.log(productos)






///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

/**
Dada una matriz que contiene elementos de varios
tipos de datos, divide los datos en submatrices
según los tipos. Por ejemplo, si la matriz contiene
números, cadenas y objetos, debes devolver una
matriz que contenga tres submatrices: una con
todos los números, una con todas las cadenas y una
con todos los objetos.

Por último, convierte la matriz resultante en una
cadena JSON mediante JSON.stringify(). Algunos
tipos de datos, como Biglnt, no son compatibles con
JSON.stringify(). Si detectas un error al intentar
convertir la matriz final en una cadena con
JSONstringify(), devuelve una cadena vacía. La
función también debe devolver una cadena vacía si
la matriz de entrada inicial está vacía.
**/


export function sortTypes( arr ) {
    //write code
}

//input parameters: ([1, 'Hello'])
//result expected: [[1],['Hello']]



//solución
function sortTypes(arr) {
  if (arr.length === 0) {
    return '';
  }

  const nums = arr.filter((el) => typeof el === 'number');
  const strings = arr.filter((el) => typeof el === 'string');
  const objects = arr.filter((el) => typeof el === 'object');

  const result = [nums, strings, objects];

  try {
    return JSON.stringify(result);
  } catch (e) {
    return '';
  }
}
