# JavaScript Dynamic Typing & `typeof` Operator

A beginner-friendly JavaScript exercise covering **dynamic typing, variable reassignment, the `typeof` operator, and JavaScript data types.**

## Files

| File | Description |
|------|-------------|
| `type-change.js` | Demonstrates JavaScript's dynamic typing by changing a variable's data type. |
| `type-of-operator.js` | Demonstrates how the `typeof` operator identifies different JavaScript data types. |

---

# What I Learned

## 1. Dynamic Typing (`type-change.js`)

JavaScript is a **dynamically typed language**, meaning a variable can hold values of different data types during program execution.

A variable's type is determined by the value assigned to it, and the same variable can later store a completely different type.

| Concept | Description | Example from Code |
|---------|-------------|-------------------|
| Dynamic Typing | Variables can change data types | `data = 23;` |
| String | Stores textual data | `data = "Tom";` |
| Number | Stores numeric values | `data = 23;` |
| Boolean | Stores `true` or `false` | `data = true;` |
| Null | Represents the intentional absence of a value | `data = null;` |
| Console Output | Displays values in the terminal | `console.log(data);` |

### Example

```javascript
let data = "Tom";
console.log(data);

data = 23;
console.log(data);

data = true;
console.log(data);

data = "g";
console.log(data);

data = null;
console.log(data);
```

> **Note:** Reassigning a variable changes the value and, in JavaScript, may also change its data type.

---

## 2. The `typeof` Operator (`type-of-operator.js`)

The `typeof` operator returns the data type of a value as a **string**.

It is commonly used to inspect variables while learning JavaScript or debugging programs.

| Data Type | `typeof` Result | Example from Code |
|-----------|-----------------|-------------------|
| Number | `"number"` | `typeof(age)` |
| String | `"string"` | `typeof(name)` |
| Boolean | `"boolean"` | `typeof(isUser)` |
| Undefined | `"undefined"` | `typeof(height)` |
| Null | `"object"` *(historical bug)* | `typeof(worth)` |

### Example

```javascript
let age = 23;
console.log(age + " : " + typeof(age));

let name = "Andrew";
console.log(name + " : " + typeof(name));

let isUser = true;
console.log(isUser + " : " + typeof(isUser));

let worth = null;
console.log(worth + " : " + typeof(worth));

let height;
console.log(height + " : " + typeof(height));
```

> **Important:** `typeof null` returns `"object"` because of a historical bug in JavaScript that has been preserved for backward compatibility.

---

# How to Run

Run either file using Node.js:

```bash
node type-change.js
```

```bash
node type-of-operator.js
```

# Key Takeaways

- JavaScript is a dynamically typed language.
- Variables can store different data types during execution.
- The `typeof` operator returns the type of a value as a string.
- `typeof null` returns `"object"` because of a historical JavaScript quirk.
- Variables declared without a value have the type `"undefined"`.
- `console.log()` is useful for displaying values and debugging programs.
- Understanding JavaScript data types is an essential foundation for learning more advanced JavaScript concepts.