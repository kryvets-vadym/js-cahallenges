/*
Write a function that takes two values, 'a' and 'b', as parameters.
This function should return 'true' if the two values are equal and of the same type.
Otherwise it should return 'false'.

Expected result:
myFunction(2, 3); // return false
myFunction(3, 3); // return true
myFunction(1, "1"); // return false
myFunction("10", "10"); // return true
*/

const myFunction = (a, b) => a === b;

console.log(myFunction(2, 3));
console.log(myFunction(3, 3));
console.log(myFunction(1, "1"));
console.log(myFunction("10", "10"));