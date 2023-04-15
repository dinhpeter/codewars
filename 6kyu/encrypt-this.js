/*
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

var encryptThis = function(text) {
    let test = text
    test = test.split(' ')
    let str = []
    
    for(let i=0; i<test.length; i++){
        str[i] = test[i].charCodeAt(0).toString()
        if(test[i].length > 2){
        str[i] += test[i][test[i].length-1]
        str[i] += test[i].slice(2, test[i].length-1)
        str[i] += test[i][1]
        }else if(test[i].length == 2){
          str[i] += test[i][1]
        }
      
    }
    return str.join(' ')
  }