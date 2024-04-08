//
//tsc will still generate a .js file even if there is a ts compilation error and that file may still run and output what you want/expected
//to avoid this, run the tsc command with "-noEmitOnError"
//
// if you want to use this elsewhere you need to include "export"
export class Customer {
    //properties (public by default but you can define)
    //private firstName: string;
    //private lastName: string;

    /*
    constructors use the "constructor" keyword

    constructor(theFirst: string, theLast: string) {

        //you have to use "this" to refer to properties
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    */

    //shortcut for constructors will define fields at same time
    constructor(private _firstName: string, private _lastName: string) {

    }


    //getters & setters
    //
    //accessModifier method name(arguments: type): return type {
    //    method body
    // }
    /*
    public getFirstName(): string {
        return this._firstName;
    }

    public setFirstName(theFirst: string): void {
        this._firstName = theFirst;
    }
    */


    //another way of doing it with alternate syntax
    //
    //note: no return type on setter to include void
    
    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }
    
}


//use it
/*let myCustomer = new Customer();

myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";
*/

let myCustomer = new Customer("Martin", "Dixon");

//this won't work since the firstName field is prviate 
//console.log(myCustomer.firstName);

//this will
//console.log(myCustomer.firstName);