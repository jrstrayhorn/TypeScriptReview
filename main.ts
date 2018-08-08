// using IIFE to remove ts error about block scoping
(function () {

    // issue with this initial implementation, no way to update x, y after the fact
    class Point {
        // use camel notation and prefix underscore to fields
        constructor(private _x?: number, private _y?: number) {
        }

        draw() {
            console.log(`X: ${this._x}, Y: ${this._y}`);
        }

        // getter property
        // use camel notation to name fields
        // first letter of first word is lower case and rest upper case
        // 
        get x() {
            return this._x;
        }

        // setter property
        set x(value) {
            if (value < 0)
                throw new Error('value cannot be less than 0.');

            this._x = value;
        }
    }

    let point = new Point(1, 2);
    //let x = point.getX();
    let x = point.x;    // this syntax is cleaner
    //point.setX(10);
    point.x = 10;
    point.draw();
    
})();