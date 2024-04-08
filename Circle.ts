import { Shape } from './Shape';

//extends here denoted inheritance
export class Circle extends Shape {

    // regular parameters for the circle
    constructor(theX: number, theY: number, private _radius: number) {
        //then we call the constructor for Shape using the x and y from above
        super(theX, theY);
    }

    // get/set accessors

    getInfo(): string {
        //calls the Shape getInfo and then adds to it
        return super.getInfo() + `, radius=${this._radius}`
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }
}