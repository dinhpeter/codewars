/*

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

function high(x){
    let highest = 0
    let score = 0
    let word 
    
    x = x.split(" ")
    
    for(let i=0; i<x.length; i++){   
      score = 0
      for(let j=0; j<x[i].length; j++){
          score = score + x[i].charCodeAt(j) - 96
  
              if(highest < score){
                  highest = score
                  word = x[i]
              }
      }   
    }
    return word
  }
  

/*

function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];

*/