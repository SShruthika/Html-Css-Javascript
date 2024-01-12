function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
// Create a Person object
const name = new Person("shru", "thika", 22, "green");

// Display age

console.log("My name is " + name.firstName + name.lastName + "."); 

