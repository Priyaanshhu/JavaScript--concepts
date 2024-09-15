// FETCH

// The Fetch API is a modern JavaScript API for making HTTP requests. It provides a more efficient and flexible way to make requests compared to the traditional XMLHttpRequest (XHR) object.

// Key Features:
// 1. Promise-based: Fetch API returns Promises, making it easier to handle asynchronous requests.
// 2. Simplified syntax: Fetch API has a more concise and readable syntax compared to XHR.
// 3. Support for modern HTTP features: Fetch API supports modern HTTP features like CORS, HTTP/2, and streaming.
// 4. Error handling: Fetch API provides a built-in error handling mechanism.

// Basic Usage:
// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// Fetch API Methods:
// 1. fetch(url): Makes a GET request to the specified URL.
// 2. fetch(url, options): Makes a request with custom options (method, headers, body, etc.).

// Options:
// - method: HTTP method (GET, POST, PUT, DELETE, etc.)
// - headers: Request headers
// - body: Request body
// - mode: Request mode (cors, no-cors, same-origin)


// This code sends a POST request to the specified URL with JSON data and handles the response by parsing the JSON data and logging it to the console. If an error occurs, it catches the error and logs an error message to the console.

// Define the URL for the API endpoint
// The data which this API link will give are also save in "urlData.json" file
const URL = "https://jsonplaceholder.typicode.com/posts";

// Send a POST request to the specified URL with the provided options
fetch(URL, {
  // Specify the HTTP method (POST) for the request
  method: 'POST',
  
  // Set the request body to a JSON string containing the data to be sent
  body: JSON.stringify({
    title: 'foo', // Send a title field with value 'foo'
    body: 'bar', // Send a body field with value 'bar'
    userId: 1 // Send a userId field with value 1
  }),
  
  // Set the request headers
  headers: {
    // Specify the content type as JSON with UTF-8 encoding
    'Content-type': 'application/json; charset=UTF-8'
  }
})

// Handle the response from the server
.then(response => {
  // Check if the response status is OK (200-299)
  if (response.ok) {
    // Parse the response body as JSON and return it
    return response.json()
  } else {
    // Throw an error if the response status is not OK
    throw new Error("Something went wrong!!!")
  }
})

// Handle the parsed JSON data from the response
.then(data => {
  // Log the data to the console
  console.log(data)
})

// Catch any errors that occur during the request or response handling
.catch(error => {
  // Log a message to indicate that an error occurred
  console.log("inside catch")
  
  // Log the error message to the console
  console.log(error)
})
