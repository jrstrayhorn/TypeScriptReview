// using IIFE to remove ts error about block scoping
(function () {

    // better approach is to use an interface
    // use Pascal Naming convention.. each world is upper case
    interface Point {
        x: number,
        y: number
    }

    // solution 1 use inline annotation
    // ok for simple but problem is verbose
    // and you might want to use point object somewhere else

    // instead of let drawPoint = (point: {x: number, y: number})
    // use the interface
    // now cleaner and re-usable
    let drawPoint = (point: Point) => {
        // ... draw on screen
    }

    // this is cleaner but you could pass another object
    // that doesn't have the right parameters
    drawPoint({
        x: 1,
        y: 2
    })

    /// dont do let drawPoint = (x, y, a, b, c, d) no long properties
    // encapsulate inside an object and just pass the object
    
})();