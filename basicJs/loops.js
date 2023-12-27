// for loops

/* for (var i = 0; i <= 100; i++) {
    console.log(i);
} */

var names = ["Harvey", "Tommy", "Tonny", "Jack"];

console.log("for loop");
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log();
console.log("for of loop");
for (const name of names) {
  console.log(name);
}

console.log();
console.log("forEach loop");
names.forEach(function (name) {
  console.log(name);
});

// while loop
console.log();
var number = 0;
while (number < names.length) {
    console.log(names[number]);
    number++;
}


