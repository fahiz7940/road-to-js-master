//Loops Overview
//-> A loop is used to run a block of code mutiple times automatically, insted of writing it again and again.


// ------------------->for loop:<---------------------------
//for loop is best when u know how many times u wants to repeat something.
//syntax:-
// for (initialization; CSSConditionRule; increment / decrement) {
  //code to run
// }

// ex:
for (let i = 1; i <= 5; i++) {
  console.log(i);
} //output : 1 2 3 4 5

//          ┌───────────────┐
//          │ Initialization│
//          └───────┬───────┘
//                  ↓
//            Check Condition
//                  ↓
//         ┌──────True──────┐
//         │                │
//    Run Code Block     Increment
//         │                │
//         └───────> Check Condition (repeat)
//                  ↓
//              False → Stop loop

// Incrementing (Counting Up)
for(let i=1; i<=10 ; i++){
    console.log(i)
}

// //Decrementing (counting Down)
for(let i = 10; i>= 1; i--){
    console.log(i)
}

//step by 2
for(let i = 0; i<= 10; i+=2){
    console.log(i)
}

// exp1:-
console.log("EXP-1")
// Sum of first 10 number 
let sum = 0;
for(let i = 1; i<= 10; i++){
    sum +=i
}
console.log("Sum =",sum)// output-> Sum = 55

// exp-2:-
console.log("EXP-2")
// print even number 
for(let i = 1; i<= 20; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}//Output: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// exp-3:-
console.log("EXp-3")
//Print characters of a string
let name = "Fahiz";
for(let i=0; i< name.length; i++){
    console.log(name[i])
}
// output:-
// F
// a
// h
// i
// z

// exp-4:-
console.log("EXP-4")
//break-> stop loop immediately
for(let i = 1; i<=10; i++){
    if(i=== 6)break;
    console.log(i)
}//Output: 1 2 3 4 5

//exp-5:-
console.log("exp-5")
//continue -> skip one iteration
for(let i = 1; i<=10; i++){
    if( i===6)continue;
    console.log(i)
}//Output: 1 2 3 4 5 7 8 9 10

// exp-6:-
console.log("EXP-6")
// Nested for loops
// (You can put one loop inside another — useful for patterns, tables, and grids.)
for(let i=1; i<= 3; i++){
    for(let j=1; j<= 3; j++){
        console.log(i,j)
    }
}
// output
// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3

