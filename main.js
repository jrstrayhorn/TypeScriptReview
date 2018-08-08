// using IIFE to remove ts error about block scoping
(function () {
    var Point = /** @class */ (function () {
        function Point() {
        }
        Point.prototype.draw = function () {
            console.log("X: " + this.x + ", Y: " + this.y);
        };
        Point.prototype.getDistance = function (another) {
            // ...
        };
        return Point;
    }());
    var point = new Point(); // how to instantiate object
    point.x = 1;
    point.y = 2;
    point.draw();
})();
