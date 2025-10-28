// Conditionals:-

// 1. if, else if, else:

let age = 22;

if(age >= 18){
    console.log("He is Adult")
}else if(age < 18){
    console.log("He is a miner")
}else{
    console.log("Plzz Enter a valid number")
}

console.log("-------------------------")

// 2. switch Statement:

let color = "red" ;

switch(color){
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Go");
        break;
    case "Yellow":
        console.log("get ready");
        break;
    default:
        console.log("Invalid Color");
}


// 3. Truthy & Falsy Values:

// JS treats some values as false when evaluated in conditions.

//Falsy Values :
// false
// 0
// ''//(empty string)
// null
// undefined
// NaN

// Everything Else is truthy:
// 'hello'
// 1,-1,etc
// ' '//(space)
// {},[]
// true
// any non-zery number 

// example:

if(""){
    console.log("This wont run");
}

if("Hello"){
    console.log("This will run")
}

console.log("------------------")

// 4. Nested Conditions:
//(putting one if inside another)
// ex:
let userName = "admin"
let password = "1234"

if(userName ==="admin"){
    if(password === "1234"){
        console.log("Login Successful")
    }else{
        console.log("Incorrect Username or password")
    }
}else{
    console.log("User not found")
}