# JavaScript String Search and Slice Methods

A beginner-friendly JavaScript program demonstrating the `includes()` and `slice()` string methods.

## Files

| File                 | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| `includes-method.js` | Demonstrates checking whether a string contains a substring using `includes()` |
| `slice.js`           | Demonstrates extracting portions of strings using `slice()`                    |

## Concepts Covered

* `String.prototype.includes()`
* `String.prototype.slice()`
* Substring searching
* Case-sensitive string matching
* Starting index with `includes()`
* Positive and negative indexes
* Exclusive ending indexes
* String interpolation with template literals
* `ReferenceError` and `TypeError`

## `includes()` Method

The `includes()` method checks whether a string contains a specific substring.

```js
string.includes(searchValue);
```

It returns:

* `true` if the substring is found
* `false` if the substring is not found

### Example

```js
let sentence = "JavaScript is a powerful language.";

console.log(sentence.includes("JavaScript"));
// true
```

## Case Sensitivity

The `includes()` method is **case-sensitive**.

```js
sentence.includes("Ocean"); // true
sentence.includes("ocean"); // false
```

`Ocean` and `ocean` are treated as different strings because JavaScript cares deeply about capitalization. Naturally.

## Starting Index

`includes()` can accept a second argument that specifies the index where the search should begin.

```js
sentence.includes("digital", 23);
```

The search starts from index `23`.

### Syntax

```js
string.includes(searchValue, startIndex);
```

## No Argument

Calling `includes()` without an argument searches for the string `"undefined"`.

```js
console.log(sentence2.includes());
// false
```

## `slice()` Method

The `slice()` method extracts a section of a string and returns it as a new string.

### Syntax

```js
string.slice(startIndex, endIndex);
```

The `endIndex` is **not included**.

### Example

```js
str1.slice(0, 5);
```

This extracts characters from index `0` up to, but not including, index `5`.

## Negative Indexes

Negative indexes count from the end of the string.

* `-1` represents the last character
* `-2` represents the second-last character

```js
str5.slice(-16);
```

This starts slicing from index `-16` and continues to the end of the string.

## Important `slice()` Rules

* The starting index is included.
* The ending index is excluded.
* If the starting index is greater than the ending index, `slice()` returns an empty string.
* Calling `slice()` without an end index slices until the end of the string.
* Calling `slice()` as a standalone function causes an error because `slice` is not defined as a standalone function.

## Error Examples

```js
// ReferenceError
// console.log(slice(3, 8));
```

The `slice()` method must be called on a string.

```js
// ReferenceError
// console.log(includes("hello"));
```

The `includes()` method also belongs to a string object and cannot be called as a standalone function.

## Example Output

```text
Sentence : JavaScript is a powerful language.
Contains JavaScript : true

Sentence : The Ocean is full of amazing marine life
Contains Ocean : true
Contains ocean : false

Sentence : Cybersecurity protects digital systems from attacks.
Contains digital at index 23 : true
Contains digital at index 24 : false
```

## Summary

| Method       | Purpose                           | Return Value      |
| ------------ | --------------------------------- | ----------------- |
| `includes()` | Checks whether a substring exists | `true` or `false` |
| `slice()`    | Extracts part of a string         | A new string      |

### Key Takeaways

* `includes()` returns a Boolean value.
* `includes()` is case-sensitive.
* `includes()` can search from a specific starting index.
* `slice()` extracts part of a string.
* The ending index in `slice()` is excluded.
* Negative indexes count from the end of the string.
