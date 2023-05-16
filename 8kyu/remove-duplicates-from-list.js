/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

function distinct(a) {
    for(let i=0; i<a.length-1; i++){
      for(let j=i+1; j<a.length; j++){
        if(a[i] == a[j]){
          a.splice(j, 1)
          j--
        }
      } 
    }
    return a
}