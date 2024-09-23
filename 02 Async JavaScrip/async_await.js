// Async/await is a modern JavaScript feature that allows you to work with promises in a more synchronous and intuitive way. It was introduced in ECMAScript 2017 (ES8) and provides a cleaner syntax for handling asynchronous operations compared to traditional promise chains.

// Here's how async/await works:

// Async Functions: An async function is a function that implicitly returns a promise. You declare an async function using the async keyword before the function declaration.

// Await Operator: Inside an async function, you can use the await keyword before an expression that returns a promise. The await keyword pauses the execution of the async function until the promise is resolved or rejected. It then returns the resolved value of the promise.

// Example:


async function f1() {
  let raw = await fetch("https://randomuser.me/api/");
  let data = await raw.json();
  console.log(data);
}

f1();

// Other Example

// Async function to simulate fetching data from a server
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throwing the error for handling outside the async function
  }
}

// Using the async function
async function processData() {
  try {
    let data = await fetchData();
    console.log("Data:", data);
    // Process the data further
  } catch (error) {
    console.error("Error processing data:", error);
  }
}

processData();
