/*

You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

*/

function twoSort(s) {
    let x = s.sort()[0].split('')
    for(let i=0; i<x.length-1; i++){
     x[i] += '***' 
    }
    return x.join('')
  }

/*

  function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

*/