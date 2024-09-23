const ApiRequest = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    )
    const data = await response.json();
    return data
    
  } catch (error) {
    return error.message
  }
};
ApiRequest().then((data) => console.log(data))
// .catch((error) => console.log(error.message))
