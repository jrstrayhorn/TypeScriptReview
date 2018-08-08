import { Point } from './point';

// using IIFE to remove ts error about block scoping
(function () {

    let point = new Point(1, 2);
    point.draw();
    
})();