//7 kyu Odd or Even?

function oddOrEven(array) {
  if(array.length == 0){
    return 'even'
  }
  var sum = array.reduce(add, 0)
  function add(x, y){
    return x + y
  }
  
  if(sum % 2 == 0){return 'even'}
  else{return 'odd'}
}