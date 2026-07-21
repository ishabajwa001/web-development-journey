# JavaScript String Modification Methods

A beginner-friendly JavaScript program demonstrating commonly used string modification methods such as `replace()` and `repeat()`, along with string searching and extraction methods like `includes()` and `slice()`.

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
* String searching
* String extraction
* String replacement
* String repetition
* Case-sensitive matching
* Positive and negative indexes
* Template literals
* String interpolation
* Unicode emojis
* `ReferenceError`
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

### Returns

* `true` if the substring exists.
* `false` if the substring does not exist.

### Example

```js
let sentence = "JavaScript is a powerful language.";

console.log(sentence.includes("JavaScript"));
```

Output

```text
true
```

### Case Sensitivity

```js
sentence.includes("Ocean"); // true
sentence.includes("ocean"); // false
```

### Starting Index

```js
sentence.includes("digital", 23);
```

The search begins from index `23`.

### No Argument

```js
sentence.includes();
```

JavaScript searches for the string `"undefined"`.

---

# `slice()` Method

The `slice()` method extracts part of a string and returns it as a new string.

## Syntax

```js
string.slice(startIndex, endIndex);
```

The ending index is **excluded**.

### Example

```js
let language = "JavaScript";

console.log(language.slice(0, 4));
```

Output

```text
Java
```

### Negative Indexes

```js
language.slice(-6);
```

Output

```text
Script
```

### Rules

* The starting index is included.
* The ending index is excluded.
* Omitting the ending index slices until the end.
* Negative indexes count from the end of the string.
* If the starting index is greater than the ending index, an empty string is returned.

---

# `replace()` Method

The `replace()` method searches for a specified value and returns a new string with the first matching occurrence replaced.

## Syntax

```js
string.replace(searchValue, replacement);
```

### Returns

A **new string**.

The original string is **not modified**.

---

## Changing Text

```js
let message = "Hello, Mathew";

console.log(message.replace("Mathew", "John"));
```

Output

```text
Hello, John
```

---

## Correcting a Typo

```js
let sentence = "I love Javsript";

console.log(sentence.replace("Javsript", "JavaScript"));
```

Output

```text
I love JavaScript
```

---

## Updating a URL

```js
let url = "https://example.com/users/john123";

console.log(url.replace("john123", "jonny010"));
```

Output

```text
https://example.com/users/jonny010
```

---

## Replacing the First Occurrence

```js
let date = "21-07-2026";

console.log(date.replace("-", "/"));
```

Output

```text
21/07-2026
```

Only the first occurrence is replaced.

---

## Case Sensitivity

```js
let language = "JavaScript is fun";

console.log(language.replace("Javascript", "Python"));
```

Output

```text
JavaScript is fun
```

Nothing changes because `"Javascript"` and `"JavaScript"` are different strings.

---

## Multiple Occurrences

```js
let animals = "cat cat cat";

console.log(animals.replace("cat", "dog"));
```

Output

```text
dog cat cat
```

Only the **first** occurrence is replaced.

---

## Replacing Characters

```js
let username = "bill gates";

console.log(username.replace(" ", "_"));
```

Output

```text
bill_gates
```

---

## Password Masking

```js
let password = "xyz123";

console.log(password.replace(password, "******"));
```

Output

```text
******
```

---

## Updating a Shopping List

```js
let shoppingList = "Milk, Juice, Bread";

console.log(shoppingList.replace("Juice", "Eggs"));
```

Output

```text
Milk, Eggs, Bread
```

---

## Updating Multiple Values

```js
let profile = "Name : Mathew | Age : 20 | City : London";

profile = profile.replace("Mathew", "Mathew Perry");
profile = profile.replace("20", "24");
profile = profile.replace("London", "Tokyo");
```

Output

```text
Name : Mathew Perry | Age : 24 | City : Tokyo
```

---

## Empty Search String

```js
console.log("hello".replace("", "@"));
```

Output

```text
@hello
```

An empty string matches the beginning of the string.

---

## Missing Replacement

```js
let phrase = "I love Coding";

console.log(phrase.replace("Coding"));
```

Output

```text
I love undefined
```

The replacement value becomes `"undefined"` when omitted.

---

## No Arguments

```js
console.log(phrase.replace());
```

Output

```text
I love Coding
```

Nothing is replaced because no search value is provided.

---

# `repeat()` Method

The `repeat()` method creates a new string by repeating the original string a specified number of times.

## Syntax

```js
string.repeat(count);
```

### Basic Example

```js
console.log("*".repeat(5));
```

Output

```text
*****
```

### Player Profile Example

```js
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

### Numeric String

```js
"*".repeat("10");
```

The numeric string `"10"` is converted to the number `10`.

### String Concatenation

```js
"*".repeat("10" + 1);
```

`"10" + 1` becomes `"101"` because of string concatenation.

The string is repeated **101** times.

### No Argument

```js
"*".repeat();
```

Equivalent to:

```js
"*".repeat(0);
```

Returns an empty string.

### Boolean Values

```js
"#".repeat(true);
"#".repeat(false);
```

* `true` becomes `1`
* `false` becomes `0`

### Null

```js
"#".repeat(null);
```

`null` becomes `0`.

### Decimal Values

```js
"#".repeat(5.9);
```

Repeats **5** times because the decimal part is discarded.

### NaN

```js
"#".repeat(NaN);
```

Behaves like `repeat(0)`.

### Errors

```js
"#".repeat(-5);
```

```
RangeError
```

```js
"#".repeat(Infinity);
```

```
RangeError
```

```js
repeat(10);
```

```
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

(`Windows` key + semicolon `;` or period `.`)

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

> Emojis are Unicode characters, so JavaScript treats them like normal strings. They can be repeated, concatenated, and displayed just like any other string.

---

# Error Examples

```js
slice(3, 8);
```

```text
ReferenceError
```

```js
includes("hello");
```

```text
ReferenceError
```

```js
replace("love", "hate");
```

```text
ReferenceError
```

```js
repeat(10);
```

```text
ReferenceError
```

These methods belong to string objects and cannot be called as standalone functions.

---

# Summary

| Method       | Purpose                           | Return Value |
| ------------ | --------------------------------- | ------------ |
| `includes()` | Checks whether a substring exists | Boolean      |
| `slice()`    | Extracts part of a string         | New string   |
| `replace()`  | Replaces part of a string         | New string   |
| `repeat()`   | Repeats a string                  | New string   |

---

# Key Takeaways

* `includes()` returns a Boolean value.
* `includes()` is case-sensitive.
* `includes()` supports a starting index.
* `slice()` extracts part of a string.
* `slice()` supports negative indexes.
* `replace()` returns a new string without modifying the original string.
* `replace()` replaces only the first occurrence by default.
* `replace()` is case-sensitive.
* `repeat()` creates a new string by repeating the original string.
* `repeat()` accepts numeric strings and truncates decimal values.
* `repeat()` throws a `RangeError` for negative values and `Infinity`.
* JavaScript strings are immutable, so string methods always return new strings instead of modifying the original.
* Emojis are Unicode characters and work with JavaScript string methods.
