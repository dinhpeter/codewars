/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
    num = num.toString()
    let ans = ''
    let zero = '0'
    for(let i=0; i<num.length; i++){
      if(num[i] > 0){
        ans += num[i] + zero.repeat(num.length-1-i) + ' + '
      }
    }
    return ans.slice(0, ans.length-3)
}