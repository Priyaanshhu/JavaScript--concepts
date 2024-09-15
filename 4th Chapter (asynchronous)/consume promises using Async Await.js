// consume promises using Async Await

// Async/await is a syntax feature that allows writing asynchronous code that's easier to read and maintain. It's built on top of Promises and provides a more synchronous look and feel.

// Async/await introduces two new keywords:
// 1. "async": Used to declare an asynchronous function.
// 2. "await": Used to pause the execution of an asynchronous function until a Promise is resolved.

// How async/await works:
// 1. An "async" function returns a Promise.
// 2. Inside an "async" function, use "await" to pause execution until a Promise is resolved.
// 3. When the Promise is resolved, the function continues executing.
// 4. If the Promise is rejected, an error is thrown.

// Benefits:
// 1. Readability: Async/await code looks more synchronous.
// 2. Error handling: Try-catch blocks make error handling easier.
// 3. Reduced callback hell: No more nested callbacks!

// Conclusion:
// Async/await simplifies asynchronous programming in JavaScript, making it easier to write readable and maintainable code. Its benefits include improved error handling, reduced callback hell, and a more synchronous look and feel.


// This code defines an asynchronous function "getPosts" that sends a GET request to the specified URL, checks the response status, parses the response body as JSON, and returns the parsed data. The function is then called, and the response is handled by logging the parsed data to the console. If an error occurs, it is caught and logged to the console.

// Define the URL for the API endpoint
// The data which this API link will give are also save in "urlData.json" file
const URL = "https://jsonplaceholder.typicode.com/posts";

// Define an asynchronous function to get posts
async function getPosts() {
  // Send a GET request to the specified URL
  const response = await fetch(URL);

  // Check if the response status is OK (200-299)
  if (!response.ok) {
    // Throw an error if the response status is not OK
    throw new Error("Something went wrong");
  }

  // Parse the response body as JSON
  const data = await response.json();

  // Return the parsed JSON data
  return data;
}

// Call the getPosts function and handle the response
getPosts()
  // Handle the resolved promise with the parsed JSON data
  .then((myData) => {
    // Log the data to the console
    console.log(myData);
  })
  // Handle any errors that occur during the request or response handling
  .catch(error => {
    // Log a message to indicate that an error occurred
    console.log("inside catch");

    // Log the error message to the console
    console.log(error);
  });
