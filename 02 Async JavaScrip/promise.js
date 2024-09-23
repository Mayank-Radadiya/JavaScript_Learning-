//   promise is an object representing the eventual completion or failure of an asynchronous operation.
//A promise can be in one of three states:

// Pending: Initial state, now not completed.
// Resolve: The operation completed successfully.
// Rejected: The operation failed.

// Creating a promise
let myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation, e.g., fetching data from a server
  setTimeout(() => {
    let success = true; // Simulating successful operation
    if (success) {
      resolve("Operation completed successfully!"); // If successful, call resolve
    } else {
      reject("Operation failed!"); // If failed, call reject
    }
  }, 2000); // Simulating a delay of 2 seconds
});

// Consuming the promise
myPromise
  .then((message) => {
    console.log("Success: " + message); // If promise is fulfilled
  })
  .catch((error) => {
    console.log("Error: " + error); // If promise is rejected
  });

//   We create a promise using the Promise constructor. Inside the constructor, we define an asynchronous operation that simulates fetching data after a delay of 2 seconds.
// If the operation succeeds, we call the resolve function with a success message. If it fails, we call the reject function with an error message.
// We consume the promise using the then method, which takes a callback function that will be executed when the promise is fulfilled. We can also use the catch method to handle errors if the promise is rejected.

//one more example.

var RandomNumber = new Promise((res, rej) => {
  var n = Math.floor(Math.random() * 10);
  console.log(n);
  if (n > 5) {
    return res();
  } else {
    return rej();
  }
});

RandomNumber.then((res) => {
  console.log("Number is Grater then 5");
}).catch((rej) => {
  console.log("Number is Less then 5");
});


