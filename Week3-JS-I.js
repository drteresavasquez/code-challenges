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

//5. Solve the following math problem
const newMultiply = 10 * 4 === 40;

//6. Solve the following math problem:
const newModulo = 21 % 5 === 1;

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

// 9
function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  let difference = x - y;
  return difference;
}

// 10
function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  let product = x * y;
  return product;
}

// 11
function divide(x, y) {
  // divide x by y and return the value
  // code here
  let quotient = x / y;
  return quotient;
}

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

// 16
function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  let remainder = x / y;
  return remainder;
}

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

// 19
function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
  let squareNum = num * num;
  return squareNum;
}

// 20
function cube(num) {
  // cube num and return the new value
  // code here
  let cubed = num * num * num;
  return cubed;
}

// 21
function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  let power = Math.pow(num, exponent);
  return power;
}

// 22
function roundNumber(num) {
  // round num and return it
  // code here
   return Math.round(num);
}

// 23
function roundUp(num) {
  // round num up and return it
  // code here
  return Math.ceil(num);  
}

// 24
function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  let str2 = '!'
  return `${str}${str2}`
}

// 25
function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'NSS', 'Bootcamp' -> 'NSS Bootcamp'
  // code here
  let fullName = `${firstName} ${lastName}`;
  return fullName;
}

// 26
function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  let greeting = 'Hello'
  return `${greeting}  ${name}!`
}

// The next three questions will have you implement math area formulas.
// If you can't remember these area formulas then head over to Google.

// 27
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  let area = length * width;
  return area;
}

// 28
function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  let triArea = (base * height) / 2;
  return triArea;
}
