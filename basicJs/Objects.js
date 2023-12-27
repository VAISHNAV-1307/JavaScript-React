const person = {
  firstName: "vaishnav",
  age: 24,
  balance: "toMuch",
  address: {
    city: "pune",
    pincode: 37
  },
  nameAge: function () {
    return `Name : ${this.firstName} Age : ${this.age}`;
  },
};

const {
  firstName : name,
  age,
  balance,
  address: { city : citi },
} = person;
console.log(name);
console.log(age);
console.log(balance);
console.log(citi);
