/*

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s){
    let x = s.split(" ")
    let low = x[0].length
      
  
    for(let i=0; i<x.length; i++){
      if(x[i].length < low){
        low = x[i].length
      }    
    }
  
    return low
  }


  /*

  function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

*/