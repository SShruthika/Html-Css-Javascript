// Example object
const car = {
    brand: "",
    model: "",
    year: 0,
  
    // Method to set the brand
    setBrand: function (brand) {
      this.brand = brand;
      return this; // Return the object for chaining
    },
  
    // Method to set the model
    setModel: function (model) {
      this.model = model;
      return this; // Return the object for chaining
    },
  
    // Method to set the year
    setYear: function (year) {
      this.year = year;
      return this; // Return the object for chaining
    },
  
    // Method to display car information
    displayInfo: function () {
      console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
      return this; // Return the object for chaining
    },
  };
  
  // Using method chaining
  car.setBrand("Toyota").setModel("Camry").setYear(2022).displayInfo();
  