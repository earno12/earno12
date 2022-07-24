/*
let day1 = {
    squirrel: false,
    events: ["work", "touched tree",
     "pizza", "running"]
};
//console.log(day1.squirrel);
//console.log(day1.wolf);
day1.wolf = false;
//console.log(day1.wolf);

let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};

let anObject = {left: 1, right: 2};
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

console.log(Object.keys({x: 0, y: 0, z: 2}));

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

let journal = [
    {events: ["work", "touched tree", "pizza",
     "running", "television"],
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
     "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
    {events: ["weekend", "cycling", "break",
     "break", "peanuts", "beer"],
    squirrel: true}
];

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);
console.log(object1 == object3);
object1.value = 15;
console.log(object2.value);
console.log(object3.value);

const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
console.log(score);
*/
let journal = [];
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", 
"running", "televison"], false);
addEntry(["work", "ice cream", "cauliflower", 
"lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", 
"peanuts", "beer"], true);

/*
A Flat array with four-elements. 
The following code is the JavaScript 
interpretation of the phi coefficient, 
or the correlation between 
two Boolean variables.
*/
function phi(table) {
    return (table[3] * table[0] - table[2] * table [1]) / 
    Math.sqrt((table[2] + table[3]) * 
    (table[0] + table[1]) *
    (table[1] + table[3]) * 
    (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));
/*
76 is the number of times when no squirrel transformation
occurred and no pizza slices were eaten.
9 is the number of times when no squirrel transformation
occurrend, but pizza slices were eaten.
4 is the number of times when a squirrel transformation
did occur, but no pizza slices were eaten.
1 is the number of times when a squirrel transformation
did occur and pizza slices were eaten.
*/