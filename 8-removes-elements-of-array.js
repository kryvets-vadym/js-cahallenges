/*
  Write a function that takes an array as a parameter and removes the first
  3 elements of the array. If the array has less than 3 elements, return an
  empty array.

  console.log(myFunction([1, 2, 3, 4, 5])); // [4, 5]
  console.log(myFunction([5, 4, 3, 2, 1, 0])); // [2, 1, 0]
  console.log(myFunction([10, 20, 30])); // []
  console.log(myFunction([99, 100])); // []
*/

function myFunction(a) {
  return a.length > 3 ? a.slice(3) : [];
}

console.log(myFunction([1, 2, 3, 4, 5]));
console.log(myFunction([5, 4, 3, 2, 1, 0]));
console.log(myFunction([10, 20, 30]));
console.log(myFunction([99, 100]));
