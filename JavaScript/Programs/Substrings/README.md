# JavaScript String Methods

A beginner-friendly collection of JavaScript programs demonstrating commonly used JavaScript string methods.

## Files

| File                 | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| `includes-method.js` | Demonstrates checking whether a string contains a substring using `includes()` |
| `slice.js`           | Demonstrates extracting portions of strings using `slice()`                    |
| `replace.js`         | Demonstrates replacing parts of strings using `replace()`                      |
| `repeat.js`          | Demonstrates repeating strings using `repeat()`                                |

---

# Concepts Covered

* `String.prototype.includes()`
* `String.prototype.slice()`
* `String.prototype.replace()`
* `String.prototype.repeat()`
* Substring searching
* String extraction
* String replacement
* String repetition
* Case-sensitive matching
* Positive and negative indexes
* String interpolation
* Template literals
* Unicode emojis
* `ReferenceError`
* `TypeError`
* `RangeError`

---

# `includes()` Method

The `includes()` method checks whether a string contains a specific substring.

## Syntax

```js
string.includes(searchValue);
```

or

```js
string.includes(searchValue, startIndex);
```

## Returns

* `true` if the substring is found.
* `false` if the substring is not found.

## Example

```js
let sentence = "JavaScript is a powerful language.";

console.log(sentence.includes("JavaScript"));
```

Output

```text
true
```

## Case Sensitivity

`includes()` is **case-sensitive**.

```js
let sentence = "The Ocean is full of amazing marine life.";

console.log(sentence.includes("Ocean"));
console.log(sentence.includes("ocean"));
```

Output

```text
true
false
```

## Starting Index

The second argument specifies where the search begins.

```js
let sentence = "Cybersecurity protects digital systems.";

console.log(sentence.includes("digital", 23));
console.log(sentence.includes("digital", 24));
```

Output

```text
true
false
```

## No Argument

```js
console.log(sentence.includes());
```

JavaScript searches for the string `"undefined"`.

---

# `slice()` Method

The `slice()` method extracts part of a string and returns it as a new string.

## Syntax

```js
string.slice(startIndex, endIndex);
```

The ending index is **not included**.

## Example

```js
let language = "JavaScript";

console.log(language.slice(0, 4));
```

Output

```text
Java
```

## Negative Indexes

Negative indexes count from the end of the string.

```js
let language = "JavaScript";

console.log(language.slice(-6));
```

Output

```text
Script
```

## Important Rules

* The starting index is included.
* The ending index is excluded.
* Omitting the ending index slices until the end.
* If the starting index is greater than the ending index, an empty string is returned.

---

# `replace()` Method

The `replace()` method replaces part of a string and returns a new string.

## Syntax

```js
string.replace(searchValue, replacement);
```

## Example

```js
let message = "Hello, Mathew";

console.log(message.replace("Mathew", "John"));
```

Output

```text
Hello, John
```

## Common Uses

* Correct spelling mistakes
* Update usernames
* Modify URLs
* Replace dates
* Format text

---

# `repeat()` Method

The `repeat()` method creates a new string by repeating the original string a specified number of times.

## Syntax

```js
string.repeat(count);
```

## Basic Example

```js
console.log("*".repeat(5));
```

Output

```text
*****
```

## Player Profile Example

```js
let playerName = "Shadow Hunter";
let level = 5;
let health = 3;

console.log(`Level : ${"⭐".repeat(level)}`);
console.log(`Health : ${"💙".repeat(health)}`);
```

Output

```text
Level : ⭐⭐⭐⭐⭐
Health : 💙💙💙
```

## Numeric String

If the count is a numeric string, JavaScript converts it to a number.

```js
console.log("*".repeat("10"));
```

Output

```text
**********
```

## String Concatenation

```js
console.log("*".repeat("10" + 1));
```

`"10" + 1` becomes `"101"` because of string concatenation.

The string is repeated **101 times**.

## No Argument

```js
console.log("*".repeat());
```

Equivalent to:

```js
console.log("*".repeat(0));
```

Returns an empty string.

## Boolean Values

```js
console.log("#".repeat(true));
console.log("#".repeat(false));
```

Output

```text
#

```

* `true` becomes `1`
* `false` becomes `0`

## Null

```js
console.log("#".repeat(null));
```

`null` becomes `0`, so an empty string is returned.

## Decimal Values

```js
console.log("#".repeat(5.9));
```

Output

```text
#####
```

The decimal part is discarded.

## NaN

```js
console.log("#".repeat(NaN));
```

Behaves like:

```js
repeat(0)
```

Returns an empty string.

## Errors

Negative numbers are not allowed.

```js
"#".repeat(-5);
```

```text
RangeError
```

Infinity is also invalid.

```js
"#".repeat(Infinity);
```

```text
RangeError
```

Calling `repeat()` without a string object causes an error.

```js
repeat(10);
```

```text
ReferenceError
```

---

# Emoji Tip (Windows)

The examples in `repeat.js` use emojis such as ⭐ and 💙.

On **Windows**, open the emoji picker by pressing:

```text
Windows + ;
```

or

```text
Windows + .
```

(`Windows` key + semicolon **`;`** or period **`.`**)

Then click an emoji or search for one by typing its name.

Example:

```js
console.log("⭐".repeat(5));
console.log("💙".repeat(3));
```

Output

```text
⭐⭐⭐⭐⭐
💙💙💙
```

> Emojis are Unicode characters, so JavaScript treats them like normal strings. You can use them with string methods such as `repeat()`, concatenate them with other strings, and display them in the console or web pages.

---

# Error Examples

## ReferenceError

```js
slice(3, 8);
```

```js
includes("hello");
```

```js
repeat(10);
```

These methods belong to string objects and cannot be called as standalone functions.

---

# Summary

| Method       | Purpose                           | Returns    |
| ------------ | --------------------------------- | ---------- |
| `includes()` | Checks whether a substring exists | Boolean    |
| `slice()`    | Extracts part of a string         | New string |
| `replace()`  | Replaces part of a string         | New string |
| `repeat()`   | Repeats a string                  | New string |

---

# Key Takeaways

* `includes()` returns a Boolean value.
* `includes()` is case-sensitive.
* `includes()` supports a starting index.
* `slice()` extracts part of a string.
* `slice()` supports negative indexes.
* The ending index in `slice()` is excluded.
* `replace()` returns a new string without modifying the original string.
* `repeat()` creates a new string by repeating the original string.
* `repeat()` accepts numeric strings and truncates decimal values.
* `repeat()` throws a `RangeError` for negative values and `Infinity`.
* JavaScript strings are immutable, so all string methods return new strings instead of modifying the original.
* Emojis are Unicode characters and can be used just like any other string in JavaScript.
