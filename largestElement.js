function largestNumber(number) {
    let largest = number[0];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

let ages = [142, 43, 45, 24, 76, 54, 112];
let oldest = largestNumber(ages);
let oldest2 = largestNumber([-13, -21, -5, -9]);

console.log(oldest2);


// find the smallest number of an array

function smallestNum(num) {
    let smallest = num[0];
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (element < smallest) {
            smallest = element;

        }
    }
    return smallest;
}

let friendesAges = [3, 6, 1, 8, 3, 5]
let result = smallestNum(friendesAges);
console.log(result);
