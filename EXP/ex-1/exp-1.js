// ---------------- Number ------------------

// Q1:- Create two number variables and find their sum, difference, product, and quotient.
let num1 = 10;
let num2 = 5;

console.log("Sum of num1 + num2 =", num1 + num2);
console.log("difference of num1 - num2 = ", num1 - num2);
console.log("product of num1 * num2 =", num1 * num2);
console.log("quotient of num1 / num2 = ", num1 / num2);

// Q2:- Check if a number is even or odd.

let num = 10;
if(num % 2 === 0){
    console.log("The number is even")
}else{
    console.log("The number is odd")
}

// Q3:- Find the remainder when one number is divided by another.
let no1 = 10;
let no2 = 20;
let result = no1 % no2;
console.log(result)

// Q4:- Convert a string "123" into a number and print its type.

let str = "123"
console.log(str)
console.log(typeof str)
str = parseInt("123");
console.log(str)
console.log(typeof str)

// Q5:- Round a decimal number to the nearest integer.

let n01 = 7.6;
let roundedNum = Math.round(n01);
console.log(roundedNum)