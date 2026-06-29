# JavaScript Strings & String Concatenation

A beginner-friendly JavaScript program covering strings, string immutability, string concatenation, and console output.

## Files

| File               | Description                                                                  |
| ------------------ | ---------------------------------------------------------------------------- |
| `string.js`        | Demonstrates strings, reassignment, string immutability, and `console.log()` |
| `concatenation.js` | Demonstrates string concatenation using `+`, `+=`, and `concat()`            |

## What I Learned

### 1. Strings & String Immutability (`string.js`)

A **string** is a sequence of characters used to represent text. Strings can be created using either single quotes (`'`) or double quotes (`"`).

Strings in JavaScript are **immutable**, meaning their contents cannot be changed after they are created. If you assign a new value to a variable containing a string, JavaScript creates a new string instead of modifying the existing one.

| Concept            | Description                            | Example from Code                               |
| ------------------ | -------------------------------------- | ----------------------------------------------- |
| Single Quotes      | Creates a string using `' '`           | `let singleQuotes = 'This is a Program';`       |
| Double Quotes      | Creates a string using `" "`           | `let doubleQuotes = "No, This is a Programme";` |
| Reassignment       | `let` variables can store a new value  | `machine = "Computer";`                         |
| Constant Variables | `const` variables cannot be reassigned | `const greeting = "Hello, Are you Human?";`     |
| Console Output     | Displays text in the console           | `console.log(greeting);`                        |

```javascript
let singleQuotes = 'This is a Program';

let doubleQuotes = "No, This is a Programme";

// Reassignment
let machine = "Vacuum Cleaner";
machine = "Computer";

const greeting = "Hello, Are you Human?";
// greeting = "Hi"; // Error

console.log(greeting);
console.log("Well, obviously a human. I can't imagine a lion typing, programming, and sorting algorithms.");
```

**Note:** Reassigning a variable does **not** modify the original string. It simply points the variable to a newly created string.

---

### 2. String Concatenation (`concatenation.js`)

**String concatenation** is the process of joining two or more strings together.

JavaScript provides multiple ways to concatenate strings.

| Method            | Description                        | Example from Code                 |
| ----------------- | ---------------------------------- | --------------------------------- |
| `+` Operator      | Joins strings together             | `firstName + " " + lastName`      |
| `+=` Operator     | Appends text to an existing string | `skills += ", Python Developer";` |
| `concat()` Method | Concatenates multiple strings      | `goal1.concat(" and ", goal2)`    |

```javascript
let firstName = "Sihan";
let lastName = "Sheikh";

// Using +
let fullName = firstName + " " + lastName;
console.log("My name is " + fullName + ".");

// Using +=
let skills = "Problem Solving";
skills += ", SOC Analysis";
skills += ", Python Developer";

console.log("My skills are " + skills + ".");

// Using concat()
let goal1 = "Cybersecurity Professional";
let goal2 = "Ethical Hacker.";

console.log("I want to be a " + goal1.concat(" and ", goal2));
```

**Important:** Since strings are immutable, using `+=` or `concat()` creates a new string rather than modifying the existing one.

---

### 3. `console.log()`

The `console.log()` method prints information to the browser's Developer Console or the Node.js terminal.

It is commonly used to:

* Display messages
* Print variable values
* Test program output
* Debug applications

Examples:

```javascript
console.log("Hello, World!");

let name = "Alice";
console.log(name);

console.log("Name:", name);

console.log("Hello, " + name + "!");
```

---

## How to Run

Run either file using Node.js:

```bash
node string.js
```

```bash
node concatenation.js
```

---

## Key Takeaways

* Strings are primitive data types used to store text.
* JavaScript strings are immutable and cannot be modified directly.
* Use `let` when a variable's value may change and `const` when it should remain constant.
* The `+` operator is the simplest way to concatenate strings.
* The `+=` operator appends text to an existing string variable.
* The `concat()` method joins multiple strings together.
* `console.log()` is an essential tool for displaying output and debugging JavaScript programs.
* Follow JavaScript naming conventions by using descriptive variable names and camelCase.
