/* 5 - Types */
(function() {
    let count = 5;
    //count = 'a'; can't do this in type script
    
    let a: number; // type annotation, int and floating point numbers
    let b: boolean;
    let c: string;
    let d: any;
    let e: number[] = [1,2,3];
    let f: any[] = [1, true, 'a', false];
    
    // OLD School ENUM
    const ColorRed = 0;
    const ColorGreen = 1;
    const ColorBlue = 2;
    
    enum Color { Red = 0, Green = 1, Blue = 2 };  // by default first value is 0, best practice set values
    let backgroundColor = Color.Red;

    console.log('done');
})();
