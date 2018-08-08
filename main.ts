// using IIFE to remove ts error about block scoping
(function () {

    // concept is Cohesion
    // things that are related should go together
    // we are using interface for data and method for drawing
    // both the structure and method should go together
    class Point {
        // fields
        x: number;
        y: number;

        // methods
        draw() {
            // ...
        }

        getDistance(another: Point) {
            // ...
        }
    }

    // class
    // groups variables (properties) and functions that are highly related

    // cant add function implementation to interfaces only contract of public methods or fields
    
})();