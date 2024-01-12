// async function 
 async function s()
  {
    return  "shruthika"
  }
  console.log(s())

// using promise and async and await
    var a=10;
var b=8;
let promise = new Promise((resolve,reject) => {
if(a>b)
 resolve()
else
 reject()
})

promise.then((resolve)=>{
    console.log("a is bigger then b");
}).catch((reject)=>{
    console.log("sorry a is small");
})

async function astatus(){
  console.log("hi")
  result = await promise
  console.log(result)
  console.log("bye")
}
astatus()
  

