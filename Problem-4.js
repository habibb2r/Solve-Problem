const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Ford", model: "Focus", year: 2020 }
];

const sortCarsByYear = (carArray) => {
  return carArray.sort((a, b) => a.year - b.year);
};

console.log(sortCarsByYear(cars));
