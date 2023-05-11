/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function(size) {
    let start = []
    let count = 1
    let arr = []
    for(let i=0; i<size; i++){
      start.push(count)
      count++
    }
    for(let j=0; j<size; j++){
       arr[j] = start.map(x => x * (j+1))
    }
    return arr
  }
  
  /*
  multiplicationTable = function(size) {
  var result = [];

  for (var i = 0; i < size; i++) {
    result[i] = [];
    for(var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }
  
  return result
}
*/