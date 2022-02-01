// Swap value
let first = 5;
let second = 7;
console.log(first, second);
// Temporery mathod
// var temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// Destructuring method
[first, second] = [second, first];
console.log("Destructing", first, second);