const Person = require("./Person.js");

class NPC extends Person
    {
        //static NPC_TOTAL = 0;

        constructor (name, classType, location)
            {
                super(name, classType, location);

                NPC.NPC_TOTAL++;
            }
    

        static compareClassType(npc, player)
            {
                if (npc.classType === player.classType)
                    {
                        return "We are the same class";
                    }
                else
                    {
                        return "We are not the same class";
                    }
            }
    }
module.exports = NPC;