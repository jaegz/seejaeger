---
templateKey: blog-post
title: 'Interview Prep: Strings'
date: 2019-03-05T20:06:10.853Z
description: >-
  A collection of common String manipulations to practice while preparing for a
  technical interview. Useful for the following roles: Frontend Engineer,
  Frontend Developer, Full Stack Developer, Full Stack Engineer, Software
  Engineer, Etc.
tags:
  - interview
---
**String Reversal**

[for...of loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
```js
function reverse(str){
  let reversed = '';

  for (let char of str) {
    reversed = character + reversed;
  }

  return reversed;
}
```

[Array.prototype.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
```js
function reverse(str){
  return str.split('').reverse().join('');
}
```
Array.prototype.reverse() + [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
```js
function reverse(str){
  return [...str].reverse().join('');
}
```
Spread operator + [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
```js
function reverse(str){
  return [...str].reduce((reversed, char) => char + reversed, '')
}
```
