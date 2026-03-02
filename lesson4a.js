// Fuctions with parameters
//Parameters are values that get passed as arguments when we invoke a function.
// They help us to create functions that can be reusable through out a program


function greeting(name){
    console.log("Hello", name,"How have you been?")
}

greeting("Amani Wadu")
greeting("John James")
greeting("Kiarie Lewis")

console.log("=======================")
// Below is a function with parametyers to calculate the sum of two numbers
function addition(number1, number2){
    sum = number1 + number2
    console.log("The sum of the number is: ", sum)
}


addition(45, 60)
console.log("=======================")
// by use of a function that accepts parameters,Calculate the area of triangle whose base is 20cm and height is 12cm

function area(base, height){
    let area = 0.5 * base * height;
    console.log("Area is:", area,"cm\u00B2");
}

area(20,12)


console.log("=======================")
// Find the simple interest given principle as 50000, rate as 5% and time as 8 years.

function simpleinterest(principle,rate,time){
    let interest = (principle*rate*time)/100
    console.log("The simple interest is:", interest,"ksh")
}

simpleinterest(50000,5,8)