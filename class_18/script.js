// document.getElementById("demo").innerHTML =
//   "Browser inner window width: " +
//   window.innerWidth +
//   "px<br>" +
//   "Browser inner window height: " +
//   window.innerHeight +
//   "px";

// function greetUser(name, callback) {
//   console.log(`Hello, ${name}!`);
//   callback();
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// // Using the callback function
// greetUser("Alice", sayGoodbye);

// setTimeout(myFunction, 3000);

// function myFunction() {
//   document.getElementById("demo2").innerHTML = "I love You !!";
// }

// *************************************************

// let myPromise = new Promise(function (Resolve, Reject) {
//   // "Producing Code" (May take some time)

//   Resolve(); // when successful
//   Reject(); // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function (value) {
//     /* code if successful */
//   },
//   function (error) {
//     /* code if some error */
//   }
// );

// function myDisplayer(some) {
//   document.getElementById("demo2").innerHTML = some;
// }

// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 1;

//   // some code (try to change x to 5)

//   if (x == 0) {
//     myResolve("success");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );

// Function that simulates an API call
// function fetchUserData(userId) {
//   return new Promise((resolve, reject) => {
//     // Simulating network delay
//     setTimeout(() => {
//       // Simulating success or failure
//       if (userId === 1) {
//         resolve({ id: 1, name: "Alice", age: 25 });
//       } else {
//         reject("User not found");
//       }
//     }, 5000);
//   });
// }

// // Function to handle the API response
// function displayUserData(userId) {
//   fetchUserData(userId)
//     .then((userData) => {
//       console.log(userData);

//       //   Success: Display user data
//       document.getElementById(
//         "demo"
//       ).innerHTML = `ID: ${userData.id}<br>Name: ${userData.name}<br>Age: ${userData.age}`;
//     })
//     .catch((error) => {
//       console.log(error);

//       // Error: Display error message
//       document.getElementById("demo").innerHTML = error;
//     });
// }

// displayUserData(1);
// // displayUserData(2);

// async function myDisplay() {
//   let myPromise = new Promise(function (resolve, reject) {
//     let x = 1;

//     if (x == 0) {
//       resolve("I love You !!");
//     } else {
//       reject("I hate You !!");
//     }
//   });

//   try {
//     let result2 = await myPromise;
//     console.log(result2);
//     document.getElementById("demo").innerHTML = result2;
//   } catch (error) {
//     console.log(error);
//     document.getElementById("demo").innerHTML = error;
//   }
// }

// myDisplay();

// get user data form backend

async function UserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    data.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.className = "user-card";
      userCard.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        `;
      userContainer.appendChild(userCard);
    });
  } catch (error) {
    console.log(error);
  }
}

// UserData();
