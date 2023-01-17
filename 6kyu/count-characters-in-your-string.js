/*

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

function count (string) {  
    const x = {}
    
    string.split('').forEach(char => {
      x[char] = x[char] ? (x[char] + 1) : 1;
    })
     return x;
  }


  //split, loop all characters, assign x[char], if it has +1, if not assign 1.