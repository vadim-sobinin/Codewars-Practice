//4 kyu Remove Zeros

function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
  
  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc
  
  // the correctly sorted array should be returned.
  
  if (array.length < 2) return array;
  let index = 0;
  
  while (index <= array.length - 2) {
    let isNumZero = String(array[index]) === '0',
      isNextNonzero = String(array[index + 1]) !== '0';
      
    if (isNumZero && isNextNonzero) {
      [ array[index + 1], array[index] ] = [ array[index], array[index + 1] ];      
      index = 0;
    }
    else {
      index++;
    }
  }
  
  return array;
}