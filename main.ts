// using IIFE to remove ts error about block scoping
(function () {

    class Point {
        x: number;
        y: number;

        // cant have multiple constructors in typescript.. only 1
        // once parameter is optional, all parameters afterwards must be optional
        constructor(x?: number, y?: number) {
            this.x = x;
            this.y = y;
        }

        draw() {
            console.log(`X: ${this.x}, Y: ${this.y}`);
        }
    }

    // this code is verbose, we should use constructor instead
    let point = new Point(1, 2);
    point.draw();

    let point2 = new Point();
    // don't need this verbose code
    //point.x = 1;
    //point.y = 2;
    
    
})();