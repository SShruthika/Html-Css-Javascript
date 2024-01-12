function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      // Swap elements array[i] and array[randomIndex]
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 5];
  shuffleArray(myArray);
  console.log(myArray);
  