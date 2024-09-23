//In JavaScript, a callback is a function that is passed as an argument to another function, and it gets executed after the completion of that function. Callbacks are commonly used in asynchronous operations, such as handling events, making AJAX requests, or reading files.


// Define a function that takes a callback as an argument
function doSomethingAsync(callback) {
    // Simulate an asynchronous operation (e.g., fetching data from a server)
    setTimeout(function() {
        // After some time, call the callback function
        callback("Data fetched successfully");
    }, 2000); // Simulating a delay of 2 seconds
}

// Define a callback function
function handleResult(result) {
    console.log("Result:", result);
}

// Call the function with the callback
doSomethingAsync(handleResult);


// For run a async code using this:
//  callbacks
// then catch
// async await