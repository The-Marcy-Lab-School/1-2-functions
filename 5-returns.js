debugger;

const add = (x, y) => {
  return x + y;
}

const sum = add(5, 3);
console.log(sum); // Prints 8

// What is the result of this code? What is the order in which these calls are resolved?
const result = add(add(1, 2), add(3, 4));
console.log(result);