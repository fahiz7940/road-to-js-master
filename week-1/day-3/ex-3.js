// Simple ATM Logic

let pin = 1234;
let enteredPin = 1234;
let balance = 50000;
let amount = 10000;

if(pin === enteredPin){
    if(amount <= balance){
        console.log(`Withdrawal of  ${amount} Successful`)
        balance -= amount;
        console.log(`Remaining balance: ${balance}`)
    }else{
        console.log("Insufficient balance")
    }
}else{
    console.log("Invalid PIN")
}