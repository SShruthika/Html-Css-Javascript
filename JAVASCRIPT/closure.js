function outerFunction(outerVariable) {
    // Inner function declared inside the outer function
    function innerFunction(innerVariable) {
      console.log(outerVariable + ' ' + innerVariable);
    }
  
    // Returning the inner function
    return innerFunction;
  }
  
  // Create a closure by calling outerFunction with a specific value
  const closure = outerFunction('Hello');
  
  // Call the inner function, which still has access to outerVariable
  closure('World'); // Outputs: "Hello World"
  