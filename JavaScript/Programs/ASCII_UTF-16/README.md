# ASCII and UTF-16 in JavaScript

A beginner-friendly JavaScript program demonstrating ASCII, UTF-16 code units, `charCodeAt()`, and `String.fromCharCode()`.

## Files

| File              | Description                                                                             |
| ----------------- | --------------------------------------------------------------------------------------- |
| `charCodeAt.js`   | Demonstrates converting characters into UTF-16 code units using `charCodeAt()`          |
| `fromCharCode.js` | Demonstrates converting UTF-16 code units into characters using `String.fromCharCode()` |

---

## What I Learned

### ASCII and UTF-16

ASCII assigns numeric values to characters.

For example:

```text
A     → 65
a     → 97
@     → 64
Space → 32
```

JavaScript strings use Unicode, and their code units are based on UTF-16. The first 128 Unicode characters match ASCII values.

### `charCodeAt()`

The `charCodeAt()` method returns the UTF-16 code unit of a character at a specified index.

```javascript
"A".charCodeAt(0); // 65
```

The argument is the **index of the character**. JavaScript uses zero-based indexing.

### `String.fromCharCode()`

The `String.fromCharCode()` method converts UTF-16 code units into characters.

```javascript
String.fromCharCode(65); // A
```

It can also accept multiple code units:

```javascript
String.fromCharCode(72, 101, 108, 108, 111);
// Hello
```

### Relationship

```text
Character
    ↓ charCodeAt()
UTF-16 code unit
    ↓ String.fromCharCode()
Character
```

---

## How to Run

```bash
node charCodeAt.js
node fromCharCode.js
```

---

## Key Takeaways

* ASCII assigns numbers to characters.
* JavaScript strings use Unicode with UTF-16-based code units.
* `charCodeAt()` converts a character into a UTF-16 code unit.
* `String.fromCharCode()` converts UTF-16 code units into characters.
* `charCodeAt()` uses zero-based indexing.
* Both methods work with UTF-16 code units.
