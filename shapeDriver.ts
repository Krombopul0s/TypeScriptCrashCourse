import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

//let myShape = new Shape(10,15);
//console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 15);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(5, 10, 15, 20);
console.log(myRectangle.getInfo());

//declare an array for the shapes - initially empty
let theShapes: Shape[] = [];

//theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}

console.log(myCircle.calculateArea());
console.log(myRectangle.calculateArea());


