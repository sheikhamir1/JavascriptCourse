// const obj = {
//   name: "amir",
//   age: 25,
//   city: "kolkata",
// };
// for (let key in obj) {
//   console.log(obj);
// }

// const map = new Map();

// map.set("Name", "amir");
// map.set("age", 25);
// map.set("city", "kolkata");
// console.log(map.keys());

// const date = new Date();

// console.log(date.toLocaleString());

// this is simple object
// const obj = {
//   name: "amir",
//   age: 25,
//   city: "kolkata",
// };
// console.log(obj);
// console.log(typeof obj);

// let jsonFile = JSON.stringify(obj);
// console.log("jsonFile", jsonFile);

// let converttoObj = JSON.parse(jsonFile);
// console.log("converttoObj", converttoObj);

// (function () {
//   let obj = {
//     name: "amir",
//     age: 25,
//     city: "kolkata",
//   };
//   console.log(obj);
//   console.log(typeof obj);
// })();

// function greet() {
//   console.log("hello");
// }

// let setTime = setInterval(greet, 2000);
// clearInterval(setTime);

// setTimeout(() => {
//   console.log("amir khan");
// }, 5000);

// classes

// class animal {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   animaltype(type) {
//     console.log("rocky is a " + type);
//   }
//   sum(num, num2) {
//     console.log("sum for " + num + " and " + num2 + " is " + (num + num2));
//   }
//   eat(name) {
//     console.log(name + " eating");
//   }
//   sleep(name) {
//     console.log(name + " sleeping");
//   }
//   walk(name) {
//     console.log(name + " walking");
//   }
//   run(name) {
//     console.log(name + " running");
//   }
// }

// const animal1 = new animal("rocky", "Dog");
// // console.log(animal1);
// // animal1.animaltype("bull dog");
// animal1.sum(10, 20);

// // animal1.sayHi();
// // animal1.sayBye();
// // animal1.eat();
// // animal1.sleep();
// // animal1.walk();
// // animal1.run();

// *************************************************************************************

// Base class
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Derived class: Dog
class Dog extends Animal {
  constructor(name, species) {
    super(name, species); // Call the parent constructor
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

// Derived class: Cat
class Cat extends Animal {
  constructor(name, species) {
    super(name, species);
  }

  speak() {
    console.log(`${this.name} meows.`);
  }
}

// Creating instances
const dog = new Dog("rocky", "bullDog");
const cat = new Cat("mariya", "PersianCat");
const ani = new Animal("buddy", "normal");

// Using the speak method
ani.speak(); // Output: rocky barks.
dog.speak(); // Output: Buddy barks.
cat.speak(); // Output: Whiskers meows.
