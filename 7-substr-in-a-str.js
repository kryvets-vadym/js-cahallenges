/*
  Write a function that takes two strings '(a,b)' as parameters and
  returns the number of times the string 'a' is used within 'b'.

  console.log(myFunction("o", "Lorem ipsum dolor sit amet")); // 3
  console.log(myFunction("em", "Lorem ipsum dolor sit amet")); // 1
  console.log(myFunction("t", "Lorem ipsum dolor sit amet")); // 2
*/

function myFunction(a, b) {
  return b.toLowerCase().split(a.toLowerCase()).length - 1;
}

console.log(myFunction("o", "Lorem ipsum dolor sit amet")); // 3
console.log(myFunction("em", "Lorem ipsum dolor sit amet")); // 1
console.log(myFunction("t", "Lorem ipsum dolor sit amet")); // 2
