//1.  Arithmetic operators:-

//Addition :
let a= 30 , b =20;
let c = a+ b;
console.log("the total of a + b : ", c)

// Subtraction 
console.log(a - b)

 // Multiplication
console.log(a * b)

// Division
console.log(a / b)

 // Modulus (remainder)
console.log(a % b)

// Exponentiation (power)
console.log(a ** b)

console.log("-----------------------")

// 2. Assignment Operators:-

// a = b ; // Assign
// console.log(a)

// a += b;  // Add and assign
// console.log(a)

// a -= b; // Subtract and assign
// console.log(a)

// a *= b;// Multiply and assign
// console.log(a)

// a /= b; // Divide and assign
// console.log(a)

console.log("-------------")

// 3. Comparison Operators:-

// ==   // Equal (loose, allows type conversion)
// ===  // Strict equal (no type conversion)
// !=   // Not equal
// !==  // Strict not equal
// >    // Greater than
// <    // Less than
// >=   // Greater or equal
// <=   // Less or equal

// Example:
5 == "5"   // true
5 === "5"  // false


console.log("-----------------")

// 4. Logical Operators:-

// &&   // AND (both true)
// ||   // OR (either true)
// !    // NOT (negates)

// Example:
let age = 20;
let hasLicense = true;
console.log(age >= 18 && hasLicense); // true

console.log("--------------------")


// 5. Ternary Operator:-

// (A short version of if...else.)
// condition ? valueIfTrue : valueIfFalse

// Example:

let age1 = 18;
let msg = age1 >= 18 ? "Adult" : "Minor";
console.log(msg);//Adult

console.log("---------------------")

// Type Coercion & Conversion:-

// Type Coercion:
// (JavaScript automatically converts types when needed.)
console.log("5" + 1); // "51"  (string)
console.log("5" - 1); // 4     (number)

// Explicit Conversion:
// (You manually change the type.)
Number("10")   // 10
String(10)     // "10"
Boolean(0)     // false
Boolean("hi")  // true

// Template Literals (Backticks ` `):-
// (Let you embed variables inside strings easily:)
let myname = "Fahiz";
console.log(`Hello, ${myname}! How are you Today?`);

