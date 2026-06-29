# JavaScript Variables & Data Types

This repository contains my notes and practice code for learning JavaScript variables, data types, variable naming rules, comments, and console output.

---

## Files

| File                  | Description                                       |
| --------------------- | ------------------------------------------------- |
| `variable.js`         | Demonstrates JavaScript data types with examples. |
| `variable-rules.js`   | Covers variable naming rules and best practices.  |
| `without_variable.js` | Demonstrates comments and `console.log()` usage.  |

---

## Data Types (`variable.js`)

JavaScript provides several built-in data types.

| Data Type        | Description                          | Example                |
| ---------------- | ------------------------------------ | ---------------------- |
| Number (Integer) | Whole numbers                        | `let x = 10;`          |
| Number (Float)   | Decimal numbers                      | `let y = 4.555;`       |
| String           | Text enclosed in quotes or backticks | `let words = "Hello";` |
| Boolean          | `true` or `false`                    | `console.log(true);`   |
| `undefined`      | Declared but not assigned a value    | `let age;`             |
| `null`           | Intentionally empty value            | `let name = null;`     |

### Example

```javascript
// Integer
let x = 10;

// Float
let y = 4.555;

// Strings
let words = "Hello";
let letter = 'A';
let greeting = `How are you?`;

// Undefined
let age;
console.log(age);

age = 5;
console.log(age);

// Null
let name = null;
console.log(name);
```

> Always declare variables using `let`, `const`, or `var`. Avoid creating variables without a declaration keyword.

---

## Variable Naming Rules (`variable-rules.js`)

### Use Descriptive Names

```javascript
// Bad
let x = 5;

// Good
let name = "Monty";
let age = 5;
```

### Use camelCase

```javascript
let favouriteColor = "Blue";
```

### Valid Variable Names

```javascript
let $contact = "monty123@gmail.com";
let _phoneNumber = "01234567890";
```

### Invalid Variable Names

```javascript
// let 1city = "Istanbul";
// let !country = "Turkiye";
```

### Use `const` for Constant Values

```javascript
const species = "Homo sapiens";
```

### Use `let` for Changeable Values

```javascript
let height = "5'2";
```

`var` is still supported but `let` is preferred in modern JavaScript.

---

## Comments & `console.log()` (`without_variable.js`)

### Comments

```javascript
// Single-line comment

/*
   Multi-line comment
*/
```

### console.log()

```javascript
console.log(5);
console.log('&');
console.log("Hello");
console.log(true);
console.log();
```

`console.log()` displays values in the browser console or terminal and is commonly used for debugging.

---

## Running the Files

```bash
node variable.js
node variable-rules.js
node without_variable.js
```

---

## Key Takeaways

* Use `let` for variables whose values can change.
* Use `const` for values that remain constant.
* Avoid using `var` in modern JavaScript.
* Variable names must begin with a letter, `_`, or `$`.
* Use descriptive names and follow the `camelCase` convention.
* Strings can be written using double quotes, single quotes, or backticks.
* `console.log()` is useful for displaying output and debugging code.
