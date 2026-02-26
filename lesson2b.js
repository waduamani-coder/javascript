// Comparison Operators
// They usually evaluate to a boolean answer
let number1 = 5
let number2 = 10
let number3 = 20

console.log(number1 == number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 != number2)
console.log(number1 != number1)

//Triple equal sign - Research in javascript
//Triple equal sign checks both value and data type it only returns true if both are exactly the same.
//Logical operators are used to evaluate two or more conditions and they also give a boolean answer
// Logical AND (&&) it evaluates to true if and only if both of the conditions are true
console.log((number1 < number2) && (number2 > number1) && (number3 > number2))

// Logical OR (||) - it evaluates to true if one of the conditions is true.
console.log((number1 > number2) || (number2 > number1))
// Logical NOT (!)- It is used to negate a condition
console.log(!(number1 < number2))