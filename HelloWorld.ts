console.log("Hello World");
console.log("Coding Gurus! " + "Time for some fun.");

for (let i=0; i <5; i++) {
    console.log(i);
}

//assign variables -- let name: type = value
let reviews: number[] = [5, 5, 4.5, 4, 3];

//basic for loop
for (let i=0; i <5; i++) {
    console.log(reviews[i]);
}

//accessing array values another way
let sportOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

    //tempSport is assigned to current value during iteration of sportOne
for (let tempSport of sportOne) {
    if (tempSport == "Cricket") {
        console.log(tempSport + " << My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}