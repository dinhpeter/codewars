/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

function divCon(x){
    let num = []
    let str = []
    
    for(let i=0; i<x.length; i++){
      if(typeof x[i] == 'string'){
        str.push(x[i])
      }else{
        num.push(x[i])
      }
    }
    
    str = str.map(x => x * 1)
    
    return num.reduce((a,c) => a + c, 0) - str.reduce((a,c) => a + c, 0)
    
  }

  /*
  function divCon(x){
  return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}
*/