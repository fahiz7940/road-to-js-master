// conditional statements :-

// if statement:

// exp-1
// let age = 30;

// if(age> 18){
//     console.log("You can vote")
// }

// if (age <18){
//     console.log("you cannot vote")
// }

// exp-2
let mode ="light"
let color;

// if(mode === "dark"){
//     color = "black"
// }

// if(mode === "light"){
//     color = "light";
// }

// console.log(color);


// if-else staement :


// exp-1
if(mode === "dark"){
    color = "black"
}else{
    color = "light"
}
console.log(color)

// exp-2
let num = 10;

if(num%2 === 0){
    console.log("even")
}else{
    console.log("odd")
}

// if-else if statment :

// exp-1
if (mode === "dark"){
    color = "black"
}else if ( mode === "light"){
    color = "white"
}else if(mode === "green"){
    color = "green"
}else {
    color = "red"
}

console.log(color)