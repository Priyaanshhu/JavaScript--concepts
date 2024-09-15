// XMR (XML HTTP REQUEST)

// Define the URL of the API endpoint
// The data which this API link will give are also save in "urlData.json" file
const URL = "https://jsonplaceholder.typicode.com/posts";

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Log the XMLHttpRequest object to the console
console.log(xhr);

// Log the current readyState of the XMLHttpRequest object (should be 0 at this point)
console.log(xhr.readyState);

// Open a GET request to the specified URL
xhr.open("GET", URL);

// Set the onload event handler to process the response when the request is complete
xhr.onload = function() {
  // Get the response text from the XMLHttpRequest object
  const response = xhr.response;

  // Parse the response text as JSON
  const data = JSON.parse(response);

  // Log the parsed data to the console
  console.log(data);
};

// Send the request
xhr.send();


// Here's a step-by-step explanation:
// 1. Define the URL of the API endpoint.
// 2. Create a new XMLHttpRequest object.
// 3. Log the XMLHttpRequest object and its initial readyState (0) to the console.
// 4. Open a GET request to the specified URL.
// 5. Set the onload event handler to process the response when the request is complete.
// 6. In the onload handler:
//     - Get the response text from the XMLHttpRequest object.
//     - Parse the response text as JSON.
//     - Log the parsed data to the console.
// 7. Send the request.

// Note:
// - "readyState" is an integer that indicates the current state of the XMLHttpRequest object:
//     - 0: UNSENT (initial state)
//     - 1: OPENED (open() has been called)
//     - 2: HEADERS_RECEIVED (response headers have been received)
//     - 3: LOADING (response data is being received)
//     - 4: DONE (response data has been fully received)
// - "xhr.response" contains the response text from the server.
// - "JSON.parse()" is used to parse the response text as JSON.