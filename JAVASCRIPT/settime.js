// settimeout 
  // const time = setTimeout(myGreeting, 5000);

  // function myGreeting() {
  //  console.log( "SHRUTHIKA!");
  // }

 //clear settimeout
  const myTimeout = setTimeout(myGreeting, 2000);

  function myGreeting() {
   console.log("SHRUTHIKA!");
  }
  
  function myStopFunction() {
    clearTimeout(myTimeout);
  }
 

