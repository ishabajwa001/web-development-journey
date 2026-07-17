# JavaScript Strings

A beginner-friendly JavaScript program covering strings, string immutability, string concatenation, escape sequences, template literals, string interpolation, and the `indexOf()` method.

## Files

| File                   | Description                                                           |
| ---------------------- | --------------------------------------------------------------------- |
| `string.js`            | Demonstrates strings, reassignment, `const`, and string immutability  |
| `concatenation.js`     | Demonstrates string concatenation using `+`, `+=`, and `concat()`     |
| `Escape-sequences.js`  | Demonstrates escape sequences such as `\t`, `\n`, `\"`, and `\\`      |
| `index.js`             | Demonstrates basic string concepts and output                         |
| `indexOf.js`           | Demonstrates finding the position of a substring using `indexOf()`    |
| `template-literals.js` | Demonstrates template literals, string interpolation, and expressions |

---

## What I Learned

### 1. Strings & String Immutability (`string.js`)

A **string** is a sequence of characters used to represent text.

Strings can be created using:

* Single quotes (`' '`)
* Double quotes (`" "`)

JavaScript strings are **immutable**. This means the contents of an existing string cannot be changed directly.

When a variable containing a string is reassigned, the variable points to a new string value.

```javascript
let singleQuotes = 'This is a Program';

let doubleQuotes = "No, This is a Programme";

// Reassignment
let machine = "Vacuum Cleaner";
machine = "Computer";

const greeting = "Hello, Are you Human?";

console.log(greeting);
```

### Important Concepts

| Concept       | Description                                |
| ------------- | ------------------------------------------ |
| Single Quotes | Creates a string using `' '`               |
| Double Quotes | Creates a string using `" "`               |
| Reassignment  | A `let` variable can store a new value     |
| `const`       | A constant variable cannot be reassigned   |
| Immutability  | String contents cannot be changed directly |

**Example:**

```javascript
let machine = "Vacuum Cleaner";
machine = "Computer";
```

The original string `"Vacuum Cleaner"` is not modified. The variable is simply assigned a new string value.

---

### 2. String Concatenation (`concatenation.js`)

**String concatenation** is the process of joining two or more strings together.

JavaScript provides multiple ways to concatenate strings.

| Method     | Description                        | Example                        |
| ---------- | ---------------------------------- | ------------------------------ |
| `+`        | Joins strings together             | `firstname + " " + lastname`   |
| `+=`       | Appends text to an existing string | `skills += ", SOC Analysis"`   |
| `concat()` | Joins multiple strings             | `goal1.concat(" and ", goal2)` |

#### Using the `+` Operator

```javascript
let firstname = "Sihan";
let lastname = "Sheikh";

let fullname = firstname + " " + lastname;

console.log("My name is " + fullname + ".");
```

#### Using the `+=` Operator

```javascript
let skills = "Problem Solving";

skills += ", SOC Analysis";
skills += ", Python Developer";
```

The `+=` operator appends new text to the existing value.

#### Using `concat()`

```javascript
let goal1 = "Cybersecurity Professional";
let goal2 = "Ethical Hacker.";

console.log("I want to be a " + goal1.concat(" and ", goal2));
```

**Important:** Because strings are immutable, these operations create a new string value instead of directly modifying the original string.

---

### 3. Escape Sequences (`Escape-sequences.js`)

**Escape sequences** are special characters used inside strings to represent formatting or characters that have a special meaning.

| Escape Sequence | Description    |
| --------------- | -------------- |
| `\t`            | Horizontal tab |
| `\n`            | New line       |
| `\"`            | Double quote   |
| `\\`            | Backslash      |

#### Example

```javascript
console.log("\t\t\t\t\"My Pet Profile\"");
```

The `\t` escape sequence adds tab spacing, while `\"` allows a double quote to be used inside a string.

#### New Line

```javascript
console.log("\nFluffy is a playful little cat.\n");
```

The `\n` escape sequence moves the text to a new line.

#### File Paths

```javascript
let petFilePath = "C:\\Pet\\Fluffy.txt";
```

A double backslash is used because a single backslash starts an escape sequence.

---

### 4. Finding Substrings with `indexOf()` (`indexOf.js`)

The `indexOf()` method returns the position of the first occurrence of a specified substring.

```javascript
let fullname = "Elon Musk";

let position = fullname.indexOf("Musk");

console.log(position);
```

The position of `"Musk"` is returned as an index.

**Important:** JavaScript uses **zero-based indexing**. This means the first character is at position `0`.

#### Case Sensitivity

`indexOf()` is **case-sensitive**.

```javascript
fullname.indexOf("musk");
```

This returns `-1` because `"musk"` and `"Musk"` are different strings.

**`-1` means the substring was not found.**

---

### 5. Template Literals (`template-literals.js`)

**Template literals** are strings created using backticks.

```javascript
let movieCard = `
Name : ${name}
Director : ${director}
Release Year : ${releaseYear}
Rating : ${rating}/${highestRating}`;
```

Template literals make it easier to create multi-line strings and insert variables.

---

### 6. String Interpolation

**String interpolation** means inserting variables or expressions directly inside a string using `${}`.

```javascript
console.log(`
    "${title}"
    ${movieCard}
Rating Percentage : ${(rating / highestRating) * 100} %
`);
```

Variables and expressions can be placed inside `${}`.

#### Expression Example

```javascript
(rating / highestRating) * 100
```

This expression calculates the movie rating percentage.

---

## How to Run

Run any JavaScript file using Node.js:

```bash
node string.js
```

```bash
node concatenation.js
```

```bash
node Escape-sequences.js
```

```bash
node indexOf.js
```

```bash
node template-literals.js
```

---

## Key Takeaways

* Strings are primitive data types used to represent text.
* JavaScript strings are **immutable**.
* `let` variables can be reassigned.
* `const` variables cannot be reassigned.
* The `+` operator concatenates strings.
* The `+=` operator appends text to an existing string.
* The `concat()` method joins multiple strings.
* Escape sequences add special formatting and characters to strings.
* `\t` creates a tab.
* `\n` creates a new line.
* `\\` represents a backslash.
* `indexOf()` finds the position of a substring.
* `indexOf()` is case-sensitive.
* `-1` means a substring was not found.
* Template literals use backticks.
* `${}` is used for string interpolation and expressions.
* JavaScript variable names should follow camelCase naming conventions.
