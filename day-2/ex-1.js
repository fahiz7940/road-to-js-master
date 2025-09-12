// find even / odd using %

let number = 8;
console.log(number + " is" + (number % 2 === 0 ? " Even" : " odd"));

// Compare two numbers.
let a = 20;
let b = 15;

console.log(
  a === b
    ? $`${a} is equal to ${b}`
    : a > b
    ? `${a} is greater then ${b}`
    : `${a} is less then ${b}`
);

// Use ternary to check if age ≥ 18 → “Adult” else “Minor”.

let age = 21;

console.log(
    age >= 18 ? "You Are an Adult": "You Are a Minor"
)