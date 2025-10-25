const car ={
    brand: "Honda",
    model: "Civic",
    year: 1963,
    AvilabelColors: ["Red", "Mint Green", "yellow", "orange", "black"]
}

// to add new colors inside the AvilabelColors

//use Push() to add color at the end of the arry
car.AvilabelColors.push("Blue")

//use the unshift() to add the color at the beginning of an arry 
car.AvilabelColors.unshift("light Blue")

//to Add multiple colors at once 
car.AvilabelColors.push("gray","Purple")

// Replace a color (example: change “Yellow” to “Gold”)
car.AvilabelColors[3] = "Gold";

// Remove the last color
car.AvilabelColors.pop()

//To remove element at a Specific index use splice()
car.AvilabelColors.splice(3, 1)

car.brand = "Toyota"
// delete car.AvilabelColors
console.log(car.brand)
console.log(car.model)
console.log(car.year)
console.log(car.AvilabelColors)

