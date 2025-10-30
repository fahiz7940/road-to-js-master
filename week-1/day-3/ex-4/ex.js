let username = "Fahiz";
let password = "12345";
let userRole = "editor";

// login check

if (username === "Fahiz" && password === "12345") {
  console.log("Login Successful");

  //role based access
  switch (userRole) {
    case "admin":
      console.log("welcome Admin, you have full control over the system");
      break;
    case "editor":
      console.log(
        "Welcome Editor , you only have the access to update the content."
      );
      break;
    case "viewer":
      console.log("Welcome user, you only have the access to view the content");
      break;
    default:
      console.log("Access denied: unknown Role.");
  }
} else {
  console.log("Login Failed, Incorrect username or password.");
}
