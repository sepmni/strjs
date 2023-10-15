# @isepdev/strjs

A simple npm package for string manipulation in TypeScript.

## Installation

You can install this package using npm or yarn:

```bash
npm install @isepdev/strjs
# or
yarn add @isepdev/strjs
```

## Usage

```javascript
const { isString, getLength, replaceWith, isUUID4, genRandStr, genUUID4, revStr, truncStr, capFirstL, capStr } = require('@isepdev/strjs');

// Check if a variable is a string
const isStr = isString('Hello, World'); // true

// Get the length of a string
const length = getLength('Hello, World'); // 12

// Replace a substring in a string
const replaced = replaceWith('Hello, World', 'World', 'Universe'); // 'Hello, Universe'

// Check if a string is a UUIDv4
const isUUID = isUUID4('550e8400-e29b-41d4-a716-446655440000'); // true

// Generate a random string
const randomStr = genRandStr(10, true, true, true); // Random string with letters, numbers, and special characters

// Generate a random UUIDv4
const randomUUID = genUUID4(); // Random UUIDv4

// Reverse a string
const reversedStr = revStr('Hello, World'); // 'dlroW ,olleH'

// Truncate a string with an ellipsis
const truncatedStr = truncStr('This is a long string', 10); // 'This is a...'

// Capitalize the first letter of a string
const capitalizedFirst = capFirstL('hello, world'); // 'Hello, world'

// Convert a string to uppercase
const uppercasedStr = capStr('this is in uppercase'); // 'THIS IS IN UPPERCASE'
```

## License

This package is licensed under the MIT License.

## Contribution

Feel free to contribute by opening issues or pull requests on the [GitHub repository](https://github.com/isepdev/strjs).

## Author

Sepehr Mohseni - https://www.linkedin.com/in/isepdev - sepmoh.97@gmail.com