// using IIFE to remove ts error about block scoping
(function () {
    // issue with this initial implementation, no way to update x, y after the fact
    var Point = /** @class */ (function () {
        // use camel notation and prefix underscore to fields
        function Point(_x, _y) {
            this._x = _x;
            this._y = _y;
        }
        Point.prototype.draw = function () {
            console.log("X: " + this._x + ", Y: " + this._y);
        };
        Object.defineProperty(Point.prototype, "x", {
            // getter property
            // use camel notation to name fields
            // first letter of first word is lower case and rest upper case
            // 
            get: function () {
                return this._x;
            },
            // setter property
            set: function (value) {
                if (value < 0)
                    throw new Error('value cannot be less than 0.');
                this._x = value;
            },
            enumerable: true,
            configurable: true
        });
        return Point;
    }());
    var point = new Point(1, 2);
    //let x = point.getX();
    var x = point.x; // this syntax is cleaner
    //point.setX(10);
    point.x = 10;
    point.draw();
})();
