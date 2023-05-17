/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
    let ascending = array.slice().sort(function(a ,b){return a-b}) 
    let descending = array.slice().sort(function(a ,b){return b-a}) 
    
    if(array.toString() == ascending.toString()){
      return 'yes, ascending'
    }else if(array.toString() == descending.toString()){
      return 'yes, descending'
    }else{
      return 'no'
    }
  }

/*
function isSortedAndHow(arr) {
  return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
         arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}
*/