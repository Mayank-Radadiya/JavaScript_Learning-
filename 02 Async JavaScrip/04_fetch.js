// The fetch API is a modern replacement for XMLHttpRequest (XHR), providing a more powerful and flexible feature set for fetching resources from the network. It's built into modern web browsers and allows you to make HTTP requests to fetch data from URLs and handle the response asynchronously.

// Here's a basic example of how to use the fetch API to make a GET request:

function f2() {
    fetch("https://randomuser.me/api/")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }
  
  f2();
  
  // Fetch code using   async await
  
  async function f1() {
    let raw = await fetch("https://randomuser.me/api/");
    let data = await raw.json();
    console.log(data);
  }
  
  f1();
  