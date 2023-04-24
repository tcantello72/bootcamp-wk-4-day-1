const Person = require("./classes/Person.js");

function main() {
  console.log('This is the main function');

  // log to console new Person object and its properties
  console.log("PERSON 1 OBJECT BELOW")
  let person1 = new Person('ava', 'cleric', [0, 0]);
  console.log(person1.name);
  console.log(person1.classType);
  console.log(person1.location);
  // log to console new Person object and how we use methods on it
  console.log(person1.introduce());

  console.log("PERSON 2 OBJECT BELOW")
  let person2 = new Person('bertha', 'mage', [5, 0]);
  console.log(person2.introduce());
  person2.updateX(6);
  console.log(person2.location);
  person2.updateY(-4);
  console.log(person2.location);
}

main();