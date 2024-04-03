//Wykorzystaj metodę map() do zaimplementowania funkcji. Wewnątrz metody map() użyj funkcji strzałkowej,
//aby uzyskać dostęp do właściwości name każdego obiektu studenta.

function getStudentNames(studentsArray) {
  return studentsArray.map((student) => student.name);
}

const student = [
  { id: 1, name: "Kasia", age: 20 },
  { id: 2, name: "Asia", age: 22 },
  { id: 3, name: "Zosia", age: 21 },
];
const studentNames = getStudentNames(students);

console.log(studentNames);
