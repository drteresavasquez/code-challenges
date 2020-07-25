
*This one adds a string variable which is like a quote.*
```
//1. create a string variable, it can contain anything
const newString = "This is a string";
```

*This one assigns a number to the variable*
```
//2. create a number variable, it an be any number
const newNum = 3;
```

*This one assigns a true or false value to newBool*
```
//3. create a boolean variable
const newBool = true;
```

*This one checks if 10-5 is equal to 5*
```
//4. solve the following math problem
const newSubtract = () => (10 - 5 === 5);
```

*This one checks if 10 X 4 is equal to 40*
```
//5. Solve the following math problem
const newMultiply = () => (10 * 4 === 40);
```

*This one gives the remainder of 21 divided by 5*
```
//6. Solve the following math problem:
const newModulo = () => (21 % 5 === 1);
```

*This one simply gives back the number that its given.*
```
// 7
function returnString(str) {
  //simply return the string provided: str
  return str;
}
```

*This one adds x and y and gives back the value.*
```
// 8
function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  // code here
  return x + y;
}
```

*This one subtracts y-x and gives back the value*
```
// 9
function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  return y - x;
}
```

*This one multiplies x and y and gives back the value*
```
// 10
function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  return x * y;
}
```

*This one divides x by y and returns the value.*
```
// 11
function divide(x, y) {
  // divide x by y and return the value
  // code here
  return x / y;
}
```

*This one lets you know if x and y and the same value.*
```
// 12
function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code here
  return (x === y);
}
```

*This one lets you know if str1 and str2 are the same length.*
```
// 13
function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  return (str1.length === str2.length)
}
```

*This one lets you know if num is less than ninety.*
```
// 14
function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here
  return (num < 90);
}
```

*This one lets you know if num is greater than 50.*
```
// 15
function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  return (num > 50);
}
```
*This one lets you know how many is left over from dividing x by y.*
```
// 16
function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  return (x % y);
}
```
*This one lets you know if num is even.*
```
// 17
function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
  return (num % 2 == 0);
}
```
*This one lets you know if num is odd.*
```
// 18
function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here
  return (num % 2 == 1)
}
```

*This one lets you know what num multiplied by num is.*
```
// 19
function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
  return num * num;
}
```

*This one lets you know what num multiplied by num then multipled by num again is.*
```
// 20
function cube(num) {
  // cube num and return the new value
  // code here
  return num * num * num;
}
```

*This one lets you choose how many times you want to
multiply num times itself. So if exponent is 3 for example, you would multiply num X num X num. If exponent was 4
```
// 21
function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here

  return Math.pow(num, exponent)
}
```

*This one lets you get the whole number that is closest to num (if num is a decimal), for instance, if num is 5.4, it will say 5.*
```
// 22
function roundNumber(num) {
  // round num and return it
  // code here
  return Math.round(num);
}
```

*This one lets you get the whole number that is above num (if num is a decimal), for instance, if num is 5.4, it will say 6.*
```
// 23
function roundUp(num) {
  // round num up and return it
  // code here
  return Math.ceil(num);
}
```

*This one will add a "!" to whatever you give it.*
```
// 24
function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  return `${str}!`;
}
```

*This one will give you back one sentence with the first word and the second word added together*
```
// 25
function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'NSS', 'Bootcamp' -> 'NSS Bootcamp'
  // code here
  return `${firstName} ${lastName}`;
}
```

*This one will add a "Hello" to the front of whatever name you give it and add an "!" at the end.*
```
// 26
function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  return `Hello ${name}!`;
}

```

*This determines the area of a rectangle from only having two sides of it.*
```
// 27
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  return length * width;
}
```

*This will give back the area of the triangle by multiplying the base times the height and dividing it by 2!*
```
// 28
function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  return (base * height) / 2;
}
```

