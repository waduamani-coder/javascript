//Object data type:
// An object in javascript is a data type that stores data in form of key value pairs.

let person = {
    Name: "Amani Wadu",
    Age: 70,
    isRegistered : true
};

console.log("the details of the person is:", person)

// First method is by use of the square brackets
console.log(person["Age"])

// second method is by use of the dot (.) notation
console.log(person.Name)

// check the data type
console.log(typeof(person))

//What is the difference between a dictionary in python, an object in javascript and a json data when dealing with APIs

//Array data type:
//This referes to collection of items that are on indexes
fruits = ["Mango", "Pineapple", "Apple", "Banana", "Melon", "Lemon", "Grapes"]

console.log("The entire array of fruits is: ",fruits)
//To access the items of an array we use the index
console.log(fruits[3])

// you can alice items of an array
console.log(fruits.slice(2, 5))

