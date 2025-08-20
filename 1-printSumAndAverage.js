const printSumAndAverage = (a, b, c, d) => {
  const sum = a + b + c + d;
  const average = sum / 4;
  console.log(`The sum of ${a} + ${b} + ${c} + ${d} is ${sum} and the average is ${average}`);
}

printSumAndAverage(4, 3, 2, 1)
// Output: The sum of 4 + 3 + 2 + 1 is 10 and the average is 2.5

printSumAndAverage(5, 6, 7, 8);
// Output: The sum of 5 + 6 + 7 + 8 is 26 and the average is 6.5

printSumAndAverage(-2, -1, 1, 2);
// Output: The sum of -2 + -1 + 1 + 2 is 0 and the average is 0