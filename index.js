// 7 kyu
// Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// const arrWords = ("Testing for fixed tests")

// function findShort(str) {
//     const words = str.split(" ")
//     const lengthWord = words.map(words => words.length)
//     const numMini = Math.min(...lengthWord);
// };


// console.time(
//     findShort(arrWords)
// )

// ---------------------------------------------------------------

// 8 kyu
// Is it even ?
// In this Kata we are passing a number(n) into a function.
// Your code will determine if the number passed is even(or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.
// https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript

// let num = 3;

// function testEven(n) {
//     if (n % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// };
// console.log(testEven(num));

// ---------------------------------------------------------------

// 8 kyu
// Abbreviate a Two Word Name
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/javascript

// const name = 'Nick Anderson'

// function abbrevName(str) {
//     return str.split(" ").map((item) => {
//         return item[0]
//     }).reduce((i, l) => {
//         let d = "."
//         return i + d + l
//     }).toUpperCase()
// };
// abbrevName(name)
// let text = abbrevName(name)
// console.log(text);

// ---------------------------------------------------------------

// 8 kyu
// Grasshopper - Debug sayHello
// Debugging sayHello function
//     The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard.It is your job to fix the code and get the program working again!
// Example output:
// Hello, Mr.Spock
// https://www.codewars.com/kata/5625618b1fe21ab49f00001f/train/javascript

// function sayHello(str) {
//     return "Hello, " + str
// }
// console.log(sayHello("nick"))

// ---------------------------------------------------------------

// 8 kyu
// How good are you really?
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return true if you're better, else false!
// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

const arr = [100, 40, 34, 57, 29, 72, 57, 88];
const point = 8;

function betterThanAverage(classPoints, yourPoints) {

    classPoints.map(item => {

    })
} 
