// -------- DtataTypes -------

// --> Primitive <--
let a = 10;
let b = a; //"b" gets a copy of "a"
b = 20

console.log(a) // "a" value wont change 
console.log(b) 

// ---> Reference <---
let obj1 = {name: "Fahiz"}
let obj2 = obj1 
obj2.name = "Ali" //it will change the value in obj1.name 
console.log(obj1.name) 

// ----- type conversation (implicit VS explicit) -------

//  --> Explicit Conversion <--

//string to number
let str = "123"
let num = Number(str)
console.log(num, typeof num)

// number to string 
let n = 50
let strNum = String(n)
console.log(strNum, typeof strNum)

// Boolean to Number
console.log(Number(true))
console.log(Number(false))

// 🔹 Other explicit methods:
// parseInt("123") → 123
// parseFloat("3.14") → 3.14
// Boolean(0) → false
// Boolean("Hello") → true


// ---> Implicit Conversion <--

// String Coercion
// (If one operand is a string, JS converts the other into a string:)
console.log("5" + 2); //(number converte to string )
console.log("5" + true) 
console.log("Hello" + null)

// Number Coercion
//( If we use operators like -, *, /, JS tries to convert strings to numbers:)

console.log("5" - 2);
console.log("10" * "2")
console.log("6"/ "2")

// Boolean Coercion
// (Some values automatically become true or false in conditions:)
if("hello"){
    console.log("Truthly")
}

if(0){
    console.log("wont run")
}

// --------🔹 Types of Operators in JavaScript --------

// 1. Arithmetic Operators (Math operations)
let num1 = 10, num2 =5
console.log(num1 + num2) //Addition
console.log(num1 - num2) //Subtraction
console.log(num1 * num2) //Multiplication
console.log(num1 / num2) //Division
console.log(num1 % num2) // Modulus -> remider
console.log(num1 ** num2) // Exponentiation -> x^y


// 2. Assignment Operators

let glass = 5
glass += 2 //same as glass = glass + 2 -> 7
glass -= 2 //same as glass = glass - 2 -> 5
glass *= 3 //same as glass = glass * 3 -> 15
glass /= 5 //same as glass = glass / 5 -> 3
glass %= 2 //same as glass = glass % 2 -> 1
glass **= 2 //same as glass = glass ** 2 -> 1

 
// 3. Comparison Operators
// (Used in conditions, return true or false.)
let n1 = 5 , n2 = "5"

console.log(n1 == n2) //(loose equality → value only)
console.log(n1 === n2) //(strict equality → value + type)
console.log(n1 != n2) 
console.log(n1 !== n2)
console.log(n1 > 3)
console.log(n1 < 10)
console.log(n1 >= 5)
console.log(n1 <= 4)

// 4. Logical Operators
// Used to combine conditions.

let g =true, f = false

console.log(g && f) //AND 
console.log(g || f) //OR
console.log(!g) //NOT

// 5. Unary Operators
// Operate on a single value.

