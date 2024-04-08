//Don't have to, but we are making Shape an abstract class. Think of it like a concept of something i.e. a car, a house, a plane. These things have core features that are defined (
//  all cars have a body, an engine of some sort, etc. all houses have doors, ceilings, walls, etc.) so the abstract class defines what is, and sets the ground work for what needs
// defined in a concrete class. For instance a ferrari is a car, but it has specific features that make it a ferrari.
//
//abstract methods (the features defines by the concrete classes) need to be implemented in ALL concrete classes.

export abstract class Shape {

    constructor(private _x: number, private _y: number) {

    }

    // get/set

    getInfo(): string {
        return `x=${this._x}, y=${this._y}`;
    }

    //abstract class
    abstract calculateArea(): number;
}