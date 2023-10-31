// Exercise: Array Sum and Average

const numbers = [10, 15, 20, 25, 30];
let sum = 0;
for (let i=0; i < numbers.length; i ++) {
    sum += numbers [i];
}
const average = sum / numbers.length;
console.log ("Sum: " + sum);
console.log ("Average: " + average);