// Global Scope - friend is accessible anywhere in this file.
const friend = 'John';

const greetFriend = (myName) => {
  // The myName parameter has local/function scope. It can only be accessed inside of greetFriend

  // We can access the globally scoped `friend` here since we are in an "inner" scope.
  console.log(`Hi, ${friend}, I'm ${myName}`);
}

greetFriend('Jane');
// Output: "Hi, John, I'm Jane"

// We can't access myName because we are in an "outer" scope compared to where it is declared.
myName; // ReferenceError: myName is not defined