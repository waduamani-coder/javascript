// Arrow functions with parameters


const greet = (name) =>{
    console.log("Hello"+ name + "How have you been? I trust that you are good.")
}

greet("James");
greet("Joseph");

// Example 2
console.log("==========================")
// Below is a function to find the area of a circle
const pi = 3.142
const CircleArea = (pi, radius) =>{
    let area = pi * radius * radius
    console.log("The area of the circle is:"+ area + "cm\u00B2")
}

CircleArea(pi, 7);
CircleArea(pi, 28);

console.log("==========================")
// Come up with your own example of an arrow function that utilises 3 parameters

const TriangleArea =(base,height) =>{
    let area = 0.5 * base * height
    console.log("The area of the triangle is:"+ area + "cm\u00B2")
}
TriangleArea(5,10);
TriangleArea(6,2);