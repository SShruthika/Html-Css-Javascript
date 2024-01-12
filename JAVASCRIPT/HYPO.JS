// Function to calculate the hypotenuse
function calculateHypotenuse(sideA, sideB) {
    // Using the Pythagorean theorem: c² = a² + b²
    const hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    return hypotenuse;
  }
  
  // Example usage
  const sideA = 3;
  const sideB = 4;
  
  const hypotenuse = calculateHypotenuse(sideA, sideB);
  console.log(`For a right-angled triangle with sides ${sideA} and ${sideB}, the hypotenuse is: ${hypotenuse}`);
  