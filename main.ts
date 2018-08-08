// using IIFE to remove ts error about block scoping
(function () {

    // class
    class Point {
        x: number;
        y: number;

        draw() {
            console.log(`X: ${this.x}, Y: ${this.y}`);
        }

        getDistance(another: Point) {
            // ...
        }
    }

    // object
    let point = new Point();     // how to instantiate object
    point.x = 1;
    point.y = 2;
    point.draw();
    
})();