// Comments:
// single-line comment
/* multi-line
   comment */

//    let a = 10;
//    console.log(a)

//    Variables: var, let, const

var x =5;
let y = 10;
const z = 8;

if (true){
    let y = 5;
    var x = 9;// do not use var  variabel in future.
    const z = 10;
    console.log("let" ,y)
    console.log("const",z) //it shows the output of let variabel which is inside the if statement
}

console.log("var",x)
console.log("let",y)//it shows the output of let variabel which is out side the if statement
console.log("const", z)


