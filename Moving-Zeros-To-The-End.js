//5 kyu Moving Zeros To The End

var moveZeros = function (arr) {
  var result = arr.filter(function (num){return num !== 0;});
  var zeros = arr.filter(function (num){return num === 0;});
  return result.concat(zeros);
}