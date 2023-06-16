/*
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/

reverse = function(array) {
    let ans = []
    for(let i=array.length-1; i>=0; i--){
      ans.push(array[i])
    }
    return ans
  }