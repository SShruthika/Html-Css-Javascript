// normal function
function name()
{
    console.log("hello");
}
name()

//anonymous variable function
var a = function()
{
    console.log("hello");
}
a();


//define a paranenthesis
(function name()
{
    console.log("hello!");
}
)();

//anonymos functon in arugument
var a = function(value)
{
    console.log("hello",value);
}
a("shruthi");