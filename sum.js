/*
let arr = [23, 43, 13, 54, 89];
let sum = 0;
for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    console.log(sum);
}
*/


//sum with function

function arraySum(peram) {
    let sum = 0;
    for (i = 0; i < peram.length; i++) {
        sum = sum + peram[i];
    }
    return sum;
}
let arr = [23, 32, 43, 13, 56]
const sumOfArray = arraySum(arr);
console.log(sumOfArray);
