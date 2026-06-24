# JavaScript Variables & Data Types

A beginner-friendly JavaScript program covering variables, data types, naming rules, and console output.

---

## 📁 Files

| File | Description |
|------|-------------|
| `variable.js` | Demonstrates different data types with examples |
| `variable-rules.js` | Covers variable naming rules and best practices |
| `without_variable.js` | Demonstrates comments and `console.log()` usage |

---

## 📚 What I Learned

### 1. Data Types (`variable.js`)

JavaScript has several built-in data types that define the kind of value a variable holds.

| Data Type   | Description                                      | Example from code            |
|-------------|--------------------------------------------------|------------------------------|
| `Number` (Integer)   | Whole numbers                           | `let x = 10;`                |
| `Number` (Float)     | Numbers with a decimal point            | `let y = 4.555;`             |
| `String`    | Text in double quotes, single quotes, or backticks | `let words = "Hello";`, `let letter = 'A';`, `` let greeting = `How are you?`; `` |
| `Boolean`   | A value that is either `true` or `false`         | `console.log(true);`         |
| `undefined` | A variable declared but not yet assigned a value | `let age; // undefined`      |
| `null`      | A variable intentionally set to "nothing"        | `let name = null;`           |

```js
// Integer
let x = 10;

// Float
let y = 4.555;

// String — double quotes, single quotes, and backticks all work
let words = "Hello";
let letter = 'A';
let greeting = `How are you?`;

// Undefined — declared but no value assigned yet
let age;
console.log(age); // undefined
age = 5;
console.log(age); // 5

// Null — intentionally empty
let name = null;
console.log(name); // null
```

> ⚠️ Declaring a variable without `let`, `const`, or `var` (e.g. `a = 55`) works in non-strict mode but is bad practice — always use a keyword.

---

### 2. Variable Naming Rules & Best Practices (`variable-rules.js`)

#### Use Descriptive Names
```js
// ❌ Bad practice
let x = 5;

// ✅ Good practice
let name = "Monty";
let age = 5;
```

#### Use camelCase for Multi-Word Names
```js
let favouriteColor = "Blue";
```

#### First Character Must Be a Letter, `_`, or `$`
```js
// ✅ Valid
let $contact = "monty123@gmail.com";
let _phoneNumber = "01234567890";

// ❌ Invalid
// let 1city = "Istanbul";   // starts with a number — causes error
// let !country = "Turkiye"; // starts with a special character — wrong
```

#### Use `const` for Values That Never Change
```js
const specie = "Homo Sapiens";
// specie = "something else"; // ❌ throws an error

// ❌ Wrong syntax
// let const specie = "Homo Sapiens";
```

#### Use `var` or `let` for Values That Can Change
```js
var height = "5'2";  // var works but let is preferred in modern JS
```

---

### 3. Comments & console.log() (`without_variable.js`)

#### Comments
```js
// This is a single-line comment — ignored when the code runs

/* This is a
   multi-line comment */
```

#### console.log()
`console.log()` prints output to the browser or terminal console. It works with any data type:

```js
console.log(5);       // Number
console.log('&');     // String
console.log("Hello"); // String
console.log(true);    // Boolean
console.log();        // Prints an empty line
```

---

## 🛠️ How to Run

Run any file using Node.js:

```bash
node variable.js
node variable-rules.js
node without_variable.js
```

---

## 📌 Key Takeaways

- Use `let` for variables that will change, `const` for those that won't, and avoid `var` in modern JavaScript.
- Variable names must start with a letter, `_`, or `$` — never a number or special character.
- Always use descriptive, camelCase names for readability.
- Strings can use `"double"`, `'single'`, or `` `backtick` `` quotes.
- `console.log()` is your best friend for debugging.