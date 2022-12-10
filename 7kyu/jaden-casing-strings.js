/*

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

*/

String.prototype.toJadenCase = function () {
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(" ")
    
  };
  
  
/*

We first split the words in the given string after each " " space is detected (in the split(" ") )
And then we apply the map method which calls the function word . (map applies what happens in the function to each and every item in the array which has been split from the given string.

In the function word = Each item of the array is taken and the first letter which is index value 0 ( charAt(0) ) is converted to Upper Case and is concatenated with the rest of the letters of the word (excluding the first letter (word.slice(1))

Then using the Join method all the words are joined to make a sentence

Thus it returns the sentence with the First letter of each word Capitalized

*/