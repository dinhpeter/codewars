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
/*
const isPalindrome = word => word === word.split('').reverse().join('')

//function word is palindrome

//word -> str, no empty, no !, no nums, no funny biz, no caps, 1 word
//return true || false

// racecar -> true
// bob -> true
// tacos -> false

function isPalindrome(word){
  //word -> reverse that word - split reverse join

  //revWord === word ? true : false

  return word.split('').reverse().join('') === word ? true : false
}

console.log(isPalindrome('racecar'), 'true')
console.log(isPalindrome('bob'), 'true')
console.log(isPalindrome('tacos'), 'false')
*/