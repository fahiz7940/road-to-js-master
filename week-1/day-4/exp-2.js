// while loop :-
// the best way to use while loop , when u dont know exactly how many times it should repeat , it keeps running while the condition is true.

//Syntax:
// while(Condition){
//     code to run 
// }
// => As long as this condition is true , keep runnung this block of code. 

//Basic Example:-

let i = 1;

while (i <= 5){
    console.log(i);
    i++;
}

// exp-1:-
console.log("EXP-1")
//print even numbers(1-10)
 
let z = 1;

while(z <= 10){
    if(z% 2 === 0){
        console.log(z)
    }
    z++;
}

//exp-2:-
console.log("EXP-2")
//Sum of Numbers(1-10)
let x = 1;
let sum = 0;
while(x <= 10){
    sum += x ;
    x++;
}

console.log("Sum = ",sum)