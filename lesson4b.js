// Anonymous functions in javascript.
// These are functions that exists without a name.

// Below is an example of such functions:
// The below function shall take the name of the variable they arte contained in.

const greet = function(){
    console.log("Hello there, hope your Monday is fine...")
}
greet();




// Below is another anonymous function
(function(){
    console.log("Welcome to the world of programming...")
})();

// Read on arrow function with and without parameters.
// research on modules in Javascript.

//Arrow functions provide a shorter syntax for writing functions and handle it differently from regular fuctions eg

//Arrow function without parameters

const great = () => {
    console.log("Hello");
};
great();


//Arrow function with one parameters
const square = x => x * x;
console.log(square(5));

//Javascript Modules
// Modules allow you to split code into separate files and reuse functionality.eg

const math = require('./math');
console.log(math.add(2,3));


