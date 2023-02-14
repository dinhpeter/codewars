/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
*/

function alphabetPosition(text) {
    let x = ''
    text = text.toLowerCase().split(' ').join('')
    for(let i=0; i<text.length; i++){
      if(text.charCodeAt(i)-96>0 && text.charCodeAt(i)-96<27){
        x += text.charCodeAt(i)-96 + " "
      }
    }
    return x.trim()
  }