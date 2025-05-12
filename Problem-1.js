const people = [
  { name: "Habiba", age: 25, gender: "female" },
  { name: "habib", age: 30, gender: "male" },
  { name: "Israt", age: 22, gender: "female" },
  { name: "Sajib", age: 28, gender: "male" }
];

const getMaleNames = (peopleArray) => {
  return peopleArray
    .filter(person => person.gender !== "female")
    .map(person => person.name);
};

console.log(getMaleNames(people));

