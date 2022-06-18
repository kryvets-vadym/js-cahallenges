/*
 Write a function that takes two parameters (fullName, flag).
 If the flag is set to 'firstName', it should return only the first word of the 'fullName' parameter.
 If the flag is equal to 'lastName', it must return the whole text, except the first word of the 'fullName' parameter
 If the flag parameter is empty or 'fullName' contains only one word, just return the content of 'fullName'.

console.log(myFunction("John Williams Smith", "firstName")); // John
console.log(myFunction("John Williams Smith", "lastName")); // Williams Smith
console.log(myFunction("John Williams Smith")); // John Williams Smith
console.log(myFunction("John", "lastName")); // John
*/

function myFunction(fullName, flag = "") {
  const parts = fullName.split(" ");
  console.log(parts.slice());
  return flag.length === 0 || parts.length <= 1
    ? fullName
    : flag === "firstName"
    ? parts[0]
    : parts.slice(1).join(" ");
}

console.log(myFunction("John Williams Smith", "firstName"));
console.log(myFunction("John Williams Smith", "lastName"));
console.log(myFunction("John Williams Smith"));
console.log(myFunction("John", "lastName"));
