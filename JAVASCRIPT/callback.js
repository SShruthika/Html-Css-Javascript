// Function with a callback parameter
function doSomethingAsync(callback) {
    setTimeout(function() {
      console.log("Operation completed.");
      callback(); // Execute the callback function
    }, 1000);
  }
  
  // Callback function
  function afterOperation() {
    console.log("Callback executed.");
  }
  
  // Using the function with a callback
  doSomethingAsync(afterOperation);
  