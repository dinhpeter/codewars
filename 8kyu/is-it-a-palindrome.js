/*

Write a function that checks if a given string (case insensitive) is a palindrome.

*/

function isPalindrome(x) {
    let reverse = x.toLowerCase().split("").reverse().join("")
    return x.toLowerCase() == reverse
  }

  /*

  const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}

*/