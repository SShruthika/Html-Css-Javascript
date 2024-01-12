// Function to generate a random number between 0 and 1
function generateRandomNumber() {
    return Math.random();
  }
  
  // Function to generate a random integer within a specific range
  function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Example usage
  const randomFloat = generateRandomNumber();
  const randomInteger = generateRandomInteger(1, 10);
  
  console.log(`Random Float between 0 and 1: ${randomFloat}`);
  console.log(`Random Integer between 1 and 10: ${randomInteger}`);
  