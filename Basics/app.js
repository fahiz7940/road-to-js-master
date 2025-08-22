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