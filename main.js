// using IIFE to remove ts error about block scoping
(function () {
    var Point = /** @class */ (function () {
        // cant have multiple constructors in typescript.. only 1
        // once parameter is optional, all parameters afterwards must be optional
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        Point.prototype.draw = function () {
            console.log("X: " + this.x + ", Y: " + this.y);
        };
        return Point;
    }());
    // this code is verbose, we should use constructor instead
    var point = new Point(1, 2);
    point.draw();
    var point2 = new Point();
    // don't need this verbose code
    //point.x = 1;
    //point.y = 2;
})();
