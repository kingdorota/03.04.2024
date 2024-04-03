//Napisz funkcję JavaScript, która przyjmuje jako dane wejściowe tablicę liczb i zwraca nową tablicę,
//w której każda liczba jest podwojona.

function doubleNumbers(inputArray) {
  var doubledArray = [];

  for (var i = 0; i < inputArray.length; i++) {
    doubledArray.push(inputArray[i] * 2);
  }

  return doubledArray;
}

// test
var input = [1, 2, 3, 4, 5];
var output = doubleNumbers(input);
console.log(output);
