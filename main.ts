// using IIFE to remove ts error about block scoping
(function () {

//*** 4 - Declaring Variables (use let)

var number = 1;
let count = 2; // ES6

function doSomething() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

doSomething();

})();