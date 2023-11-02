// define a function calculateAverage
// Define a global variable that holds an array of numbers 
// calculateAverage will take in the array of numbers as a parameter 
// Return the average of all the numbers in the array 
// Use 2 variables local to calculateAverage 
// Test your function by logging it’s returned value to the console

const numbersArray = [1,2,3,4,5];

function calculateAverage (numbers){
  let sum = 0;
  let count = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers [i];
    count++;
}
const average = sum / count;
return average;
}

const result = calculateAverage (numbersArray);
console.log ("The average is" + result);