// using IIFE to remove ts error about block scoping
(function () {

    // old school
    let log = function(message) {
        console.log(message);
    }

    // don't need curly branches / block if only one line
    // always include parenthesis makes it more readable
    let doLog = (message) => console.log(message);
    
})();