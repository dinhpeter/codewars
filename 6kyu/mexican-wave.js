/*
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

function wave(str){
    let arr = []
    let letter 
    let temp
    let count = 0
    for(let i=0; i<str.length; i++){
      if(str[i] == ' '){
        count++
      }else{
        temp = str.split('')
        letter = str[count].toUpperCase()
        temp.splice(count, 1, letter)
        arr[count] = temp.join('')
        count++
        }
    }
    for(let i=0; i<arr.length; i++){
      if(arr[i] == undefined){
        arr.splice(i, 1)
        i--
      }
    }
    return arr
  }

  /*
  function wave(str){
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split('');
    if(copy[i] !== ' ') {
    copy[i] = copy[i].toUpperCase()
    newArr.push(copy.join(''))
    }
  }
  return newArr
}
*/