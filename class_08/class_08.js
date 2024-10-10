// "use strict";

// const userOne = {
//   email: "user@u.com",
//   fullName: "newUser",
//   123: "abc",
// };
// console.log(userOne);

// delete userOne[123];
// console.log(userOne);
// console.log(typeof userOne[123]);

// // console.log((userOne.fullName = "oldUser"));

// for (let key in userOne) {
//   console.log(userOne);
// }

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };
// for (let key in user) {
//   // keys
//   console.log(key); // name, age, isAdmin
//   // values for the keys
//   console.log(user[key]); // John, 30, true
// }

// let codes = {
//   49: "Germany",
//   41: "Switzerland",
//   44: "Great Britain",
//   // ..,
//   1: "USA",
// };
// for (let key in codes) {
//   console.log(key);
// }

// let user = {
//   name: "John",
//   surname: "Smith",
// };
// user.age = 25;
// // user.city;
// user.city = "";
// console.log(user);

// for (let prop in user) {
//   console.log(prop);
// }

// let value = "abc";
// const user = {
//   name: "John",
//   surname: "Smith",
// };
// user.age = 25;
// user.city = value;
// console.log(user);

// if (user.city === undefined) {
//   console.log("this is primitive data type");
// } else {
//   console.log("this is obejct data type");
// }
// console.log(user);
// console.log(user.city);

// ********************************************************************************

// Create an object
// const originalObject = {
//   name: "Alice",
//   age: 25,
// };
// console.log("this is original object", originalObject);

// // Create a reference to the original object
// const referenceObject = { ...originalObject }; // = { name: "Alice", age: 25 }

// // Modify the reference object
// referenceObject.age = 30;
// referenceObject.secondobj.newName = "alisha";

// console.log("this is refferenced object ", referenceObject);
// console.log("change reflect in the original object", originalObject);

// Create an object
// const originalObject = { name: "Alice", age: 25 };

// // Create a shallow copy using the spread operator
// const copiedObject = { ...originalObject };

// // Modify the copied object
// copiedObject.age = 26;

// console.log(originalObject); // Output: { name: 'Alice', age: 25 }
// console.log(copiedObject); // Output: { name: 'Alice', age: 26 }
