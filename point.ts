// Module: each file is a module, this file has its own scope
// in order to use elsewhere we have to add the export keyword

export class Point {
    constructor(private x?: number, private y?: number) {
    }

    draw() {
        console.log(`X: ${this.x}, Y: ${this.y}`);
    }
}

