const Person = require("./classes/Person.js");
const Player = require("./classes/Player.js");
const NPC = require("./classes/NPC.js");

// import * as Player from './classes/Player.js';

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

  console.log("PERSON 3 (WHO IS FROM A PLAYER CLASS) BELOW");
  let person3 = new Player('bella', 'rogue', [1, 0], 'her claws');
  console.log(person3.name);
  console.log(person3.weapon);

  console.log('NPCS BELOW')
  let npc1 = new NPC('bob', 'shopkeep', [0, 4]);
  console.log(NPC.NPC_TOTAL);
  console.log(NPC.NPC_MESSAGE);

  let npc2 = new NPC('bob', 'shopkeep', [0, 4]);
  console.log(NPC.NPC_TOTAL);
  console.log(NPC.NPC_MESSAGE);

  console.log(NPC.compareClassType(npc1, person2));

  console.log("private var exercises");
  console.log(person2.getHealth());
  person2.setHealth(90);
  console.log(person2.getHealth());
  person2.setHealth(909090909090);
  console.log(person2.getHealth());
}

main();