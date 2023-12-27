var person = {
  firstName: "vaishnav",
  age: 21,
  isMale: true,
  balance: "toMuch",
  dob: new Date(1999, 01, 14).toJSON(),
  address: {
    city: "pune",
    passcode: 37,
  },
};

console.log(person.firstName);
console.log(person.address.city);
console.log(Object.keys(person));
console.log(JSON.stringify(person));
