function outerFunction(outerParam) {
    // Outer function scope
  
    function innerFunction(innerParam) {
      // Inner function scope
      console.log(`Outer parameter: ${outerParam}`);
      console.log(`Inner parameter: ${innerParam}`);
    }
  
    // Calling the inner function
    innerFunction("Inner Value");
  }
  
  // Calling the outer function
  outerFunction("Outer Value");
  