/*
Write a function that takes two parameters (text, flag).
If the 'flag' is set to 'start', it should return the first 3 characters of the 'text' parameter.
If the 'flag' is set to 'end', it must return the last 3 characters of the 'text' parameter.
If the 'text' parameter has less than 3 characters, just return the 'text'.

console.log(myFunction("abcdefg", "start")); // abc
console.log(myFunction("abcdefg", "end")); // efg
console.log(myFunction("abcdefg")); // abc

Note that the parameter `flag` receives a value in the function itself.
That's the default value of the `flag` parameter, if no value is passed.
Therefore, the `console.log` ultimatum, which does not pass any value to `flag`,
has the same result as the first one. Because the `flag` has the value `start`
by default.
*/

function myFunction(text, flag = "start") {

    return text.length < 3 ? text : flag === "start" ? text.slice(0, 3) : text.slice(-3);

    // if (text.length < 3) {
    //     return text;
    // }
    // if (flag === "start") {
    //     return text.slice(0, 3);
    // }
    // return text.slice(-3);
    
}

console.log(myFunction("abcdefg", "start"));
console.log(myFunction("abcdefg", "end"));
console.log(myFunction("abcdefg"));




