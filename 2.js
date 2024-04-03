// Wykorzystaj metodę map() do zaimplementowania funkcji. Wewnątrz metody map() użyj funkcji strzałkowej,
//aby podwoić każdą liczbę.

const doubleNumbers = (inputArray) => {
  return inputArray.map((number) => number * 2);
};

const input = [1, 2, 3, 4, 5];

const output = doubleNumbers(input);

// test
console.log(output);
