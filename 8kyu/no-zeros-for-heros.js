/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

function noBoringZeros(n) {
  n = n.toString().split('')
  
  if(n != 0){
    while(n[n.length-1] == 0){
      n.pop()
    }
  }
  n = Number(n.join(''))
  return n
}

/*
function noBoringZeros(n) {
  while(n%10==0 && n!=0){n/=10;}
  return n;
}
*/
