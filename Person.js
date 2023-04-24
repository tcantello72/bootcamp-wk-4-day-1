class Person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location || [0, 0];
  }
  
  introduce() {
    return `Hello, my name is ${this.name} and my age is ${this.age}`
  }

  updateX(val) {
    this.location[0] += val;
  }

  updateY(val) {
    this.location[1] += val;
  }
}

// let person1 = new Person('ava', 25, [0, 0]);
// {
// name: 'ava',
// age: 25,
// location: [0, 0]
// }

// let person2 = new Person('ava', 25);
// {
// name: 'ava',
// age: 25,
// location: [0, 0]
// }

module.exports = Person;