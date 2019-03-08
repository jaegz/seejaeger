---
templateKey: blog-post
title: 'The Technical Interview: Solving Anagrams with Object Maps'
date: 2019-03-07T00:06:11.530Z
description: A collection of two different approaches for solving anagram questions.
tags:
  - interviews
  - algorithms
---
**What are anagrams?**

Anagrams are different words that are composed of the same characters.

**Comparing Two Strings**

If you are only comparing 2 strings to determine if they are anagrams and returning true or false, then a sorted comparison is your quickest solution

```js
function sortStringHelper(str) {
  return [...str].sort().join('');
}
function anagram(strA, strB) {
  return sortStringHelper(strA) === sortStringHelper(strB);
}
anagram('lions', 'loins') // True
```

_Hint: Clean a string with:_


`str.replace(/[^\w]/g, '').toLowerCase();`

**Character Maps**

This can also be solved by using what is known as a character map, which is a record of each character and its occurrence. For example, a map of the word food:

```js
const characterMap = {
  f: 1,
  o: 2,
  d: 1
}
```

So to solve for an anagram, you would build out two characterMaps and compare them. 

```js
function buildCharMap(string) {
  const charMap = {};

  for (let character of string) {
    if (!charMap[character]) {
      charMap[character] = 1;
    } else {
      charMap[character]++;
    }
  }

  return charMap;
}

function anagram(strA, strB) {
  const charMapA = buildCharMap(strA); 
  const charMapB = buildCharMap(strB);

  // if the number of characters or keys are different they are not anagrams
  if (Object.keys(charMapA).length !== Object.keys(charMapB)) {
    return false;  
  }

  // otherwise compare the maps
  for (let character in charMapA) {
    if(charMapA[character] !== charMapB[character]) {
      return false;
    }
  }

  // otherwise, we have anagrams
  return true; 
}
```

**This approach begins to shine, when solving more complex anagram problems**

For example: 
1. Find all anagrams in an array of strings.
2. Return groups of anagrams from an array of strings.

**Build an object that has the following attributes**
- keys: sorted characters
- values: array of words or anagrams of that character set

```js
function find_anagrams(arr) {
  const sortMap = {};
  const anagrams = [];
  //const anagramGroups = [];
  
  for (let word of arr) {
    const sortedKey = word.split('').sort().join('');

    if(!sortMap[sortedKey]) {
      sortMap[sortedKey] = [word]
    } else {
      sortMap[sortedKey].push(word)
    }
  }

  /* now the map is built
     return sortMap;
    {
      "aelpst":["pastel","staple"],
      "aaabnn":["banana"],
      "iikw":["kiwi"],
      "aelt":["late","tale"]
    }
    so now all we must do is iterate the map
    and return the arrays larger than 1
    this is because if there is only 1, then there are no anagrams.
  */
  
  for (let key in sortMap) {
    if(sortMap[key].length > 1) {
      anagrams.push(...sortMap[key]);
      //if you want them grouped, then use anagramGroup.push(sortMap[key]);
    }
  }
  return anagrams;
}
```

**Character maps can also be used to solve these related questions:**

1. What is the most common character in a string?
2. Does the string have repeated characters?

```js
let maxChar = '';
let maxCharVal = 0;

for (let char in charMap) {
  if (charMap[char] > maxCharVal) {
    maxChar = char;
    maxCharVal = charMap[char];
  }
}
```
