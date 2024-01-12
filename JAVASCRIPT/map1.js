 //MAP METHOD
 let a=new Map();
  a.set("me", "SHRUTHI");
  a.set("color","green")
 
  {
     console.log(a);
  }

  
 // Create a Map
 const fruits = new Map([
   ["apples", 500],
   ["bananas", 300],
   ["oranges", 200]
 ]);
 console.log(fruits);


  //ARRAY MAP()
 const number = [4, 9, 16, 25];
 console.log(number.map(Math.sqrt));

 
 //ARRAY FUNCTION MAP()
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr);