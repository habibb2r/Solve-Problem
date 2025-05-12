const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sumEvenNumbers = (numArray) => {
  return numArray.reduce((acc, curr) => {
    return curr % 2 === 0 ? acc + curr : acc;
  }, 0);
};

console.log(sumEvenNumbers(numbers));

