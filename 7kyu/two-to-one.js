/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
    let s3 = s1 + s2
    s3 = s3.split('').sort()
    
    for(let i=0; i<s3.length-1; i++){
      for(let j=i+1; j<s3.length; j++){
        if(s3[i] == s3[j]){
          s3.splice(j, 1)
          j--
        }
      }
    }
    return s3.join('')
  }

  /*
  const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('');
  */