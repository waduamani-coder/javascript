// String Data Type
// A string is a series/sequence of characters that are enclosed inside of quotation marks.
let name = "Amani Wadu"
console.log("The name is: ", name)
console.log(typeof (name))

// floating point: This is a number with decimal
let quantity = 35.5
console.log("The quantity of sugar bought is: ", quantity)
console.log(typeof (quantity))

// Boolean : It returns true or false
let isAdult = true
let isRegistered = false
console.log("Is James an Adult? ", isAdult)
console.log("Is he registered as a voter? ", isRegistered)

console.log(typeof (isAdult))


// undefined: This is a data type that has been declared but therer is no value that has been assigned to it.
let county;
console.log("The county is: ", county)


// null data type: It is a data type that contains null values
let username = null
console.log("What is the username? ", username)

//Assignment research and come up with examples on object and Array data types.Show how to access items of the object and of an array.


//An object is a collection of key-value pairs.Each value is accessed using its key eg

let student = {
    name: "Alice",
    age: 20,
    course: "computer Science",
    isEnrolled: true
};
console.log(student.name);
console.log(student.age);

console.log(student["course"]);
console.log(student["isEnrolled"]);


//An array is a collection of items stored in a specific order.Each item has an index number starting from 0

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits[0]);
console.log(fruits[2]);

console.log(fruits[fruits.length - 1]);