// Grade Calculator

let mark = 85;
let grade = mark >= 100 ? "A+":
            mark >= 85 ? "A" :
            mark >= 70 ? "B+":
            mark >= 60 ? "B":
            mark >= 50 ? "C+":
            mark >= 30 ? "c": "Fail";
console.log(`your Grade is: ${grade}`)