// Data types
// js as primitive and non-primitive data types


// primitive Data types :-
// String :

let name = "Fahiz";
let message = 'Im learing JavaScript';
let sent = `My name is ${name} and ${message}` // Use backticks (``) when u want to insert a variabes inside a String.
console.log(typeof sent)
console.log(sent)


//Number :

let num1 = 10;
let num2 = 5.16;
let total = num1 + num2;
console.log(typeof total)
console.log(total)

// Boolean :

let isonline = true;
let hasAccess = false;
console.log(typeof isonline)
if(isonline){
    console.log("User is Online")
}

//Undefined : (Means a variable is declared but not assigned a value)

let car;
console.log(car)

// null : (Represent intentional absencs of any object / value ) 
// ex: u create a variable and give it a null value if u want to assign a value for that variable later
let user = null;

//Symbol : (Each Symbol is unique identifiers)

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(typeof id1)
console.log(id1 === id2);

//BigInt :

let big = 82181726912639281263125382753217131263129n;
console.log(typeof big)
console.log(big)

console.log("-----------------------")

// Non primitive data types :-

//object:

const person ={
    name: "fahiz",
    age:21,
    isStudent: true
};
console.log(typeof person)
console.log(person.name)
console.log(person["age"])

//Array : 

const fruits = ["apple", "banana","orange"];
console.log(typeof fruits, "(The array is also an object)")
console.log(fruits[0])
console.log(fruits.length)

// Function : A block of reusable code (also an object in JS).

function greet(){
    console.log("Hello!")
}
console.log(typeof greet)
greet();