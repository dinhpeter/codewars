/*
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

const orderedCount = function (text) {
    let ans = []
    
    for(let i=0; i<text.length; i++){
      let count = 0;
      
      for(let j=0; j<ans.length; j++){
        if(ans[j][0] === text[i]){
          count++;
        }
      }
      
      if (count === 0){
        for (let j=i; j<text.length; j++){
          if(text[j] === text[i]){
            count++;
          }
        }
        ans.push([text[i], count]);
      }
    }
    return ans
  }

  /*
  const orderedCount = s =>
  Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));
  */