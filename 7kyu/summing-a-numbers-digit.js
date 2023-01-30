/*

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.

*/

function sumDigits(number) {
    number = Math.abs(number)
    number = number.toString().split("")
    number = number.map(str => {
      return parseInt(str, 10)
    })
    
    return number.reduce((a, c) => a + c)
  }
  
/*
  function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
  }
*/