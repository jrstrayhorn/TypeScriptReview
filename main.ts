// using IIFE to remove ts error about block scoping
(function () {

    class Point {
        // now typescript compiler will automatically
        // generate private fields for us
        // will also initial fields with value of parameters
        constructor(private x?: number, private y?: number) {
        }

        draw() {
            console.log(`X: ${this.x}, Y: ${this.y}`);
        }
    }

    let point = new Point(1, 2);
    point.draw();
    
})();