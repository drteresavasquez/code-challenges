"use strict";

//In these first 6 questions, replace `null` with the answer

//1. create a string variable, it can contain anything
const newString = 'Stephen Freeny is gonna Ace this!';

//2. create a number variable, it an be any number
const newNum = 7;

//3. create a boolean variable
const newBool = true;

//4. solve the following math problem
const newSubtract = 10 - 5 === 5;
console.log(newSubtract);
//5. Solve the following math problem
const newMultiply = 10 * 4 === 40;
console.log(newMultiply);
//6. Solve the following math problem:
const newModulo = 21 % 5 === 5;
console.log(newModulo);
//In the next 22 problems you will compete the function. All of your code will go inside of the function braces.
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work.
//Do not change any of the function names

// 7
function returnString(str) {
  //simply return the string provided: str
  return str;
}

// 8
function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  // code here
  let sum = x + y;
  return sum;
}
add(1, 2);
// 9
function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  let difference = x - y;
  return difference;
}
add(1, 2);
// 10
function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  let product = x * y;
  return product;
}
multiply(1, 2);
// 11
function divide(x, y) {
  // divide x by y and return the value
  // code here
  let quotient = x / y;
  return quotient;
}
divide(4, 2);
// 12
function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code here
  if (x === y) {
    return true
  } else {
    return false
  }
}
areEqual(2, 3);
// 13
function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}
areSameLength('just three words', 'two words');

// 14
function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}
lessThanNinety(11);
// 15
function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}
greaterThanFifty(8);
// 16
function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  let remainder = x / y;
  return remainder;
}
getRemainder(4, 2)
// 17
function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
isEven(4);
// 18
function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}
isOdd(3);
// 19
function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
  let squareNum = num * num;
  return squareNum;
}
square(2);
// 20
function cube(num) {
  // cube num and return the new value
  // code here
  let cubed = num * num * num;
  return cubed;
}
cube(2);
// 21
function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  let power = Math.pow(num, exponent);
  return power;
}
raiseToPower(4, 2)
// 22
function roundNumber(num) {
  // round num and return it
  // code here
  let rounding = Math.round(num);
  return num;
}
roundNumber(2.233);
// 23
function roundUp(num) {
  // round num up and return it
  // code here
  let upwards = Math.ceil(num);
  return num;
}
roundUp(3.5);
// 24
function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  let str2 = '!'
  return `${str}${str2}`
}
addExclamationPoint('hello world');
// 25
function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'NSS', 'Bootcamp' -> 'NSS Bootcamp'
  // code here
  let fullName = `${firstName} ${lastName}`;
  return fullName;
}
combineNames('Stephen', 'Freeny');
// 26
function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  let greeting = 'Hello '
  return `${greeting}  ${name}!`
}
getGreeting('Sam');
// The next three questions will have you implement math area formulas.
// If you can't remember these area formulas then head over to Google.

// 27
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  let area = length * width;
  return area;
}
getRectangleArea(2, 4);
// 28
function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  let triArea = (base * height) / 2;
  return triArea;
}
getTriangleArea(4, 2);