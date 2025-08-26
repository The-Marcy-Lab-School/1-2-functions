// Challenge: Which of these functions can use implicit returns? Refactor them!

const add = (a, b) => {
  return a + b;
};

const greet = (name) => {
  return `Hello, ${name}!`;
};

const logMessage = (message) => {
  console.log(message);
  return 'message logged';
};