function APICallback(url, callback) {
  const Data = fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((err) => console.log(err));
}

function APICallbackUsingPromise(url) {
  return fetch(url).then((response) => response.json());
}

function HandleData(data) {
  console.log(data);
}
function DataRequest() {
  const Url1 = "https://jsonplaceholder.typicode.com/users/1";
  const Url2 = "https://jsonplaceholder.typicode.com/users/2";
  const Url3 = "https://jsonplaceholder.typicode.com/users/3";

  APICallback(Url1, HandleData);
  APICallback(Url2, HandleData);
  // Using Promise only take one parameter and use Promise.
  APICallbackUsingPromise(Url3)
    .then(HandleData)
    .catch((err) => console.log(err));
}

DataRequest();
