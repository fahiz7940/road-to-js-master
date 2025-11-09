// 1. String length
let text = "Hello World";
console.log("1. length:", text.length); // 11
// ➤ Explanation: The .length property returns the total number of characters in a string.


// 2. charAt()
console.log("2. charAt:", text.charAt(0)); // "H"
// ➤ Explanation: .charAt(index) returns the character at the given position. Index starts from 0.


// 3. charCodeAt()
console.log("3. charCodeAt:", text.charCodeAt(0)); // 72
// ➤ Explanation: .charCodeAt(index) gives the UTF-16 code of the character at the specified index.


// 4. codePointAt()
console.log("4. codePointAt:", text.codePointAt(1)); // 101
// ➤ Explanation: .codePointAt(index) returns the Unicode code point value (works better for emoji and symbols).


// 5. concat()
let greet = "Hello";
let place = "World";
console.log("5. concat:", greet.concat(" ", place)); // "Hello World"
// ➤ Explanation: .concat() joins (concatenates) two or more strings into one.


// 6. at()
console.log("6. at:", text.at(-1)); // "d"
// ➤ Explanation: .at(index) returns a character from the end if you use a negative index.


// 7. [ ]
console.log("7. []:", text[1]); // "e"
// ➤ Explanation: You can access string characters like arrays using square brackets.


// 8. slice()
console.log("8. slice:", text.slice(0, 5)); // "Hello"
// ➤ Explanation: .slice(start, end) extracts a part of the string. End index is not included.


// 9. substring()
console.log("9. substring:", text.substring(6, 11)); // "World"
// ➤ Explanation: .substring(start, end) is similar to slice, but it swaps arguments if start > end.


// 10. substr() (Deprecated)
console.log("10. substr:", text.substr(6, 5)); // "World"
// ➤ Explanation: .substr(start, length) extracts a part of the string based on length (⚠️ deprecated in modern JS).


// 11. toUpperCase()
console.log("11. toUpperCase:", text.toUpperCase()); // "HELLO WORLD"
// ➤ Explanation: Converts all characters to uppercase.


// 12. toLowerCase()
console.log("12. toLowerCase:", text.toLowerCase()); // "hello world"
// ➤ Explanation: Converts all characters to lowercase.


// 13. isWellFormed()
let malformed = "A\uD800"; // Invalid UTF-16 sequence
console.log("13. isWellFormed (text):", text.isWellFormed()); // true
console.log("13. isWellFormed (malformed):", malformed.isWellFormed()); // false
// ➤ Explanation: .isWellFormed() checks if a string has valid Unicode characters (returns true or false).


// 14. toWellFormed()
console.log("14. toWellFormed:", malformed.toWellFormed()); 
// "A�"
// ➤ Explanation: .toWellFormed() fixes invalid characters by replacing them with the replacement character "�".


// 15. trim()
let spaced = "   Hello World   ";
console.log("15. trim:", spaced.trim()); // "Hello World"
// ➤ Explanation: .trim() removes whitespace from both the start and end of a string.


// 16. trimStart()
console.log("16. trimStart:", spaced.trimStart()); // "Hello World   "
// ➤ Explanation: .trimStart() removes spaces only from the beginning.


// 17. trimEnd()
console.log("17. trimEnd:", spaced.trimEnd()); // "   Hello World"
// ➤ Explanation: .trimEnd() removes spaces only from the end.


// 18. padStart()
let num = "5";
console.log("18. padStart:", num.padStart(4, "0")); // "0005"
// ➤ Explanation: .padStart(targetLength, padString) adds characters at the beginning to reach the given length.


// 19. padEnd()
console.log("19. padEnd:", num.padEnd(4, "0")); // "5000"
// ➤ Explanation: .padEnd(targetLength, padString) adds characters at the end to reach the given length.


// 20. repeat()
console.log("20. repeat:", "ha".repeat(3)); // "hahaha"
// ➤ Explanation: .repeat(count) repeats a string the given number of times.


// 21. replace()
let quote = "I like cats";
console.log("21. replace:", quote.replace("cats", "dogs")); // "I like dogs"
// ➤ Explanation: .replace(oldValue, newValue) replaces the first occurrence of a match.


// 22. replaceAll()
let sentence = "I love apples, apples are tasty";
console.log("22. replaceAll:", sentence.replaceAll("apples", "mangoes"));
// "I love mangoes, mangoes are tasty"
// ➤ Explanation: .replaceAll() replaces *all* occurrences of a match in the string.


// 23. split()
let csv = "apple,banana,grape";
console.log("23. split:", csv.split(",")); // ["apple", "banana", "grape"]
// ➤ Explanation: .split(separator) splits the string into an array using the given separator.
