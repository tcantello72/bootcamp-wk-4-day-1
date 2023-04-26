const Person = require("./classes/Person.js");
const Player = require("./classes/Player.js");
const NPC = require("./classes/NPC.js");

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

  console.log("Person 3");
  let person3 = new Player("Bella", "rogue", [1,0], "her claws");
  console.log(person3.name);
  console.log(person3.weapon);

  console.log("NPC below");
  let npc1 = new NPC("bob", "shopkeeper", [0,4]);
  console.log(NPC.NPC_TOTAL);
  let npc2 = new NPC("kim", "shopkeeper", [0,5]);
  console.log(NPC.NPC_TOTAL);

  console.log (NPC.compareClassType(npc1, npc2));
}

main();