debugger;

console.log('This happens first');

const sayHello = () => {
  // not executed until sayHello() is invoked
  console.log('hello');
}

console.log('this happens second');

// hello is printed when sayHello() is invoked
sayHello();

// we can invoke a function multiple times!
sayHello();