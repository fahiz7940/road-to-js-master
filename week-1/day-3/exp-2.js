//nesting Switch inside if 


let isLoggedIn = true;
let userRole = "admin"

if(isLoggedIn){
    switch(userRole){
        case "admin":
            console.log("Welcome Admin")
            break;
        case "user":
            console.log("Welcome User")
            break;
        default:
            console.log("Unknown Role")
    }
}else{
    console.log("Please log in First.")
}


//nesting if inside switch

let status = "active";
let score = 85;

switch(status){
    case "active":
        if(score >= 80){
            console.log("Excellent active user")
        }else{
            console.log("Active but needs improvement");
        }
        break;
    case "inactive":
        console.log("User Inactive.");
        break;
    default:
        console.log("Unknown status")
}