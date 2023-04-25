const Person = require("./Person.js");

class NPC extends Person {
  static NPC_TOTAL = 0;
  static NPC_MESSAGE = 'Hello friend!';
  constructor(name, classType, location) {
    super(name, classType, location)

    NPC.NPC_TOTAL++;
  }

  static compareClassType(npc, player) {
    if (npc.classType === player.classType) {
      return `We are both the ${npc.classType} type!`
    }
    else {
      return "We are not the same type"
    }
  } 
}

module.exports = NPC;