
// This code sends a GET request to the specified URL, processes the response data, extracts an id, and then sends another GET request with the id appended to the URL. It logs the final response data to the console and catches any errors that occur during the process.


// Define the URL for the API endpoint
// The data which this API link will give are also save in "urlData.json" file
const URL = "https://jsonplaceholder.typicode.com/posts";

// Create a function to send a request with a specified method and URL
function sendRequest(method, url) {
  // Return a new Promise to handle the asynchronous request
  return new Promise(function(resolve, reject) {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Open the request with the specified method and URL
    xhr.open(method, url);

    // Set the onload event handler to process the response
    xhr.onload = function() {
      // Check if the response status is successful (200-299)
      if (xhr.status >= 200 && xhr.status < 300) {
        // Resolve the Promise with the response text
        resolve(xhr.response);
      } else {
        // Reject the Promise with an error message
        reject(new Error("Something Went wrong"));
      }
    };

    // Set the onerror event handler to catch any errors
    xhr.onerror = function() {
      // Reject the Promise with an error message
      reject(new Error("Something went wrong"));
    };

    // Send the request
    xhr.send();
  });
}

// Call the sendRequest function with a GET method and the specified URL
sendRequest("GET", URL)
  // Handle the response data with the first then() block
  .then(response => {
    // Parse the response text as JSON (object)
    const data = JSON.parse(response);
    // Return the parsed data
    return data;
  })
  // Handle the parsed data with the second then() block
  .then(data => {
    // Extract the id from the fourth item in the data array
    const id = data[66].id;
    // Return the id
    return id;
  })
  // Handle the id with the third then() block
  .then(id => {
    // Construct a new URL by appending the id to the original URL
    const url = `${URL}/${id}`;
    // Call the sendRequest function again with the new URL
    return sendRequest("GET", url);
  })
  // Handle the response from the second request
  .then(newResponse => {
    // Parse the response text as JSON
    const newData = JSON.parse(newResponse);
    // Log the parsed data to the console
    console.log(newData);
  })
  // Catch any errors that occur during the request or processing
  .catch(error => {
    // Log the error message to the console
    console.log(error);
  });
