# Javascript challenges

---

### 1. Variable comparison

> Write a function that takes two values, **a** and **b**, as parameters.
> This function should return **true** if the two values are equal and of the same type.
> Otherwise it should return **false**.

```javascript
function myFunction(a, b) {
  return;
}
```

Expected result:

```javascript
myFunction(2, 3); // return false
myFunction(3, 3); // return true
myFunction(1, "1"); // return false
myFunction("10", "10"); // return true
```

---

### 2. Get the type of variable

> Write a function that takes **one** parameter and returns the **type** of value received
> in that parameter:

```javascript
function myFunction(a) {
  return;
}

console.log(myFunction(1)); // number
console.log(myFunction(false)); // boolean
console.log(myFunction({})); // object
console.log(myFunction("Hello World")); // string
console.log(myFunction(["Hello World"])); // object
```

The expected result is next to each `console.log` above, so
what should appear on the console when you run the program looks like this:

```
number
boolean
object
string
object
```

---

### 3. Arithmetic operations

> Write a function that gets 6 parameters (a,b,c,d,e,f).
> Do the sum of **a** with **b**.
> The result of sum, subtract the value of **c**.
> The result of the subtraction, multiply by **d** and divide by **e**.
> And to finish, do the result to the power of **f**.

```javascript
//Comlete the function
function myFunction(a, b, c, d, e, f) {
  return;
}

console.log(myFunction(6, 5, 4, 3, 2, 1)); // 10.5
console.log(myFunction(6, 2, 1, 4, 2, 3)); // 2744
console.log(myFunction(2, 3, 6, 4, 2, 3)); // -8
```

Then in `console.log` we will get the expected result for these numbers.

Some tips:

```
You will need the following operators:
Addition: 1+2 // result: 3
Subtraction: 3-2 // result: 1
Multiplication: 3*3 // result: 9
Exponent: 3**3 // result: 27
```

Pay attention, to the order in which the operations are performed.
The next operation always uses the result of the previous one.

---

### 4. String manipulation

> Write a function that takes two parameters **(text, flag)**.
> If the **flag** is set to **"start"**, it should return the first 3 characters of the **text** parameter.
> If the **flag** is set to **"end"**, it must return the last 3 characters of the **text** parameter.
> If the **text** parameter has less than 3 characters, just return the **text**.

```javascript
//Comlete the function
function myFunction(text, flag = "start") {
  return;
}

console.log(myFunction("abcdefg", "start")); // abc
console.log(myFunction("abcdefg", "end")); // efg
console.log(myFunction("abcdefg")); // ab
```

**Parameter with default value**

Note that the parameter **flag** receives a value in the function itself.
That's the default value of the **flag** parameter, if no value is passed.
Therefore, the `console.log` ultimatum, which does not pass any value to **flag**,
has the same result as the first one. Because the **flag** has the value **"start"**
by default.

### 4. String manipulation (part 2)

> Write a function that takes two parameters (fullname, flag).
> If the flag is set to "firstname", it should return only the first word of the fullname parameter.
> If the flag is equal to "lastname", it must return the whole text, except the first word of the fullname parameter
> If the flag parameter is empty or fullname contains only one word, just return the content of fullname.

```javascript
//Comlete the function
function myFunction(fullname, flag = "") {
  return;
}

console.log(myFunction("John Williams Smith", "firstname")); // John
console.log(myFunction("John Williams Smith", "lastname")); // Williams Smith
console.log(myFunction("John Williams Smith")); // John Williams Smith
console.log(myFunction("John", "lastname")); // John
```

### 5. Numerical operations

> Write a function that takes a number as parameter.
> If the number is even, returns **true** and if it's odd, returns **false**.

```javascript
//Comlete the function
function myFunction(num) {
  return;
}

console.log(myFunction(8)); // true
console.log(myFunction(-10)); // false
console.log(myFunction(7)); // true
console.log(myFunction(-41)); // false
```

### 6. Frequency of a substring in a string

> Write a function that takes two strings **(a,b)** as parameters and
returns the number of times the string **a** is used within **b**.

```javascript
//Comlete the function
function myFunction(a, b) {
  return;
}

console.log(myFunction("o", "Lorem ipsum dolor sit amet")); // 3
console.log(myFunction("em", "Lorem ipsum dolor sit amet")); // 1
console.log(myFunction("t", "Lorem ipsum dolor sit amet")); // 2
```
