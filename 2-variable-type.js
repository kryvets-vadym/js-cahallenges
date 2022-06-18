/*Write a function that takes **one** parameter and returns the **type** of value received
in that parameter.

console.log(myFunction(1)); // number
console.log(myFunction(false)); // boolean
console.log(myFunction({})); // object
console.log(myFunction("Hello World")); // string
console.log(myFunction(["Hello World"])); // object
*/

const myFunction = (a) => typeof(a);

console.log(myFunction(1));
console.log(myFunction(false));
console.log(myFunction({}));
console.log(myFunction("Hello World"));
console.log(myFunction(["Hello World"]));