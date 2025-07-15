function outerFunction() {
  let secret = "Hello, World!";
  function innerFunction() {
    console.log(secret);
  }
  return innerFunction;
}

const myClosure = outerFunction();
myClosure();

//Making counter with the help of closure
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count += 1;
      console.log(count);
    },
    decrement: function () {
      count -= 1;
      console.log(count);
    },
  };
}

const myCounter = createCounter();
//console.log(count) -> This will throw error because count is inner bounds of the program
myCounter.increment();
myCounter.increment();
myCounter.decrement();

//Example 3 : prototype
/* Prototype allows you to add more methods to the existing fucntion or Objects */
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(`${this.name} says Woof!`);
};

const myDog = new Dog("Buddy");
myDog.bark();

//Exampple 3_2 : Real world example of prototype
Array.prototype.sayHello = function () {
  console.log("Hellow from array!");
};
const myArray = [1, 2, 3];
myArray.sayHello();
