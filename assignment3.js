// Write a for loop to print all odd numbers from 1 to 19
for (let i = 1; i<= 19; i++){
    console.log(i);
}

// Write a for loop to count down from 10 to 1 and print the numbers in the console
for (let i = 10; i>= 1; i--){
    console.log(i);
}

//Write a for loop to find the largest number in the array:[10,20,4,45,99,1]
let numbers = [10,20,4,45,99,1];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if(numbers[i] > largest) {
        largest = numbers[i]
    }
}
console.log("Largest number;", largest);

// Write a while loop to print the multiplication table of 5 from 5*1 to 5*10

for (let i = 1; i <= 10; i++){
    let result = 5 * i;
    console.log("5 x"+ i +"=" + (5*i));
}

// last assignment
let income =140
let contribution;
if (income < 6000){
    contribution = 150;
}
else if (income <=7999){
    contribution = 300;
}
else if (income <= 11999){
    contribution = 400;
}
else if (income <=14999){
    contribution = 500;
}
else if (income <= 19999){
    contribution = 600;
}
else if (income <= 24999){
    contribution = 750;
}
else if (income <= 29999){
    contribution = 850;
}
else if (income <= 49999){
    contribution = 1000;
}
else if (income <= 99999){
    contribution = 1500;
}
else{
    contribution = 2000;
}
console.log("Monthly contribution is Ksh " + contribution);