const Person = require("./Person.js");

class Player extends Person {
  constructor(name, classType, location, weapon) {
    super(name, classType, location);
    this.weapon = weapon;
  }
}
module.exports = Player;