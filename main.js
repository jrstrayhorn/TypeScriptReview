/* 5 - Types */
(function () {
    var count = 5;
    //count = 'a'; can't do this in type script
    var a; // type annotation, int and floating point numbers
    var b;
    var c;
    var d;
    var e = [1, 2, 3];
    var f = [1, true, 'a', false];
    // OLD School ENUM
    var ColorRed = 0;
    var ColorGreen = 1;
    var ColorBlue = 2;
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ; // by default first value is 0, best practice set values
    var backgroundColor = Color.Red;
    console.log('done');
})();
