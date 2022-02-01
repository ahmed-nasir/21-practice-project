const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);


// Fibonacci with function

function fibonacci(num) {
    const fibo = [0, 1];
    if (typeof num != 'number') {
        return 'Please Enter a number';
    } else if (num < 2) {
        return 'Please Enter a positive number'
    }
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
let input = 7;
let output = fibonacci(input);
console.log('Fibonacci seris is :', output);