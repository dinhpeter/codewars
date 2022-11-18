/*Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2*/

function sum (numbers) {
    let n = 0
    for(i=0; i<numbers.length; i++){
      n = n + numbers[i]
    };
    return n
};

/*
Single line

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }

*/