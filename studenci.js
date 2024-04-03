//Napisz funkcję JavaScript, która przyjmuje jako dane wejściowe tablicę obiektów reprezentujących studentów
//i zwraca nową tablicę zawierającą tylko imiona studentów.

const students = [
  { name: "Zosia", score: 83 },
  { name: "Hani", score: 59 },
  { name: "Ania", score: 37 },
  { name: "Kajtek", score: 94 },
  { name: "Hubert", score: 64 },
];

const names = students.map((student) => student.name);
console.log(names);
