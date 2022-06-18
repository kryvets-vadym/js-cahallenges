/*
  Write a function that takes an array 'a' and a value 'b' as parameters.
  The function should remove all occurrences of 'b' and return the filtered array.

  console.log(myFunction([1, 2, 3], 2)); // [1, 3]
  console.log(myFunction([1, 2, "3"], "3")); // [1, 2]
  console.log(myFunction(["1", false, 2, "3"], false)); // ['1', 2, '3']
  console.log(myFunction([5, 1, 2, 5, 3, 5], 5)); // [1, 2, 3]
*/

function myFunction(a, b) {
  return a.filter((value) => value !== b);

  // let filtered = [];
  // for (let value of a) {
  //     if (value !== b) {
  //         filtered.push(value);
  //     }
  // }
  // return filtered;
}

console.log(myFunction([1, 2, 3], 2));
console.log(myFunction([1, 2, "3"], "3"));
console.log(myFunction(["1", false, 2, "3"], false));
console.log(myFunction([5, 1, 2, 5, 3, 5], 5));
