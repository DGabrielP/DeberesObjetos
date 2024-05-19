export class DnDCharacter {
    public strength: number;
    public dexterity: number;
    public constitution: number;
    public intelligence: number;
    public wisdom: number;
    public charisma: number;

    constructor(strength: number, dexterity: number, constitution: number, intelligence: number, wisdom: number,
        charisma: number,){
            this.strength = strength;
            this.dexterity = dexterity;
            this.constitution = constitution;
            this.intelligence = intelligence;
            this.wisdom = wisdom;
            this.charisma = charisma

        }


    public static generateAbilityScore(): number[] {
      const abilityScores: number[] = [];
      for (let i = 0; i < 6; i++) {
      const fourDice: number[] = [];
      for (let j = 0; j < 4; j++) {
        const score = Math.ceil(Math.random() * 6);
        fourDice.push(score);
      }  
        fourDice.sort((a, b) => a - b).splice(0, 1);
        const ability = fourDice.reduce((acumulador, elemento) => acumulador + elemento, 0);
        abilityScores.push(ability); 
       }
        return abilityScores; 
        
    }

    public static getModAbility(score: number): number{
        return Math.floor(score - 10) / 2;
    }
    public static getHitPoints(score: number): number{
        return Math.floor(score + 10);
    }
}

const abilityScores = DnDCharacter.generateAbilityScore();

interface CharacterAbilities {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

const caracterAbilitys: CharacterAbilities = {
    strength: abilityScores[0],
    dexterity: abilityScores[1],
    constitution: abilityScores[2],
    intelligence: abilityScores[3],
    wisdom: abilityScores[4],
    charisma: abilityScores[5]
};

for (const habilidad in caracterAbilitys) {
    console.log(`Su ${habilidad} es de: ${caracterAbilitys[habilidad]}`); 
}






