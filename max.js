// compaire with two 
/*
let suny = 450;
let nafiz = 3000;
if (suny > nafiz) {
    console.log(suny, " is max.");
} else {
    console.log(nafiz, " is max.");
}

*/

// compaire with three 

/*
let suny = 500;
let nafiz = 400;
let ontu = 800;

if (suny > nafiz && suny > ontu) {
    console.log("Suny is max");
} else if (nafiz > suny && nafiz > ontu) {
    console.log("nafiz is max");
} else {
    console.log("Ontu is max.");
}

*/

// compare with Function

/*
function getMax(peraMeter1, peraMeter2) {
    if (peraMeter1 > peraMeter2) {
        return peraMeter1;
    } else {
        return peraMeter2;
    }
}
let suny = 390;
let nafiz = 300;
const result = getMax(suny, nafiz);
console.log("max number is", result);

*/


// compare with three 


/*
// create a function that takes three numbers as input parameter and returns you the largest number of the three.


function getMaxAmong(pera1, pera2, pera3) {
    if (pera1 > pera2 && pera1 > pera3) {
        return pera1;
    } else if (pera2 > pera1 && pera2 > pera3) {
        return pera2;
    } else {
        return pera3;
    }
}

shamim = 450;
shanto = 600;
karim = 350;

const maxNum = getMaxAmong(shamim, shanto, karim);
console.log("Large Number is ", maxNum);

*/

// task  wirte a fucntion to find the smallest of three numbers.

function findMin(pera1, pera2, pera3) {
    if (pera1 < pera2 && pera1 < pera3) {
        // console.log(pera1);
        return pera1;
    } else if (pera2 < pera1 && pera2 < pera3) {
        // console.log(pera2);
        return pera2;
    } else {
        // console.log(pera3)
        return pera3;
    }
}

let roni = 340;
let saidur = 450;
let piash = 500;
const smallestNUm = findMin(roni, saidur, piash);
console.log("The smallest number is : ", smallestNUm);