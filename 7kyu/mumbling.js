/*

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

function accum(s) {
    s = s.split("")
      for(let i=0; i<s.length; i++){
      s[i] = s[i].toUpperCase()
      let lower = s[i].toLowerCase()
      for(let j=0; j<i; j++){
        s[i] += lower
      }
      s[i] += '-'
    }
    return s.join("").slice(0, -1)
  }


/*
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
*/