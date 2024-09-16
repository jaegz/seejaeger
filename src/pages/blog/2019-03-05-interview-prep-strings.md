---
templateKey: blog-post
title: 'The Technical Interview: Reversals & Palindromes'
date: 2019-03-05T20:06:10.853Z
description: >-
  A collection of string and integer algorithms to practice while preparing for
  a technical interview. Useful for the following roles: Frontend Engineer,
  Frontend Developer, Full Stack Developer, Full Stack Engineer, Software
  Engineer, etc. Keep in mind that these are not the only possible solutions.
tags:
  - interviews
  - algorithms
---
**Common String Questions**
- Palindromes - does the string read the same forwards and reverse?
- What is the most common character in a string?
- Anagrams - does string A have the same characters as string B?
- Does the given string have any repeated characters in it?

**String Reversal**

Write a function that when given a string, it returns the string in reverse.

[for...of loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) 

A classic for loop would work here as well, but you are less likely to make syntactical mistakes with the for...of loop and you don't need to convert the string to an array.
```js
function reverse(str) {
  let reversed = '';
  for (let char of str) {
    reversed = character + reversed;
  }
  return reversed;
}
```

[Array.prototype.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
```js
function reverse(str) {
  return str.split('').reverse().join('');
}
```
Array.prototype.reverse() + [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
```js
function reverse(str) {
  return [...str].reverse().join('');
}
```
Spread operator + [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
```js
function reverse(str) {
  return [...str].reduce((reversed, char) => char + reversed, '');
}
```

**Palindromes**

Write a function that determines if a string is a palindrome and returns a boolean. A palindrome is a string that reads the same forward and reverse.

Using any of the previous reversal methods
```js
function palindrome(str) {
  return str === [...str].reverse().join('');
}
```

[Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
```js
function palindrome(str) {
  return str === [...str].every((item, index) => {
    return item === str[str.length - i - 1];
  });
}
```

**Positive/Negative Integer Reversal**

Using [Number.prototype.toString()
](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) and [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) to switch types and [Math.sign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign) to handle positive and negative values

```js
function intReversed(n) {
  const nStr = n.toString();
  const nRev = [...nStr].reverse().join('');
  return parseInt(nRev) * Math.sign(n);
}
