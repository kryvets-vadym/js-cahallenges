/*
 Write a function that takes two arrays as parameters.
 Return a single array containing the values of the two arrays
 concatenated, removing duplicate values, if any.

console.log(myFunction([1, 2, , 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(myFunction([6, 7], [8, 9])); // [6, 7, 8, 9]
console.log(myFunction([-2, -1, 0, 1, 2], [-1, 1, 2, 3])); // [-2, -1,С 0, 1, 2, 3]
console.log(myFunction(["Hello", "word", "my"], ["My", "Word"])); // [6, 7, 8, 9]
*/

function myFunction(array1, array2) {
  let mergedArray = [...array1, ...array2];
  let result = [];
  for (let i = 0; i < mergedArray.length; i++)
    typeof mergedArray[i] == "string"
      ? result.push(mergedArray[i].toLowerCase())
      : result.push(mergedArray[i]);

  return [...new Set([...result])];
}

console.log(myFunction([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(myFunction([6, 7], [8, 9])); // [6, 7, 8, 9]
console.log(myFunction([-2, -1, 0, 1, 2], [-1, 1, 2, 3])); // [-2, -1, 0, 1, 2, 3]
console.log(myFunction(["Hello", "word"], ["universe", "Word"])); // [6, 7, 8, 9]
