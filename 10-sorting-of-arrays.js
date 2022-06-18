/*
  Write a function that takes an array 'a' and an order flag with default
  value 'asc'. If the order value is 'asc' return the ordered array in
  ascending order and if it is 'desc' return in descending order.

  console.log(myFunction([2, 3, 1], "asc")); // [1, 2, 3]
  console.log(myFunction([6, 2, 8, 1, 5], "desc")); // [8, 6, 5, 2, 1]
  console.log(myFunction(["green", "blue", "yellow"], "desc")); // ["yellow", "green", "blue"]
  console.log(myFunction(["c", "f", "d", "a", "b", "e"], "asc")); // ["a", "b", "c", "d", "e", "f"]
*/

function myFunction(array, order = "asc") {
  // return order === "asc" ? a.sort() : a.sort().reverse();
  //
  // for (let n = 0; n < array.length; n++) {
  //   for (let i = 0; i < array.length - 1 - n; i++) {
  //     if (array[i] > array[i + 1]) {
  //       let buff = array[i];
  //       array[i] = array[i + 1];
  //       array[i + 1] = buff;
  //     }
  //   }
  // }

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[i]) {
        let buff = array[i];
        array[i] = array[j];
        array[j] = buff;
      }
    }
  }

  if (order === "desc") {
    const invertedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      invertedArray.push(array[i]);
    }
    return invertedArray;
  }
  return array;
}

console.log(myFunction([2, 3, 1], "asc"));
console.log(myFunction([6, 2, 8, 1, 5], "desc"));
console.log(myFunction(["green", "blue", "yellow"], "desc"));
console.log(myFunction(["c", "f", "d", "a", "b", "e"], "asc"));
