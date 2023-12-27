const vaishnav = {
  firstName: "vaishnav",
  age: 24,
  balance: "toMuch",
};

const address = {
  city: "pune",
  pincode: 37,
};

// for combining two objects
const person = {
  ...vaishnav,
  address: { ...address },
};

console.log(person);
