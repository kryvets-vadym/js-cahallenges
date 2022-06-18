/*
   Write a function that takes a number as parameter.
   If the number is even, returns 'true' and if it's odd, returns 'false'.

console.log(myFunction(8)); // true
console.log(myFunction(-10)); // true
console.log(myFunction(7)); // false
console.log(myFunction(-41)); // false
*/

function myFunction(num) {
  return num % 2 === 0;
}

console.log(myFunction(8));
console.log(myFunction(-10));
console.log(myFunction(7));
console.log(myFunction(-41));
