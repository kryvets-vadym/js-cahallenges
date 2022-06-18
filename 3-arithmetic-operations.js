/*
  Write a function that gets 6 parameters (a,b,c,d,e,f).
  Do the sum of 'a' with 'b'.
  The result of sum, subtract the value of 'c'.
  The result of the subtraction, multiply by 'd' and divide by 'e'.
  And to finish, do the result to the power of 'f'.

console.log(myFunction(6, 5, 4, 3, 2, 1)); // 10.5
console.log(myFunction(6, 2, 1, 4, 2, 3)); // 2744
console.log(myFunction(2, 3, 6, 4, 2, 3)); // -8
*/

function myFunction(a, b, c, d, e, f) {
    return (((a + b) - c) * d / e) ** f;
}


console.log(myFunction(6, 5, 4, 3, 2, 1)); 
console.log(myFunction(6, 2, 1, 4, 2, 3));
console.log(myFunction(2, 3, 6, 4, 2, 3));
